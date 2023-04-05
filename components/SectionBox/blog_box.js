import React from 'react'
import Link from 'next/link';
export default function BlogBox({ className, data, desc = false, showName = false }) {

    return (
        data ? <div className="blog-box">
            <div className="post-media">
                <Link
                    href={{
                        pathname: `${data.type.toLowerCase()}/[blog]`,
                        query: {
                            blog: data.url
                        }
                    }}
                >
                    <span>
                        <img src={data.image} alt="" className="img-fluid" />
                        <div className="hovereffect">
                            <span />
                        </div>
                    </span>
                </Link>
            </div>
            <div className={className}>

                <Link
                    href={{
                        pathname: `${data.type.toLowerCase()}/[blog]`,
                        query: {
                            blog: data.url
                        }
                    }}
                >
                    <div>
                        <div className='meta'><div className='auth'>{data.author}</div> - <div className='date'>{data.date}</div> </div>
                        <h4 className='title'>{data.title}</h4>
                    </div>
                </Link>
                {desc && <p className='desc'>{data.desc}</p>}
                {showName && <small><a href={data.url} >{data.type}</a></small>}
            </div>
        </div>
            :
            <div />
    )
}
