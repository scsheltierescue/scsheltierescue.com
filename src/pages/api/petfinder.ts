export const prerender = false;

import type { APIRoute } from 'astro';

// Cache for access token
let tokenCache = {
  token: null,
  expires: 0
};

// Helper to get token
async function getAccessToken() {
  debugger;
  console.log('ENDPOINT!!!!! getAccessToken START')
  // Check if cached token is still valid
  if (tokenCache.token && Date.now() < tokenCache.expires) {
    console.log('ENDPOINT!!!!! getAccessToken token valid')
    return tokenCache.token;
  }

  const clientId = "g7QNEslnQXv7nwl4kIhaInPuTcWtXwF9oeeptXiEchtg43WSyC";
  const clientSecret = import.meta.env.PETFINDER_API_SECRET;
  const authUrl = 'https://api.petfinder.com/v2/oauth2/token';
  const credentials = new URLSearchParams({
    'client_id': clientId,
    'client_secret': clientSecret,
    'grant_type': 'client_credentials',
  });
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  // Make the POST request to get the token
  const response = await fetch(authUrl, {
    method: 'POST',
    headers: headers,
    body: credentials,
  });
  console.log('ENDPOINT!!!!! getAccessToken response = ', response)

  if (!response.ok) {
    console.error(`Failed to get token: ${response.status} ${response.statusText}`);
    const errorText = await response.text();
    console.error("Error response text:", errorText);
    throw new Error('Failed to get access token');
  }

  const data = await response.json();
  console.log('ENDPOINT!!!!! getAccessToken data = ', data)

  // Cache token
  tokenCache = {
    token: data.access_token,
    expires: Date.now() + (data.expires_in * 1000) - 60000 // Subtract 1 minute for safety
  };

  return data.access_token;
}

export const GET: APIRoute = async (context) => {
  try {
    console.log('ENDPOINT!!!!! /apt/petfinder start')

    debugger;
    // Get URL parameters
    const url = new URL(context.request.url);
    const page = url.searchParams.get('page') || '1';
    const limit = url.searchParams.get('limit') || '10';
    console.log('ENDPOINT!!!!! petfinderMiddleware page = ', page)

    const token = await getAccessToken();
    
    console.log('ENDPOINT!!!!! petfinderMiddleware token = ', token)

    const petfinderResponse = await fetch(
      `https://api.petfinder.com/v2/animals?organization=SC92&status=adoptable&page=${page}&limit=${limit}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    console.log('ENDPOINT!!!!! petfinderMiddleware petfinderResponse = ', petfinderResponse)

    if (!petfinderResponse.ok) {
      throw new Error(`Petfinder API error: ${petfinderResponse.statusText}`);
    }

    const data = await petfinderResponse.json();
    console.log('ENDPOINT!!!!! petfinderMiddleware data = ', data)

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
      },
    });
  } catch (error) {
    console.error('Petfinder API error:', error);
    let errMsg = 'Petfinder API error';
    
    if (error instanceof Error) {
      errMsg = error.message;
    }

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