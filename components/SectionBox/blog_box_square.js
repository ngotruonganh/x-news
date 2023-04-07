import React from 'react'
import classNames from 'classnames'
import Link from 'next/link';
export default function BlogBoxSquare({ className, data, desc = true }) {
    return (
        <div className="blog-box row">
            <div className="col-md-4 col-sm-4">
                <div className="post-media">
                    <Link
                        href={{
                            pathname: `${data.type.toLowerCase()}/[blog]`,
                            query: {
                                blog: data.url
                            }
                        }}
                        passHref
                    >
                        <Link href="/" passHref>
                            <img src={data.image} alt="" className="img-fluid" />
                            <div className="hovereffect" />
                        </Link>
                    </Link>

                </div>
            </div>
            <div className={classNames("blog-meta big-meta col-md-8 col-sm-6", className)}>
                <Link
                    href={{
                        pathname: `${data.type.toLowerCase()}/[blog]`,
                        query: {
                            blog: data.url
                        }
                    }} passHref
                >
                    <Link href="/" passHref>
                        <h4>{data.title}</h4>
                    </Link>
                </Link>
                {desc && <p>{data.desc}</p>}
                <small><Link href="blog-category-01.html" >{data.type}</Link></small>
                <small><span>{data.date}</span></small>
                <small><Link href="blog-author.html" >{data.author}</Link></small>
            </div>
        </div>

    )
}
