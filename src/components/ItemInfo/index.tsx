import { FCItemDetail } from '@/vite-env'
import { FaRegHeart } from 'react-icons/fa'
import './styles.sass'

const ItemInfo: React.FC<FCItemDetail> = ({ item }) => {
  const nf = new Intl.NumberFormat("es-AR")

  return (
    <article className='ItemInfo'>
      <div className='ItemInfo-container'>
        <header className='ItemInfo-status'>
          <div className='ItemInfo-status--condition'>
            <p>{item?.condition} | {item?.sold_quantity} vendidos</p>
            <FaRegHeart className='Heart-icon' />
          </div>
          <div className='ItemInfo-status--title'>
            <h1>{item?.title}</h1>
          </div>
        </header>

        <div className='ItemInfo-price'>
          <h2 className='ItemInfo-price--total'>$ {nf.format(item?.price?.amount)}</h2>
          <p className='ItemInfo-price--installments'>en 6x $ {nf.format(item?.price?.amount / 6)}</p>
          <a href="#">Ver los medios de pago</a>
        </div>
      </div>

      <style jsx="true">{`
        .Heart-icon {
          font-size: 22px;
          color: #2968c8;
          cursor: pointer;
        }
      `}</style>
    </article>
  )
}

export default ItemInfo
