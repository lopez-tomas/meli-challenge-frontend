import { useState } from 'react'
import { ItemDetail, IPictures } from '@/vite-env'
import Image from '@/components/Image'
import './styles.sass'

interface Props {
  title: ItemDetail['title'];
  thumbnail: ItemDetail['picture'];
  pictures: IPictures[]
}

const ItemImages: React.FC<Props> = ({ title, thumbnail, pictures }) => {
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedImageTitle, setSelectedImageTitle] = useState('')

  return (
    <article className='ItemImages'>
      <div className='ItemImages-container'>
        <div className='ItemImages-pictures--container'>
          <Image
            picture={thumbnail}
            title={title}
            changeSelectedImage={setSelectedImage}
            changeSelectedImageTitle={setSelectedImageTitle}
          />

          {pictures?.map(picture => (
            <Image
              key={picture.id}
              picture={picture.url}
              title={`${title}-${picture.id}`}
              changeSelectedImage={setSelectedImage}
              changeSelectedImageTitle={setSelectedImageTitle}
            />
          ))}
        </div>

        <img
          className='ItemImages-thumbnail'
          src={selectedImage != '' ? selectedImage : thumbnail}
          alt={selectedImageTitle != '' ? selectedImageTitle : title}
        />
      </div>
    </article>
  )
}

export default ItemImages
