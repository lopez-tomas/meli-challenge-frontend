import React from 'react'
import { ItemDetail } from '@/vite-env'
import { FaRegHeart } from 'react-icons/fa'

interface Props {
  item: ItemDetail
}

const ItemInfo: React.FC<Props> = ({ item }) => {
  const nf = new Intl.NumberFormat("es-AR")

  return (
    <article className='ItemInfo'>
      <div className='ItemInfo--status'>
        <p>{item.condition} | {item.sold_quantity} vendidos</p>
      </div>
      <div className='ItemInfo--price'>
        <h1 className='TotalPrice'>$ {nf.format(item.price.amount)}</h1>
        <h2 className='Installments'>En 6x $ {nf.format(item.price.amount / 6)}</h2>
        <a>Ver los medios de pago</a>
      </div>
    </article>
  )
}

export default ItemInfo
