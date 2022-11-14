import { FaSearch } from 'react-icons/fa'
import logo from '@/assets/images/meli-logo.png'
import './index.sass'

const adImage = "https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp"

const SearchPage = () => {
  return (
    <header className='SearchPage'>
      <div className='SearchPage-container'>
        <a href="#" className='Meli-logo'>
          <img
            src={logo}
            alt="Logo Mercado Libre"
          />
        </a>

        <form className='Search-form'>
          <input
            className='Search-form--input'
            type="text"
            placeholder='Buscar productos, marcas y más...'
            spellCheck='false'
          />
          <button className='Search-form--button'>
            <FaSearch />
          </button>
        </form>

        <a href="#" className='Meli-ad'>
          <img
            src={adImage}
            alt="meli-ad"
          />
        </a>
      </div>
    </header>
  )
}

export default SearchPage
