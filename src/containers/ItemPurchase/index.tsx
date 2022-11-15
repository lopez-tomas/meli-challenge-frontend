import ItemShipment from '@/components/ItemShipment'
import ItemSeller from '@/components/ItemSeller'
import ItemStock from '@/components/ItemStock'
import ItemButtons from '@/components/ItemButtons'
import ItemGuarantee from '@/components/ItemGuarantee'
import { FCItemDetail } from '@/vite-env'

import './styles.sass'

const ItemPurchase: React.FC<FCItemDetail> = ({ item }) => {
  return (
    <article className='ItemPurchase'>
      <div className='ItemPurchase-container'>
        {item.free_shipping &&
          <ItemShipment />
        }
        <ItemSeller item={item} />
        <ItemStock item={item} />
        <ItemButtons />
        <ItemGuarantee item={item} />
      </div>
  </article>
  )
}

export default ItemPurchase