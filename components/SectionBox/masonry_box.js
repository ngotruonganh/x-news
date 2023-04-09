import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { getTagColor } from '../../utils/func'
import classNames from 'classnames'

export default function MasonryBox({ className, data, desc = false, meta = false, isVideo = "false" }) {
    const router = useRouter()

    return (
        <div className={className}>
            <span className={classNames("tag", getTagColor(data.type))} >{data.type}</span>
            {data.image && <img src={data.image} alt="" className="img-fluid" />}
            <div className="shadoweffect"
                onClick={() => {
                    router.push({
                        pathname: `posts/[chapt]`,
                        query: { chapt: data.url }

                    })
                }}
            >
                <div className="shadow-desc" >
                    <div className="blog-meta">
                        <Link
                            href={{
                                pathname: `/posts/[chapt]`,
                                query: {
                                    chapt: data.url
                                }
                            }}
                            passHref
                        >
                            <div className="title">
                                {meta &&
                                    <div className='meta'><div className='auth'>{data.author}</div>&nbsp;-&nbsp;<div className=''>{data.date}</div> </div>
                                }
                                {data.title}
                            </div>
                        </Link>
                        {desc &&
                            <div className='desc'>
                                 <hr className='throw-line' />
                                {data.desc}
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div>

    )
}
