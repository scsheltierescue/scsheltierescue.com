import { GET as GET_OAUTH_TOKEN } from '../api/oauth-token.ts'

import type { APIRoute } from 'astro'
import type { Token } from '../api/oauth-token.ts'

export const GET: APIRoute = async (ctx) => {
  try {
    const oAuthResponse = await GET_OAUTH_TOKEN(ctx)
    const data = await oAuthResponse.json() as Token;
    const token = data.access_token;
  
    const headers = {
      'Authorization': `Bearer ${token}`,
    };

    // retrieve relevant search parameters, aka URL query parameters
    const queryParams = ctx.url.searchParams;
    const page = queryParams.get("page") || '1';

    const shelterId = "SC92";
    const status = "adoptable";
    const params = `?organization=${shelterId}&status=${status}&page=${page}&limit=25`;
    const url = `https://api.petfinder.com/v2/animals${params}`;

    // Make the GET request using fetch with the Bearer token
    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error('Error making data request:', error);
    throw error;
  }
}