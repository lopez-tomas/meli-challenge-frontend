import { ItemDetail, ISeller, ISaleTerms } from '@/vite-env'
import './styles.sass'

interface Props {
  item: ItemDetail;
  seller: ISeller;
}

const ItemSeller: React.FC<Props> = ({ item, seller }) => {
  const bill = item?.sale_terms.find(term => term.id === 'INVOICE' && term.name === 'Facturación')

  return (
    <div className='ItemSeller'>
      <p className='ItemSeller-nickname'>Vendido por <span>{seller?.nickname}</span></p>
      <p className='ItemSeller-separator'>MercadoLider <span>|</span> {seller?.sales?.completed} ventas</p>
      { bill
          &&
            <p className='ItemSeller-bill'>Hace {bill?.value_name}</p>
      }
    </div>
  )
}

export default ItemSeller
