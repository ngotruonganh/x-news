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
                    <a href="#">
                        <img src={data.image} alt="" className="img-fluid" />
                        <div className="hovereffect">
                            <span />
                        </div>
                    </a>
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
                   <a href="#"> <h4>{data.title}</h4></a>
                </Link>
                {desc && <p>{data.desc}</p>}
                {showName && <small><a href={data.url} >{data.type}</a></small>}
                <small><span>{data.date}</span></small>
                <small><a  href="blog-author.html">{data.author}</a></small>
            </div>
        </div>
            :
            <div />
    )
}
