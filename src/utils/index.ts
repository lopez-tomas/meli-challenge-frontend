const clearURL = (url: string): string => {
  return url
          .toLowerCase()
          .replace(/\s/g, '-')
          .replace(/[^a-z0-9-]/g, '')
}

const formatPrice = (price: number): string => {
  const nf = new Intl.NumberFormat("es-AR")

  return nf.format(price)
}

const itemAvailableQuantity = (quantity: number): string => {
  return quantity > 1 ? 'disponibles' : 'disponible'
}

const soldQuantityText = (sold_quantity: number): string => {
  return sold_quantity > 1 || sold_quantity == 0 ? 'vendidos' : 'vendido'
}

const getLevelNumber = (level: string): string => {
  return level.split('_')[0]
}

export {
  clearURL,
  formatPrice,
  itemAvailableQuantity,
  soldQuantityText,
  getLevelNumber
}