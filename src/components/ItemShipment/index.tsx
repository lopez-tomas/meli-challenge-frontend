import { FaTruck, FaMapMarkerAlt } from 'react-icons/fa'
import './styles.sass'

const ItemShipment = () => {
  return (
    <div className='ItemShipment'>
      <div className='ItemShipment-left'>
        <FaTruck style={{ color: '#00a650' }} />
      </div>
      <div className='ItemShipment-right'>
        <p>Envío gratis a todo el país</p>
        <p>Conocé los tiempos y las formas de envío.</p>
        <div>
          <FaMapMarkerAlt
            style={{
              color: '#3483fa',
              marginRight: '6px'
            }}
          />
          <a href="#">Calcular cuándo llega</a>
        </div>
      </div>
    </div>
  )
}

export default ItemShipment
