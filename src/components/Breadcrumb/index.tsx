import { useNavigate } from 'react-router-dom';
import './styles.sass'

interface Props {
  search: string;
  category: string;
  itemCategory?: string;
  width?: string;
}

const Breadcrumb: React.FC<Props> = ({ search, category, itemCategory, width }) => {
  const navigate = useNavigate()

  const goBackToResults = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    navigate(`/items?search=${search}`)
  }

  if (!category) {
    return (<></>)
  }

  if (itemCategory) {
    return (
      <section className='Breadcrumb'>
        <div className='Breadcrumb-container'>
          <a href='#' className='Breadcrumb-go-back' onClick={e => goBackToResults(e)}>Volver al listado</a>
          <span className='Breadcrumb-separator pipe'>|</span>
          <a href='#' className='Breadcrumb-category'>{category}</a>
          <span className='Breadcrumb-separator'>{'>'}</span>
          <a href='#' className='Breadcrumb-item-category'>{itemCategory}</a>
        </div>
        <div>
          <a href='#'>Compartir</a>
          <span className='Breadcrumb-separator'>|</span>
          <a href='#'>Vender uno igual</a>
        </div>
        <style jsx='true'>{`
          ${width &&
            `.Breadcrumb {
              width: ${width};
            }`
          }
        `}</style>
      </section>
    )
  }

  return (
    <section className='Breadcrumb'>
      <a href='#' className='Breadcrumb-category alone'>{category}</a>
    </section>
  )
}

export default Breadcrumb
