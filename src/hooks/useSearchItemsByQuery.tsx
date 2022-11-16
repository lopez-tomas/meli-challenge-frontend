import React from 'react'
import useSearchItems from '@/hooks/useSearchItems'

const useSearchItemsByQuery = (query: string | null) => useSearchItems(query)

export default useSearchItemsByQuery
