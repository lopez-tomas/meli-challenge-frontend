import React from 'react'
import Button from '@/components/Button'

const ItemButtons = () => {
  return (
    <div className='ItemPurchase-buttons'>
      <Button text='Comprar ahora' />
      <Button secondary text='Agregar al carrito' />
    </div>
  )
}

export default ItemButtons
