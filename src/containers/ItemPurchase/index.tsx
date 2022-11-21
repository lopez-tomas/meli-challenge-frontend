import Article from '@/containers/Article'
import ItemShipment from '@/components/ItemShipment'
import ItemSeller from '@/components/ItemSeller'
import ItemStock from '@/components/ItemStock'
import ItemButtons from '@/components/ItemButtons'
import ItemGuarantee from '@/components/ItemGuarantee'
import { ItemDetail, ISeller } from '@/vite-env'

import './styles.sass'

interface Props {
  item: ItemDetail;
  seller: ISeller;
}

const ItemPurchase: React.FC<Props> = ({ item, seller }) => {
  return (
    <Article name='purchase' bordered>
      {item?.free_shipping && <ItemShipment />}
      {seller && <ItemSeller item={item!} seller={seller} />}
      <ItemStock item={item!} />
      <ItemButtons />
      <ItemGuarantee item={item!} />
    </Article>
  )
}

export default ItemPurchase
