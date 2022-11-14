import React from 'react'
import { Item as ItemInterface } from '@/vite-env.d'

interface Props {
  data: ItemInterface
}

const Item: React.FC<Props> = ({ data })=> {
  return (
    <li className='Item-container'>
      <div className='Item'>
        <a href="#" className='Item-img'>
          <img className='Item-img' />
        </a>
        <div className='Item-info'>
          <a href="#" className='Item-info--title'>{data.title}</a>
          <a href="#" className='Item-info--price'>$ {data.price.amount}</a>
        </div>
      </div>
    </li>
  )
}

export default Item
