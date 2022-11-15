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
      {item.free_shipping &&
        <ItemShipment />
      }
      <ItemSeller item={item} />
      <ItemStock item={item} />
      <ItemButtons />
      <ItemGuarantee item={item} />
  </article>
  )
}

export default ItemPurchase
