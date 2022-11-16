import { ItemDetail, IPictures } from '@/vite-env';
import './styles.sass'

interface Props {
  title: ItemDetail['title'];
  thumbnail: ItemDetail['picture'];
  pictures: IPictures[]
}

const ItemImages: React.FC<Props> = ({ title, thumbnail, pictures }) => {
  return (
    <article className='ItemImages'>
      <div className='ItemImages-container'>
        <div className='ItemImages-pictures--container'>
          {pictures?.map(picture => (
            <div className='ItemImages-pictures'>
              <img
                className='ItemImages-pictures--pic'
                key={picture.id}
                src={picture.url}
                alt={`${title}-${picture.id}`}
              />
            </div>
          ))}
        </div>

        <img className='ItemImages-thumbnail' src={thumbnail} alt={title} />
      </div>
    </article>
  )
}

export default ItemImages
