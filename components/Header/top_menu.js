import React from 'react'

export default function Topmenu() {
    return (
        <div className="topmenu text-center">
            <ul className="list-inline">
                <li className="list-inline-item"><a href="blog-category-01.html"><i className="fa fa-star" /> Trends</a></li>
                <li className="list-inline-item"><a href="blog-category-02.html"><i className="fa fa-bolt" /> Hot Topics</a></li>
                <li className="list-inline-item"><a href="page-contact.html"><i className="fa fa-user-circle-o" /> Write for us</a></li>
            </ul>
        </div>
    )
}
