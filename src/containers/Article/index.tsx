import { useState, useLayoutEffect } from 'react'
import { FaWindowClose } from 'react-icons/fa';
import './styles.sass'

interface Props {
  name: string;
  flex?: boolean;
  bordered?: boolean;
  children: React.ReactNode;
}

const Article: React.FC<Props> = ({ name, flex, bordered, children }) => {
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateWidth)
    updateWidth()

    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    <article className={`Article Article-${name}`}>
      <div
        className={
          `Article-container ${flex ? 'flex' : ''} ${bordered && width > 768 ? 'bordered' : ''}`}>
        {children}
      </div>
    </article>
  )
}

export default Article
