import './styles.sass'

interface Props {
  message: string;
}

const Loading: React.FC<Props> = ({ message }) => {
  return (
    <main className="Loading">
      <section className='Loading-container'>
        <p className='Loading-msg'>{message}</p>
      </section>
    </main>
  )
}

export default Loading
