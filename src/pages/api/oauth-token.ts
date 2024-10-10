import type { APIRoute } from 'astro'

export interface Token {
  token_type: string;
  expires_in: number;
  access_token: string;
}

export const GET: APIRoute = async () => {
  const clientId = "g7QNEslnQXv7nwl4kIhaInPuTcWtXwF9oeeptXiEchtg43WSyC";
  const clientSecret = import.meta.env.PETFINDER_API_SECRET;
  
  console.log('clientSecret: ', clientSecret);

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
    // Make the POST request to get the token
    const response = await fetch(authUrl, {
      method: 'POST',
      headers: headers,
      body: credentials,
    });

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