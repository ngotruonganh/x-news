import React from 'react'
import dataTag from '../../mocks/resData/dataTag.json'
import classNames from 'classnames'
import { getTagColor } from '../../utils/func'

export default function SideTag({title,showTag=true}) {
    return (
        <div className="d-flex justify-content-between side-tag-wrapper">
            <div className="title">{title}</div>
            <div>
                {showTag && dataTag.data.map((item, idx) => {
                    return <span key={idx} className={classNames("tag m-1", getTagColor(item.tagSeo))} >{item.name}</span>
                })}
            </div>
        </div>
    )
}
