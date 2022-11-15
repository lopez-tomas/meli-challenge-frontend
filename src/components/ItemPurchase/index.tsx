import { ItemDetail } from '@/vite-env'
import { FaTruck, FaMapMarkerAlt, FaReply, FaShieldAlt, FaTrophy, FaAward } from 'react-icons/fa'
import './styles.sass'

interface Props {
  item: ItemDetail
}

const ItemPurchase: React.FC<Props> = ({ item }) => {
  return (
    <article className='ItemPurchase'>
      {item.free_shipping &&
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
      }
      <div className='ItemPurchase--seller'>
        <p>Vendido por `item.seller.nickname`</p>
        <p>MercadoLider | XXX ventas</p>
        <p>Hace `item.installments.factura`</p>
      </div>
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

      <div className='ItemPurchase-buttons'>
        <button>Comprar ahora</button>
        <button>Agregar al carrito</button>
      </div>

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
  </article>
  )
}

export default ItemPurchase
