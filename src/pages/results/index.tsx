import { useSearchParams } from 'react-router-dom'

import useSearchItemsByQuery from '@/hooks/useSearchItemsByQuery'
import { IAuthor, ICategory, Item as ItemInterface } from '@/vite-env.d'
import Breadcrumb from '@/components/Breadcrumb'
import Loading from '@/components/Loading'
import Item from '@/components/Item'

import { FaInfoCircle } from 'react-icons/fa'
import './styles.sass'

interface ICustomHook {
  author: IAuthor;
  categories: ICategory[];
  items: ItemInterface[];
  loading: boolean;
  error: boolean;
}

const ResultsPage = () => {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')

  const {
    author,
    categories,
    items,
    loading,
    error
  }: ICustomHook = useSearchItemsByQuery(search)

  if (loading) {
    return (
      <Loading message={'Buscando...'} />
    )
  }

  return (
    <main className='ResultsPage'>
      {categories?.length > 0 && <Breadcrumb search={search!} category={categories[0]?.name} />}

      <section className='Items'>
        {loading && <div>Cargando...</div>}

        {error && <div>Ocurrió un error</div>}

        {!loading && !error && items?.map((item) => (
          <Item
            key={item.id}
            data={item}
            category={categories?.length > 0 ? categories[0]?.name : ''}
            search={search!}
          />
        ))}
      </section>

      <div className='Disclaimer'>
        <FaInfoCircle style={{ color: '#3483fa' }} />
        <p>El envío gratis está sujeto al peso, precio y la distancia del envío.</p>
      </div>
    </main>
  )
}

export default ResultsPage
