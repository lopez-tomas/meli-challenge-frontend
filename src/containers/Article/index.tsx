import './styles.sass'

interface Props {
  name: string;
  flex?: boolean;
  bordered?: boolean;
  children: React.ReactNode;
}

const Article: React.FC<Props> = ({ name, flex, bordered, children }) => {
  return (
    <article className={`Article Article-${name}`}>
      <div
        className={
          `Article-container ${flex ? 'flex' : ''} ${bordered ? 'bordered' : ''}`}>
        {children}
      </div>
    </article>
  )
}

export default Article
