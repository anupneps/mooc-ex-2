import React from 'react'
import '../styles.css'

const Filter = ({search, handleSearch }) => {
    return (
        <form>
            <input value={search} onChange={handleSearch}
                placeholder='Search...' />
        </form>
    )
}

export default Filter