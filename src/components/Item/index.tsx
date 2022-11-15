import { useNavigate } from 'react-router-dom'
import { Item as ItemInterface } from '@/vite-env.d'
import './index.sass'
import React from 'react'

interface Props {
  data: ItemInterface
}

const Item: React.FC<Props> = ({ data })=> {
  const navigate = useNavigate()
  const nf = new Intl.NumberFormat("es-AR")

  const goToDetail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigate(`/items/${data.id}`)
  }

  return (
    <article className='Item'>
      <a
        href={`/items/${data.id}`}
        onClick={e => goToDetail(e)}
        title={data.title}
        className='Item-img'
      >
        <img src={data.picture} />
      </a>
      <div className='Item-info'>
        <a
          href={`/items/${data.id}`}
          onClick={e => goToDetail(e)}
          title={data.title}
          className='Item-info--title'
        >
          {data.title}
        </a>
        <a
          href={`/items/${data.id}`}
          onClick={e => goToDetail(e)}
          className='Item-info--price'
        >
          $ {nf.format(data.price.amount)}
        </a>
        <p className='Item-info--shipment'>Llega gratis mañana</p>
      </div>
    </article>
  )
}

export default Item
