import { FCItemDetail } from '@/vite-env'
import { FaReply, FaShieldAlt, FaTrophy, FaAward } from 'react-icons/fa'
import './styles.sass'

const ItemGuarantee: React.FC<FCItemDetail> = ({ item }) => {
  return (
    <div className='ItemGuarantee'>
      <div>
        <FaReply className='Icon' />
        <p>Devolución gratis. <span>Tenés 30 días desde que lo recibís.</span></p>
      </div>
      <div>
        <FaShieldAlt className='Icon' />
        <p>Compra Protegida<span>, recibí el producto que esperabas o te devolvemes tu dinero.</span></p>
      </div>
      <div>
        <FaTrophy className='Icon' />
        <p>Mercado Puntos<span>. Sumás 2151 puntos.</span></p>
      </div>
      {item?.warranty &&
        <div>
          <FaAward className='Icon' />
          <p>{item?.warranty}</p>
        </div>
      }
      <style jsx="true">{`
        .Icon {
          opacity: 0.55;
        }
      `}</style>
    </div>
  )
}

export default ItemGuarantee
