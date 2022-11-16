import React from 'react'
import { Link } from 'react-router-dom'
import { Item as ItemInterface } from '@/vite-env.d'
import { formatPrice } from '@/utils/'
import './index.sass'

interface Props {
  data: ItemInterface
}

const Item: React.FC<Props> = ({ data })=> {
  return (
    <article className='Item'>
      <Link
        to={`/items/${data.id}`}
        state={{ seller: data.seller }}
        title={data.title}
        className='Item-img'
      >
        <img src={data.picture} />
      </Link>
      <div className='Item-info'>
        <Link
          to={`/items/${data.id}`}
          state={{ seller: data.seller }}
          title={data.title}
          className='Item-info--title'
        >
          {data.title}
        </Link>
        <Link
          to={`/items/${data.id}`}
          state={{ seller: data.seller }}
          className='Item-info--price'
        >
          $ {formatPrice(data.price.amount)}
        </Link>
        <p className='Item-info--shipment'>Llega gratis mañana</p>
      </div>
    </article>
  )
}

export default Item
