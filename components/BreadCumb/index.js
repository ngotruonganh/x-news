import React from 'react'

export default function BreadCrumb({subTitle}) {
    return (
        <div className="link">
            <img src="/assets/icons/contact-us-1.svg" alt="" />
            Home / {subTitle}
        </div>
    )
}
