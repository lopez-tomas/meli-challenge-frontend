import { useState, useEffect } from 'react'
import { IAuthor, ICategory, Item as ItemInterface } from '@/vite-env.d'

const useSearchItems = (search: string | null = '') => {
  const [author, setAuthor] = useState<IAuthor>({ name: '', lastname: '' })
  const [categories, setCategories] = useState<ICategory[]>([])
  const [items, setItems] = useState<ItemInterface[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch(`${import.meta.env.VITE_LOCAL_BACKEND_URL}?q=${search}`)
      .then(response => response.json())
      .then(data => {
        setAuthor(data.author)
        setCategories(data.categories)
        setItems(data.items)
        setLoading(false)
      })
      .catch(err => {
        setError(true)
      })

  }, [search])

  return {
    author,
    categories,
    items,
    loading,
    error
  }
}

export default useSearchItems