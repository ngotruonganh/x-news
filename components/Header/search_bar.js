import React from 'react'

export default function SearchBar({onClickSearch}) {
    return (
        <div className="topsearch text-right" onClick={onClickSearch}>
            <span data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-search" /> Search</span>
        </div>
    )
}
