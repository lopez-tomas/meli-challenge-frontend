import Button from '@/components/Button'
import './styles.sass'

const ItemButtons = () => {
  return (
    <div className='ItemButtons'>
      <Button text='Comprar ahora' />
      <Button secondary text='Agregar al carrito' />
    </div>
  )
}

export default ItemButtons
