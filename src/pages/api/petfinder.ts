export const prerender = false;

import type { APIContext } from 'astro';
import type { KVNamespace } from '@cloudflare/workers-types';

interface EnvBindings {
  TOKEN_CACHE: KVNamespace;
}

interface CustomAPIContext extends APIContext {
  locals: {
    runtime: {
      env: EnvBindings;
    }
  }
}

// Helper to get token
async function getAccessToken(context: CustomAPIContext) {
  const TOKEN_KEY = "petfinder_token";
  const { TOKEN_CACHE } = context.locals.runtime.env;
  console.log('getAccessToken!!!!! TOKEN_CACHE=', TOKEN_CACHE);

  // Retrieve the cached token from KV
  const cachedToken = await TOKEN_CACHE.get(TOKEN_KEY);
  console.log('getAccessToken!!!!! cachedToken=', cachedToken);
  if (cachedToken) {
    console.log('getAccessToken!!!!! RETURN VALID CACHED TOKEN');
    // If a token exists in KV, it's valid because KV automatically expires the value
    return cachedToken;
  }

  const clientId = import.meta.env.PETFINDER_API_CLIENT_ID;
  const clientSecret = import.meta.env.PETFINDER_API_SECRET;
  const authUrl = 'https://api.petfinder.com/v2/oauth2/token';
  const credentials = new URLSearchParams({
    'client_id': clientId,
    'client_secret': clientSecret,
    'grant_type': 'client_credentials',
  });
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'x-petfinder-security': '06ba47eb-556d-4c26-b96f-7c33211aba9a'
  };

  // Make the POST request to get the token
  try {
    const response = await fetch(authUrl, {
      method: 'POST',
      headers: headers,
      body: credentials,
    });
    console.log('getAccessToken!!!!! getAccessToken response.status = ', response.status);
    console.log('getAccessToken!!!!! getAccessToken response = ', response)
  
    if (!response.ok) {
      console.error(`Failed to get token: ${response.status} ${response.statusText}`);
      const errorText = await response.text();
      console.error('Token fetch failed:', {
        status: response.status,
        statusText: response.statusText,
        errorText,
      });
      throw new Error(`Failed to get token: ${response.status} ${response.statusText} - ${errorText}`);
    }
  
    const data = await response.json();
    console.log('getAccessToken!!!!! getAccessToken data = ', data)
  
    // Store the token in KV with an expiration time
    // Calculate the expiration TTL in seconds and subtract 1 minute for safety
    let expires = Math.floor((data.expires_in - 60));
    console.log('getAccessToken!!!!! expires = ', expires)
    await TOKEN_CACHE.put(TOKEN_KEY, data.access_token, { expirationTtl: expires });
    console.log('getAccessToken!!!!! TOKEN_CACHE = ', TOKEN_CACHE);
    return data.access_token;
  } catch (error) {
    console.error('Token fetch error:', error);
    throw error;
  }
}

export const GET = async (context: CustomAPIContext) => {
  try {
    console.log('ENDPOINT!!!!! /api/petfinder start')

    // Get URL parameters
    const url = new URL(context.request.url);
    const page = url.searchParams.get('page') || '1';
    console.log('ENDPOINT!!!!! page = ', page)

    const token = await getAccessToken(context);
    console.log('ENDPOINT!!!!! token = ', token)

    const petfinderResponse = await fetch(
      `https://api.petfinder.com/v2/animals?organization=SC92&status=adoptable&sort=-recent&page=${page}&limit=100`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    if (!petfinderResponse.ok) {
      const errorText = await petfinderResponse.text();
      throw new Error(`Petfinder API error: ${petfinderResponse.status} ${petfinderResponse.statusText} - ${errorText}`);
    }

    const data = await petfinderResponse.json();

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
      },
    });
  } catch (error) {
    console.error('Petfinder API error:', error);
    let errMsg = error instanceof Error ? error.message : 'Unknown error occurred';

    return new Response(
      JSON.stringify({
        error: 'Failed to fetch data from Petfinder',
        details: errMsg
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}