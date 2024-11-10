// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';
import { sequence } from "astro:middleware";

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
  }
  console.log('MIDDLEWARE!!!!! petfinderMiddleware FINISH')
  return await next();
});

export const onRequest = sequence(corsMiddleware, petfinderMiddleware);