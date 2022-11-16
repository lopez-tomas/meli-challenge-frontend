import { useState, useEffect } from 'react'
import { ItemDetail } from '@/vite-env'

const useGetItemDetail = (id: ItemDetail['id'] | null = '') => {
  const [item, setItem] = useState<ItemDetail | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch(`${import.meta.env.VITE_BACKEND_URL}/${id}`)
      .then(response => response.json())
      .then(data => {
        setItem(data.item)
      })
      .catch(err => {
        setError(true)
      })

    setLoading(false)
  }, [id])

  return {
    item,
    loading,
    error
  }
}

export default useGetItemDetail
