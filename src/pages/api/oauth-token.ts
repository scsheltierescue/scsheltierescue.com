import type { APIRoute, AstroGlobal } from 'astro';

export interface Token {
  token_type: string;
  expires_in: number;
  access_token: string;
}

export const refreshAuthToken = async (ctx: AstroGlobal) => {
  console.log('refreshAuthToken START');

  let accessTokenCookie = ctx.cookies.get('petfinder-access-token')?.value;
  let tokenExpirationCookie = ctx.cookies.get('petfinder-token-expiration')?.value;

  if (!accessTokenCookie || !tokenExpirationCookie || Date.now() >= parseInt(tokenExpirationCookie, 10)) {
    console.log('refreshAuthToken accessToken ', accessTokenCookie);
    console.log('refreshAuthToken tokenExpirationCookie ', tokenExpirationCookie);
    console.log('refreshAuthToken check expire date ', Date.now() >= parseInt(tokenExpirationCookie!, 10));

    const oAuthResponse = await GET(ctx);
    const data = await oAuthResponse.json() as Token;

    console.log('refreshAuthToken data ', data);
    ctx.cookies.set('petfinder-access-token', data.access_token);
    ctx.cookies.set('petfinder-token-expiration', String(Date.now() + (data.expires_in * 1000))); // expires_in is in seconds

    console.log('refreshAuthToken FINAL accessToken ', ctx.cookies.get('petfinder-access-token')?.value);
    console.log('refreshAuthToken FINAL tokenExpirationCookie ', ctx.cookies.get('petfinder-token-expiration')?.value);
  }
}

export const GET: APIRoute = async (_ctx) => {
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

  try {
    console.log('BEFORE OAUTH RESPONSE: credentials = ', credentials);

    // Make the POST request to get the token
    const response = await fetch(authUrl, {
      method: 'POST',
      headers: headers,
      body: credentials,
    });

    console.log('OAUTH RESPONSE: ', response);
    
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Failed to get token: ${response.status} ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error('Error fetching Bearer token:', error);
    throw error;
  }
}