import React from 'react'
import StarRating from './star_rating'
export default function BlogListWidget({ data,type }) {
    return (
        <>
            {data.length > 0 &&
                data.map((item,idx) => {
                    return <div className="blog-list-widget" key={idx}>
                        <div className="list-group">
                            <a href={item.url} className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="w-100 justify-content-between">
                                    <img src={item.image} alt="" className="img-fluid float-left" />
                                    <h5 className="mb-1">{item.title}</h5>
                                    {type==='date' && <small>{item.date}</small>}
                                    {type==='star' && <StarRating numStart={item.star}/>}
                                </div>
                            </a>
                        </div>
                    </div>
                })
            }
        </>
    )
}


