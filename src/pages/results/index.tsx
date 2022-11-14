import Item from '@/components/Item'
import { Item as ItemInterface } from '@/vite-env.d'

const ResultsPage = () => {
  return (
    <main className='ResultsPage'>
      <div className='ResultsPage-container'>
        <ol className='Items'>
          {items.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </ol>
      </div>
    </main>
  )
}

const items: ItemInterface[] = [
  {
    id: 'MLA1127704400',
    title: 'Apple iPhone 12 (64 Gb) - Morado',
    price: {
      currency: 'ARS',
      amount: 260400,
      decimals: 0,
    },
    picture: 'http://http2.mlstatic.com/D_788531-MLA46104947229_052021-I.jpg',
    condition: 'new',
    free_shipping: true,
  },
  {
    id: 'MLA930801548',
    title: 'Apple Iphone 12 (128GB) - Azul',
    price: {
      currency: 'ARS',
      amount: 301199,
      decimals: 0,
    },
    picture: 'http://http2.mlstatic.com/D_839818-MLA45719894955_042021-I.jpg',
    condition: 'new',
    free_shipping: true,
  },
  {
    id: 'MLA931457243',
    title: 'Apple iPhone 11 (128 Gb) - (product)red',
    price: {
      currency: 'ARS',
      amount: 247999,
      decimals: 0,
    },
    picture: 'http://http2.mlstatic.com/D_724631-MLA46114990506_052021-I.jpg',
    condition: 'new',
    free_shipping: true,
  }
]

export default ResultsPage
