import './styles.sass'

interface Props {
  secondary?: boolean;
  text: string;
}

const Button: React.FC<Props> = ({ secondary, text }) => {
  if (secondary) {
    return (
      <button
        className={`Button ${secondary ? 'secondary' : ''}`}
        >
          {text}
        </button>
    )
  }

  return (
    <button className='Button'>{text}</button>
  )
}

export default Button
