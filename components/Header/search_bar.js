import React from 'react'

export default function SearchBar({onClickSearch}) {
    return (
        <div className="topsearch text-right w-100 rounded px-4 py-2 d-flex justify-content-between align-items-center" onClick={onClickSearch}>
            <span data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">Search for</span>
            <i className="fa fa-search" />
        </div>
    )
}
