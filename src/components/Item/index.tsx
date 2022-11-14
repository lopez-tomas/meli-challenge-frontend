import React from 'react'
import { Item as ItemInterface } from '@/vite-env.d'
import './index.sass'

interface Props {
  data: ItemInterface
}

const Item: React.FC<Props> = ({ data })=> {
  const nf = new Intl.NumberFormat("es-AR")

  return (
    <article className='Item'>
      <a href="#" title={data.title} className='Item-img'>
        <img src={data.picture} />
      </a>
      <div className='Item-info'>
        <a href="#" title={data.title} className='Item-info--title'>
          {data.title}
        </a>
        <a href="#" className='Item-info--price'>
          $ {nf.format(data.price.amount)}
        </a>

        <p className='Item-info--shipment'>Llega gratis mañana</p>
      </div>
    </article>
  )
}

export default Item
