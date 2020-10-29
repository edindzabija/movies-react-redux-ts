import React, { useEffect, useState } from 'react'

interface Props {
  value: any
  delay: number
}

export const useDebounce: React.FC<Props> = ({ value, delay }) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
