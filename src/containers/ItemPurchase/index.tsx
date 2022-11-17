import { ItemDetail, ISeller } from '@/vite-env'
import ItemShipment from '@/components/ItemShipment'
import ItemSeller from '@/components/ItemSeller'
import ItemStock from '@/components/ItemStock'
import ItemButtons from '@/components/ItemButtons'
import ItemGuarantee from '@/components/ItemGuarantee'

import './styles.sass'

interface Props {
  item: ItemDetail;
  seller: ISeller;
}

const ItemPurchase: React.FC<Props> = ({ item, seller }) => {
  return (
    <article className='ItemPurchase'>
      <div className='ItemPurchase-container'>
        {item?.free_shipping && <ItemShipment />}
        {seller && <ItemSeller item={item!} seller={seller} />}
        <ItemStock item={item!} />
        <ItemButtons />
        <ItemGuarantee item={item!} />
      </div>
  </article>
  )
}

export default ItemPurchase
