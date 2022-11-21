import Article from '@/containers/Article'
import { ItemDetail, Installments } from '@/vite-env'
import { formatPrice, soldQuantityText } from '@/utils/'
import { FaRegHeart } from 'react-icons/fa'
import './styles.sass'

interface Props {
  item: ItemDetail;
  installments: Installments;
}

const ItemInfo: React.FC<Props> = ({ item, installments }) => {
  return (
    <Article name='info'>
      <header className='ItemInfo-status'>
        <div className='ItemInfo-status--condition'>
          <p>{item?.condition} | {item?.sold_quantity} {soldQuantityText(item?.sold_quantity)}</p>
          <FaRegHeart className='Heart-icon' />
        </div>
        <div className='ItemInfo-status--title'>
          <h1>{item?.title}</h1>
        </div>
      </header>

      <div className='ItemInfo-price'>
        <h2 className='ItemInfo-price--total'>
          $ {formatPrice(item?.price?.amount)}
        </h2>
        {installments
          ?
            <p className='ItemInfo-price--installments'>
              en {installments?.quantity}x $ {formatPrice(installments?.amount)}
            </p>
          :
            <p className='ItemInfo-price--installments'>
              en 6x $ {formatPrice(item?.price?.amount / 6)}
            </p>
        }
        <a href="#">Ver los medios de pago</a>
      </div>

      <style jsx="true">{`
        .Heart-icon {
          font-size: 22px;
          color: #2968c8;
          cursor: pointer;
        }
      `}</style>
    </Article>
  )
}

export default ItemInfo
