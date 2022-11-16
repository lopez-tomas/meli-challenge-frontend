import { ItemDetail, ISeller } from '@/vite-env'
import './styles.sass'

interface Props {
  item: ItemDetail;
  seller: ISeller;
}

const ItemSeller: React.FC<Props> = ({ item, seller }) => {
  return (
    <div className='ItemSeller'>
      <p className='ItemSeller-nickname'>Vendido por <span>{seller?.nickname}</span></p>
      <p className='ItemSeller-separator'>MercadoLider <span>|</span> {seller?.sales?.completed} ventas</p>
      <p className='ItemSeller-bill'>Hace `item.installments.factura`</p>
    </div>
  )
}

export default ItemSeller
