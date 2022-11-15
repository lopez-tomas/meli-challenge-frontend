import { useParams } from 'react-router-dom'
import { ItemDetail } from '@/vite-env.d'
import ItemInfo from '@/components/ItemInfo'
import ItemPurchase from '@/containers/ItemPurchase'
import SellerInfo from '@/components/SellerInfo'
import './styles.sass'

const DetailPage = () => {
  const { id } = useParams()

  return (
    <main className='DetailPage'>
      <section className='Detail-container'>
        <div className='Detail-container--images'>
          <img src={item.picture} alt={item.title} />
        </div>

        <ItemInfo item={item} />

        <ItemPurchase item={item} />
      </section>

      <section className='Description-container'>
        <div>
          <h1>Descripción</h1>
          <p>{item.description}</p>
        </div>

        <SellerInfo seller={seller} />
      </section>
    </main>
  )
}

const item: ItemDetail = {
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
  warranty: 'Garantía de fábrica: 12 meses',
  sold_quantity: 1,
  description: 'El iPhone 12 tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas (1). Un frente de Ceramic Shield, cuatro veces más resistente a las caídas (2). Modo Noche en todas las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y reproducción de video en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic. Además, es compatible con los nuevos accesorios MagSafe, que se acoplan fácilmente a tu iPhone y permiten una carga inalámbrica más rápida (3). Que comience la diversión. Avisos Legales (1) La pantalla tiene las esquinas redondeadas. Si se mide en forma de rectángulo, la pantalla tiene 6.06 pulgadas en diagonal. El área real de visualización es menor. (2) La afirmación se basa en la comparación de la parte frontal de Ceramic Shield del iPhone 12 con respecto a la generación anterior de iPhone. (3) Los accesorios se venden por separado. (4) El iPhone 12 es resistente a las salpicaduras, al agua y al polvo, y fue probado en condiciones de laboratorio controladas, con una clasificación IP68 según la norma IEC 60529 (hasta 30 minutos a una profundidad máxima de 6 metros). La resistencia a las salpicaduras, al agua y al polvo no es una condición permanente y podría disminuir como consecuencia del uso normal. No intentes cargar un iPhone mojado; consulta el manual del usuario para ver las instrucciones de limpieza y secado. La garantía no cubre daños producidos por líquidos.'
}

const seller: any = {
  location: 'Palermo, Capital Federal',
  title: 'platinum',
  level: '5_green',
}

export default DetailPage
