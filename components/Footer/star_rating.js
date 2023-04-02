import React from 'react'

export default function StarRating({ numStart }) {

    function renderStart() {
        let result = []
        for (let i = 0; i < numStart; i++) {
            result.push(<i className="fa fa-star" key={i} />)
        }
        return result
    }

    return (
        <span className="rating">
            {renderStart()}
        </span>
    )
}
