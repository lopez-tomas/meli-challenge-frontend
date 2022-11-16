import { ISeller } from '@/vite-env';
import { FaMapMarkerAlt, FaAward } from 'react-icons/fa'
import { getLevelNumber } from '@/utils/'
import './styles.sass'

interface Props {
  seller: ISeller;
}

const SellerInfo: React.FC<Props> = ({ seller }) => {
  const levelNumber = getLevelNumber(seller?.level)

  return (
    <article className='SellerInfo'>
      <div className='SellerInfo-container'>
        <h1 className='SellerInfo-container--title'>Información sobre el vendedor</h1>

        <div className='SellerInfo-location'>
          <FaMapMarkerAlt />
          <div>
            <p>Ubicación</p>
            <p>{seller?.location?.city}, {seller?.location?.state}</p>
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
          <ul className='SellerInfo-level--container'>
            <li id='level-1' className={`Levels ${levelNumber == '1' && 'active'}`}></li>
            <li id='level-2' className={`Levels ${levelNumber == '2' && 'active'}`}></li>
            <li id='level-3' className={`Levels ${levelNumber == '3' && 'active'}`}></li>
            <li id='level-4' className={`Levels ${levelNumber == '4' && 'active'}`}></li>
            <li id='level-5' className={`Levels ${levelNumber == '5' && 'active'}`}></li>
          </ul>
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
