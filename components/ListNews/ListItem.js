import React from 'react'
import classNames from 'classnames'
import Link from 'next/link';
export default function ListItem({ className, data, desc = true }) {
    return (
        <div className="list-item-wrapper">
            <div className="post-media">
                <Link
                    href={{
                        pathname: `/posts/[chapt]`,
                        query: {
                            chapt: data.url
                        }
                    }}
                    passHref
                >
                    <div>
                        <img src={data.image} alt="" className="img-fluid" />
                        <div className="hovereffect" />
                    </div>
                </Link>

            </div>
            <div className={classNames("blog-meta big-meta", className)}>
                <div className='meta'><span className='auth'>{data.author}</span> - <span className='date'> {data.date}</span></div>
                <Link
                    href={{
                        pathname: `/posts/[chapt]`,
                        query: {
                            chapt: data.url
                        }
                    }}
                    passHref
                >
                    <div className='title text-wrap'>{data.title}</div>
                </Link>

                {desc && <p className='text-wrap'>{data.desc}</p>}

            </div>
        </div>

    )
}
