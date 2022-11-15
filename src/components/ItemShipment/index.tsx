import React from 'react'
import { FaTruck, FaMapMarkerAlt } from 'react-icons/fa'

const ItemShipment = () => {
  return (
    <div className='ItemPurchase-shipment'>
      <div>
        <FaTruck />
        <p>Envío gratis a todo el país</p>
      </div>
      <div>
        <p>Conocé los tiempos y las formas de envío.</p>
      </div>
      <div>
        <FaMapMarkerAlt />
        <a href="#">Calcular cuándo llega</a>
      </div>
    </div>
  )
}

export default ItemShipment
