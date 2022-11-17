import React from 'react'
import { Link } from 'react-router-dom'
import { Item as ItemInterface } from '@/vite-env.d'
import { formatPrice } from '@/utils/'
import './styles.sass'

interface Props {
  data: ItemInterface;
  category: string | null;
  search: string;
}

const Item: React.FC<Props> = ({ data, category, search })=> {
  return (
    <article className='Item'>
      <Link
        to={`/items/${data.id}`}
        state={{
          seller: data.seller,
          installments: data.installments,
          category: category,
          search: search
        }}
        title={data.title}
        className='Item-img'
      >
        <img src={data.picture} />
      </Link>
      <div className='Item-info'>
        <Link
          to={`/items/${data.id}`}
          state={{
            seller: data.seller,
            installments: data.installments,
            category: category,
            search: search
          }}
          title={data.title}
          className='Item-info--title'
        >
          {data.title}
        </Link>
        <Link
          to={`/items/${data.id}`}
          state={{
            seller: data.seller,
            installments: data.installments,
            category: category,
            search: search
          }}
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
