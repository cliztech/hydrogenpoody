import { http, HttpResponse } from 'msw';

// TODO: replace MSW mock with live Shopify Storefront API.
export const handlers = [
  http.get('/products', () =>
    HttpResponse.json({
      products: [
        { id: 1, title: 'Poody Plush', price: '$25.00' },
        { id: 2, title: 'Poody Tee', price: '$20.00' },
      ],
    })
  ),
];
