import { useState, useEffect } from 'react'
import { IAuthor, ICategory, Item as ItemInterface } from '@/vite-env.d'

const useSearchItems = (search: string | null = '') => {
  const [author, setAuthor] = useState<IAuthor>({ name: '', lastname: '' })
  const [categories, setCategories] = useState<ICategory[]>([])
  const [items, setItems] = useState<ItemInterface[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch(`${import.meta.env.VITE_API_SEARCH_URL}?q=${search}`)
      .then(response => response.json())
      .then(data => {
        setAuthor(data.author)
        setCategories(data.categories)
        setItems(data.items)
      })
      .catch(err => {
        setError(true)
      })

    setLoading(false)
  }, [search])
  // const response = await fetch(`${import.meta.env.VITE_API_SEARCH_URL}?q=${search}`)
  // const data = await response.json()

  return {
    author,
    categories,
    items,
    loading,
    error
  }
}

export default useSearchItems