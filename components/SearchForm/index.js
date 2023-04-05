import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function SearchForm({ onClose }) {
    const [searchQuery, setSearchQuery] = useState('')
    const router = useRouter()


    function onChangeSearchQuery(e){
        setSearchQuery(e.target.value)
    }

    function handleOnSearch(e){
        e.preventDefault()
        onClose()
        return router.push({
            pathname:'search',
            query:{s:searchQuery}
        })
    }

    return (
        <div className="search-form">
            <div className="search-form-layout">
                <form className="form" onSubmit={handleOnSearch}>
                    <button className="fa fa-search button-search"></button>
                    <input
                        className="search-input"
                        value={searchQuery}
                        type="text"
                        placeholder="Search for"
                        onChange={onChangeSearchQuery}
                    />
                    <button className="button-cancel" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    )
}
