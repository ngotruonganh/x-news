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
                    >
                        <a href="#">
                            <img src={data.image} alt="" className="img-fluid" />
                            <div className="hovereffect" />
                        </a>
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
                    }}
                >
                    <a href="#">
                        <h4>{data.title}</h4>
                    </a>
                </Link>
                {desc && <p>{data.desc}</p>}
                <small><a href="blog-category-01.html" >{data.type}</a></small>
                <small><span>{data.date}</span></small>
                <small><a href="blog-author.html" >{data.author}</a></small>
            </div>
        </div>

    )
}
