import React, { useState, useRef } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { clearURL } from '@/utils'

import logo from '@/assets/images/meli-logo.png'
import './index.sass'

const adImage = "https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp"

const SearchPage = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const formRef= useRef(null)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      search: { value: string };
    }

    setSearch(target.search.value)

    navigate({
      pathname: '/items',
      search: `search=${clearURL(target.search.value)}`
    })
  }

  return (
    <>
      <header className='SearchPage'>
        <div className='SearchPage-container'>
          <a href="#" className='Meli-logo'>
            <img
              src={logo}
              alt="Logo Mercado Libre"
            />
          </a>

          <form ref={formRef} onSubmit={e => handleSubmit(e)} className='Search-form'>
            <input
              className='Search-form--input'
              type="text"
              name="search"
              placeholder='Buscar productos, marcas y más...'
              defaultValue={search}
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
              title="Suscribite al nivel 6 con beneficios exclusivos"
            />
          </a>
        </div>
      </header>

      <Outlet />
    </>
  )
}

export default SearchPage
