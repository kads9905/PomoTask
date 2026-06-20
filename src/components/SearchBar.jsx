import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type='text'
      placeholder='Search tasks...'
      value={searchTerm}
      onChange={(e) =>
        setSearchTerm(e.target.value)
      }
      className='w-full lg:w-80 bg-zinc-800 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 outline-none'
    />
  )
}

export default SearchBar