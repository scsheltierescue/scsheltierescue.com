import { refreshAuthToken } from '../api/oauth-token.ts'

import type { APIRoute } from 'astro'

const maxRetries = 1;
const shelterId = "SC92";
const status = "adoptable";

export const GET: APIRoute = async (ctx) => {
  let retries = 0;

  while (retries <= maxRetries) {
    try {
      await refreshAuthToken(ctx);

      console.log('ANIMALS TEST accessToken FINAL: ', ctx.cookies.get('petfinder-access-token')!.value);

      const headers = {
        'Authorization': `Bearer ${ctx.cookies.get('petfinder-access-token')!.value}`,
      };
      console.log('ANIMALS TEST headers: ', headers);
      // retrieve relevant search parameters, aka URL query parameters
      const queryParams = ctx.url.searchParams;
      const page = queryParams.get("page") || '1';

      const params = `?organization=${shelterId}&status=${status}&page=${page}&limit=25`;
      const url = `https://api.petfinder.com/v2/animals${params}`;
  
      // Make the GET request using fetch with the Bearer token
      const response = await fetch(url, {
        method: 'GET',
        headers,
      });
      console.log('get animals response ', response);

      // Handle 401 Unauthorized (possible stale oauth token)
      if (response.status === 401) {
        retries++;
        ctx.cookies.delete('petfinder-access-token');
        if (retries <= maxRetries) console.log(`Request failed with 401, retrying (${retries}/${maxRetries})...`);
      } else if(!response.ok) {
        // Check if the request was successful
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      } else {
        return response;
      }
    } catch (error) {
      console.error('Error making data request:', error);
      throw error;
    }
  }

  throw new Error('Exceeded maximum oauth-token retries');
}