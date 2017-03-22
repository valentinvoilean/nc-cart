import http from './apiInstance';

export function loadProducts() {
  return http.get('/products');
}
