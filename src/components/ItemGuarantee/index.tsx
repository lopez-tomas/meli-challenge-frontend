import { FCItemDetail } from '@/vite-env'
import { FaReply, FaShieldAlt, FaTrophy, FaAward } from 'react-icons/fa'

const ItemGuarantee: React.FC<FCItemDetail> = ({ item }) => {
  return (
    <div className='ItemPurchase--guarantee'>
      <div>
        <FaReply />
        <p><span>Devolución gratis</span>. Tenés 30 días desde que lo recibís.</p>
      </div>
      <div>
        <FaShieldAlt />
        <p><span>Compra Protegida</span>, recibí el producto que esperabas o te devolvemes tu dinero.</p>
      </div>
      <div>
        <FaTrophy />
        <p><span>Mercado Puntos</span>. Sumás 2151 puntos.</p>
      </div>
      {item.warranty &&
        <div>
          <FaAward />
          <p>12 meses de garantía de fábrica</p>
        </div>
      }
    </div>
  )
}

export default ItemGuarantee
