import classNames from 'classnames'
import React from 'react'
import { getTagColor } from 'utils/func'

export default function RankBox({ title, data ,className}) {
    return <div className={classNames("rank-wrapper",className)}>
        {title}
        <hr className='throw-line' />
        {data.map((item, idx) => {
            return <div className="rank-item" key={idx}>
                <span className='title'>
                    <img src="/assets/icons/icon-right.svg" alt='' />
                    {item.name}
                </span>
                <span className={classNames("total", getTagColor(item.tagSeo))} >{item.total}</span>
            </div>
        })}
    </div>
}
