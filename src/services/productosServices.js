// ENDPOINTS DE PRODUCTO

export function getById(id) {
  return fetch(`https://api.mercadolibre.com/items/${id}`)
  .then((res) => res.json()) 
}
