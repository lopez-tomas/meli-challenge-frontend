import './styles.sass'

const Footer = () => {
  const handleClick = (e: any) => {
    e.preventDefault()
  }

  return (
    <footer className='Footer'>
      <div className='Footer-container'>
        <div>
          <nav className='Footer-links'>
            {links.map((link, index) => (
              <a
                key={index}
                href='#'
                onClick={handleClick}
                className='Footer-links--link'
              >
                {link}
              </a>
            ))}
          </nav>
          <small>Copyright ©&nbsp; 1999-2022 MercadoLibre S.R.L.</small>
        </div>
        <p className='Footer-direction'>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</p>
      </div>
    </footer>
  )
}

const links: string[] = [
  'Trabajá con nosotros',
  'Términos y condiciones',
  'Cómo cuidamos tu privacidad',
  'Accesibilidad',
  'Información al usuario financiero',
  'Ayuda',
  'Defensa del Consumidor',
  'Información sobre seguros'
]

export default Footer
