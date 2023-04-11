import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

    return [ htmlElRef, setFocus ] 
}

export default function SearchForm({ onClose }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [inputRef, setInputFocus] = useFocus()
    const router = useRouter()
    const { query } = router

    useEffect(()=>{
        setInputFocus()
        window.onscroll = function() {myFunction()};
    },[setInputFocus])

    function myFunction() {
        const header = document.querySelector(".topbar-section");
        const searchForm = document.querySelector(".search-form")
        const sticky = header.offsetHeight;
        if (window.pageYOffset>sticky) {
            searchForm?.classList.add("sticky");
        } else{
            searchForm?.classList.remove("sticky");
        }
      }

    function onChangeSearchQuery(e) {
        setSearchQuery(e.target.value)
    }

    function handleOnSearch(e) {
        e.preventDefault()
        onClose()
        return router.push({
            pathname: '/search',
            query: { ...query, keyword: searchQuery }
        })
    }

    function handleClickOut(e) {
        if (e.target.className === 'search-form') {
            onClose()
        }
    }

    return (
        <div className="search-form" onClick={handleClickOut}>
            <div className="search-form-layout">
                <form className="form" onSubmit={handleOnSearch}>
                    <button type="submit" className="fa fa-search button-search"></button>
                    <input
                        className="search-input"
                        value={searchQuery}
                        type="text"
                        placeholder="Search for"
                        onChange={onChangeSearchQuery}
                        ref={inputRef}
                    />
                    <button className="button-cancel" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    )
}
