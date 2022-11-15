import React from 'react'

interface Props {
  secondary?: boolean;
  text: string;
}

const Button: React.FC<Props> = ({ secondary, text }) => {
  if (secondary) {
    return (
      <button>{text}</button>
    )
  }

  return (
    <button>{text}</button>
  )
}

export default Button
