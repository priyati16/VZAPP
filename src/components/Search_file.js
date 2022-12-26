import React from 'react'
import SearchBar from './SearchBar'
import BookData from '../Data.json'

function Search_file() {
    
    return (
        <div className='search_file'>
            <SearchBar placeholder="Enter a plan or any product ..." data={BookData} />
        </div>
    )
}

export default Search_file