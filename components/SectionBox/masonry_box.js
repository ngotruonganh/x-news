import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { getTagColor } from '../../utils/func'
import classNames from 'classnames'

export default function MasonryBox({ className, data, desc = false,meta=false }) {
    const router = useRouter()
    return (
        <div className={className}>
            <span className={classNames("tag",getTagColor(data.type))} >{data.type}</span>
            <img src={data.image} alt="" className="img-fluid" />
            <div className="shadoweffect"
                onClick={() => {
                    router.push({
                        pathname: `${data.type.toLowerCase()}/[blog]`,
                        query: { blog: data.url }

                    })
                }}
            >
                <div className="shadow-desc" >
                    <div className="blog-meta">
                        {meta &&
                            <div>{data.date} - {data.author}</div>
                        }
                        <Link
                            href={{
                                pathname: `${data.type.toLowerCase()}/[blog]`,
                                query: {
                                    blog: data.url
                                }
                            }}
                        >
                            <div className="title">
                                {data.title}
                            </div>
                        </Link>
                        {desc &&
                            <div>{data.desc}</div>
                        }
                    </div>
                </div>
            </div>

        </div>

    )
}
