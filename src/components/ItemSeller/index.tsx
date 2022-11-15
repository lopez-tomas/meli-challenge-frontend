import { FCItemDetail } from '@/vite-env'

const ItemSeller: React.FC<FCItemDetail> = ({ item }) => {
  return (
    <div className='ItemPurchase--seller'>
      <p>Vendido por `item.seller.nickname`</p>
      <p>MercadoLider | XXX ventas</p>
      <p>Hace `item.installments.factura`</p>
    </div>
  )
}

export default ItemSeller
