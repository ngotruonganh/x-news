import React from 'react'
import classNames from 'classnames'
import dataSocial from 'mocks/resData/dataSocial.json'
import { useRouter } from 'next/router'

export default function PostAuthor() {
    const router = useRouter()

    return (
        <div className='author-wrapper'>
            <div className="meta" onClick={() => {
                router.push("/author")
            }}>
                <div className='avatar'><img src="/mocks/icons/user1.svg" alt='' /></div>
                <div>
                    <div className='author'>FindTechX</div>
                    <div className='date'> 27 Mar 2023</div>
                </div>
            </div>
            <div className='list-social'>
                Share: {dataSocial.data.map((item, idx) => {
                    return <div className='social-item' key={idx}>
                        <div className={classNames(item.name, "dummy d-flex")} >
                            <img src={item.icon} alt='' />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
