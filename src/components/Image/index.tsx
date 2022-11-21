import { useRef } from 'react'
import './styles.sass'

interface ImageProps {
  picture: string;
  title: string;
  active?: boolean;
  changeSelectedImage:  React.Dispatch<React.SetStateAction<string>>
  changeSelectedImageTitle:  React.Dispatch<React.SetStateAction<string>>
}

const Image: React.FC<ImageProps> = ({
  picture,
  title,
  active,
  changeSelectedImage,
  changeSelectedImageTitle
}) => {
  const imgDiv = useRef<HTMLDivElement>(null)

  const handleHover = () => {
    if (imgDiv.current != null) {
      imgDiv.current.style.borderColor = '#3483fa'
    }
    changeSelectedImage(picture);
    changeSelectedImageTitle(title);
  }

  const handleHoverOut = (e: any) => {
    if (imgDiv.current != null) {
      imgDiv.current.style.borderColor = 'rgba(0, 0, 0, .25)'
    }
  }

  return (
    <div ref={imgDiv} className='Image'>
      <img
        onMouseOver={handleHover}
        onMouseOut={handleHoverOut}
        className='Image-pic'
        src={picture}
        alt={title}
      />
    </div>
  )
}

export default Image