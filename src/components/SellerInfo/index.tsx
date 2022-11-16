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
            {levels.map((level, index) => (
              <LevelItem key={index} level={levelNumber} compare={level} />
            ))}
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

const levels = [ 1, 2, 3, 4, 5 ]

interface ILevelItem {
  level: string | number;
  compare: number | string;
}

const LevelItem: React.FC<ILevelItem> = ({ level, compare }) => {
  return (
    <li id={`level-${compare}`} className={`Levels ${level == `${compare}` && 'active'}`}></li>
  )
}

export default SellerInfo
