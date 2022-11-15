import { FCItemDetail } from '@/vite-env'
import './styles.sass'

const ItemSeller: React.FC<FCItemDetail> = ({ item }) => {
  return (
    <div className='ItemSeller'>
      <p className='ItemSeller-nickname'>Vendido por <span>`item.seller.nickname`</span></p>
      <p className='ItemSeller-separator'>MercadoLider <span>|</span> XXX ventas</p>
      <p className='ItemSeller-bill'>Hace `item.installments.factura`</p>
    </div>
  )
}

export default ItemSeller
