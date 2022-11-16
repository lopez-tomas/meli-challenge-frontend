import { FaMapMarkerAlt, FaAward } from 'react-icons/fa'
import './styles.sass'

interface Props {
  seller: any;
}

const SellerInfo: React.FC<Props> = ({ seller }) => {
  return (
    <article className='SellerInfo'>
      <div className='SellerInfo-container'>
        <h1 className='SellerInfo-container--title'>Información sobre el vendedor</h1>

        <div className='SellerInfo-location'>
          <FaMapMarkerAlt />
          <div>
            <p>Ubicación</p>
            <p>{seller?.location}</p>
          </div>
        </div>

        <div className='SellerInfo-title'>
          <FaAward className='AwardIcon' />
          <div>
            <p>MercadoLíder {seller?.title}</p>
            <p>¡Es uno de los mejores del sitio!</p>
          </div>
        </div>

        <div className='SellerInfo-level'>
          {seller?.level}
        </div>
      </div>

      <style jsx="true">{`
        .AwardIcon {
          color: #00a650;
        }
      `}</style>
    </article>
  )
}

export default SellerInfo
