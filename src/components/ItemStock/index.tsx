import { FCItemDetail } from '@/vite-env'
import { itemAvailableQuantity } from '@/utils/'
import './styles.sass'

const ItemStock: React.FC<FCItemDetail> = ({ item }) => {
  let options = []

  for(let i = 1; i <= item?.available_quantity; i++) {
    const option = {
      value: `${i}`,
      text: `${i} ${i > 1 ? 'unidades' : 'unidad'}`
    }
    options.push(option)
  }

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
          {options?.map((option, index) => (
            <option key={index} value={option.value}>{option.text}</option>
          ))}
        </select>
        <p className='ItemStock-msg'>({item?.available_quantity} {itemAvailableQuantity(item?.available_quantity)})</p>
      </div>
    </div>
  )
}

export default ItemStock
