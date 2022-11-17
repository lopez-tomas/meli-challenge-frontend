import { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import useGetItemDetail from '@/hooks/useGetItemDetail'
import { ISeller, Installments } from '@/vite-env.d'

import ItemImages from '@/components/ItemImages'
import ItemInfo from '@/components/ItemInfo'
import ItemPurchase from '@/containers/ItemPurchase'
import SellerInfo from '@/components/SellerInfo'
import './styles.sass'

const DetailPage = () => {
  const { id } = useParams()
  const { item, loading, error } = useGetItemDetail(id)

  const location = useLocation()
  const seller: ISeller = location.state?.seller
  const installments: Installments = location.state?.installments

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  if (loading) {
    return (
      <main className='DetailPage'>
        <section className='Detail-container'>
          <p>Cargando...</p>
        </section>
      </main>
    )
  }

  return (
    <main className='DetailPage'>
      <section className='Detail-container'>
        <ItemImages title={item?.title!} thumbnail={item?.picture!} pictures={item?.pictures!} />

        <ItemInfo item={item!} installments={installments} />

        <ItemPurchase item={item!} seller={seller} />
      </section>

      <section className='Description-container'>
        <div>
          <h1>Descripción</h1>
          <p>{item?.description}</p>
        </div>

        <SellerInfo seller={seller} />
      </section>
    </main>
  )
}

export default DetailPage
