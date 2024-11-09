// app.get('/api/petfinder', async (req, res) => {
//   const response = await fetch(`https://api.petfinder.com/v2/animals?organization=SC92&status=adoptable&page=1&limit=10`, {
//     headers: {
//       Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`
//     }
//   });
//   const data = await response.json();
//   res.json(data);
// });

/*
        const headers = { Authorization: `Bearer ${token}` };
        const params = `?organization=${shelterId}&status=${status}&page=${page}&limit=${limit}`;
        const url = `https://api.petfinder.com/v2/animals${params}`;
  
        const response = await fetch(url, { method: 'GET', headers });
        console.log('get animals response ', response);

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
  
        const data = await response.json() as SCSRAnimals;

*/

/*
// src/middleware.ts
import type { APIRoute } from 'astro';

// This is your server-side proxy route in Astro
export const all: APIRoute = async ({ request }) => {
  const shelterId = 'SC92';
  const status = 'adoptable';
  const limit = 10;

  console.log('MIDDLEWARE!!!!! request = ', request)
  try {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || '1'; // Default to page 1 if no page is specified
    const token = request.headers.get('Authorization');
    const headers = { Authorization: `Bearer ${token}` };
    const params = `?organization=${shelterId}&status=${status}&page=${page}&limit=${limit}`;
    const petfinderUrl = `https://api.petfinder.com/v2/animals${params}`;

    if (!token) {
      return new Response(JSON.stringify({ error: 'Authorization token is required' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch(petfinderUrl, { method: 'GET', headers });

    // Make the request to Petfinder's API with your authorization token
    // const response = await fetch(petfinderUrl, {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.PETFINDER_API_TOKEN}`, // Fetch token from environment variables
    //   },
    // });
    console.log('MIDDLEWARE!!!!! response = ', response)
    // Handle response errors from Petfinder
    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch data from Petfinder API' }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Convert the response to JSON
    const data = await response.json();
    console.log('MIDDLEWARE!!!!! data = ', data)

    // Return the data with CORS headers to allow frontend access
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allow frontend access
      },
    });
  } catch (error) {
    // Catch any other errors and return a 500 response
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
*/

// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';
import { sequence } from "astro:middleware";

// Cache for access token
let tokenCache = {
  token: null,
  expires: 0
};

// Helper to get token
async function getAccessToken() {
  debugger;
  console.log('MIDDLEWARE!!!!! getAccessToken START')
  // Check if cached token is still valid
  if (tokenCache.token && Date.now() < tokenCache.expires) {
    console.log('MIDDLEWARE!!!!! getAccessToken token valid')
    return tokenCache.token;
  }

  const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: 'g7QNEslnQXv7nwl4kIhaInPuTcWtXwF9oeeptXiEchtg43WSyC',
      client_secret: import.meta.env.PETFINDER_API_SECRET,
    }),
  });
  console.log('MIDDLEWARE!!!!! getAccessToken response = ', response)

  if (!response.ok) {
    throw new Error('Failed to get access token');
  }

  const data = await response.json();
  console.log('MIDDLEWARE!!!!! getAccessToken data = ', data)

  // Cache token
  tokenCache = {
    token: data.access_token,
    expires: Date.now() + (data.expires_in * 1000) - 60000 // Subtract 1 minute for safety
  };

  return data.access_token;
}

const corsMiddleware = defineMiddleware(async (context, next) => {
  console.log('MIDDLEWARE!!!!! corsMiddleware START')
  if (context.url.pathname.startsWith('/api/')) {
    const origin = context.request.headers.get('Origin') || '*';
    console.log('MIDDLEWARE!!!!! corsMiddleware origin = ', origin)
    console.log('MIDDLEWARE!!!!! corsMiddleware context.request.method = ', context.request.method)
    if (context.request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Allow-Origin': origin,
          'Access-Control-Max-Age': '86400', // 24 hours
        },
      });
    }
  }
  console.log('MIDDLEWARE!!!!! corsMiddleware FINISH')
  return await next();
});

const petfinderMiddleware = defineMiddleware(async (context, next) => {
  console.log('MIDDLEWARE!!!!! petfinderMiddleware START context.url = ', context.url)
  if (context.url.pathname === '/api/petfinder') {
    console.log('MIDDLEWARE!!!!! petfinderMiddleware pathname === /api/petfinder')
    // try {
    //   // Get URL parameters
    //   const url = new URL(context.request.url);
    //   const page = url.searchParams.get('page') || '1';
    //   const limit = url.searchParams.get('limit') || '10';

    //   const token = await getAccessToken();
      
    //   console.log('MIDDLEWARE!!!!! petfinderMiddleware page = ', page)
    //   console.log('MIDDLEWARE!!!!! petfinderMiddleware token = ', token)

    //   const petfinderResponse = await fetch(
    //     `https://api.petfinder.com/v2/animals?organization=SC92&status=adoptable&page=${page}&limit=${limit}`,
    //     {
    //       headers: {
    //         'Authorization': `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   console.log('MIDDLEWARE!!!!! petfinderMiddleware petfinderResponse = ', petfinderResponse)

    //   if (!petfinderResponse.ok) {
    //     throw new Error(`Petfinder API error: ${petfinderResponse.statusText}`);
    //   }

    //   const data = await petfinderResponse.json();
    //   console.log('MIDDLEWARE!!!!! petfinderMiddleware data = ', data)

    //   return new Response(JSON.stringify(data), {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*',
    //       'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
    //     },
    //   });
    // } catch (error) {
    //   console.error('Petfinder API error:', error);
    //   let errMsg = 'Petfinder API error';
      
    //   if (error instanceof Error) {
    //     errMsg = error.message;
    //   }

    //   return new Response(
    //     JSON.stringify({
    //       error: 'Failed to fetch data from Petfinder',
    //       details: errMsg
    //     }),
    //     {
    //       status: 500,
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //       },
    //     }
    //   );
    // }
  }
  console.log('MIDDLEWARE!!!!! petfinderMiddleware FINISH')
  return await next();
});

export const onRequest = sequence(corsMiddleware, petfinderMiddleware);