import { FCItemDetail } from '@/vite-env'
import './styles.sass'

const ItemStock: React.FC<FCItemDetail> = ({ item }) => {
  return (
    <div className='ItemStock'>
      <h1 className='ItemStock-title'>Stock disponible</h1>
      <div>
        <label
          className='ItemStock-quantity'
          htmlFor="quantity"
        >
          Cantidad:
        </label>
        <select
          className='ItemStock-select'
          id="quantity"
          name="quantity"
        >
          <option value="1">1 unidad</option>
          <option value="2">2 unidades</option>
          <option value="3">3 unidades</option>
          <option value="4">4 unidades</option>
        </select>
        <p className='ItemStock-msg'>(4 disponibles)</p>
      </div>
    </div>
  )
}

export default ItemStock
