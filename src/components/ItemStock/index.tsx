import { FCItemDetail } from '@/vite-env'

const ItemStock: React.FC<FCItemDetail> = ({ item }) => {
  return (
    <div className='ItemPurchase--stock'>
      <h1>Stock disponible</h1>
      <label htmlFor="quantity">Cantidad:</label>
      <select name="quantity">
        <option value="1">1 unidad</option>
        <option value="2">2 unidades</option>
        <option value="3">3 unidades</option>
        <option value="4">4 unidades</option>
      </select>
      <p>(4 disponibles)</p>
    </div>
  )
}

export default ItemStock
