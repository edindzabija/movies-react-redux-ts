import React, { useRef } from 'react'
import styles from '../styles/search.module.css'

interface SearchProps {
  onSearch: (searchQuery: string) => void
  query: string
}

const Search: React.FC<SearchProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onChangeHandler = () => {
    const enteredText = inputRef.current!.value
    props.onSearch(enteredText)
  }

  return (
    <div className={styles.search}>
      <form>
        <input
          value={props.query}
          type='text'
          id='search'
          name='search'
          placeholder='Search:'
          ref={inputRef}
          onChange={onChangeHandler}
        />
      </form>
    </div>
  )
}

export default Search
