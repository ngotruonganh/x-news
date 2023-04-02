import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
export default function MasonryBox({ className, data, desc = false }) {
    const router = useRouter()
    return (
        <div className={className}>
            <img src={data.image} alt="" className="img-fluid" />
            <div className="shadoweffect" 
                onClick={()=>{
                    router.push({
                        pathname:`${data.type.toLowerCase()}/[blog]`,
                        query:{blog:data.url}
                        
                    })
                }}
            >
                <div className="shadow-desc" >
                    <div className="blog-meta">
                        <Link
                            href={{
                                pathname: `${data.type.toLowerCase()}/[blog]`,
                                query: {
                                    blog: data.url
                                }
                            }}
                        >
                            <div>
                                <span className="bg-aqua" ><a href="#" >{data.type}</a></span>
                                <h4><a href="#">{data.title}</a></h4>
                            </div>
                        </Link>
                        {desc &&
                            <div>
                                <small><a href="#" >{data.date}</a></small>
                                <small><a href="blog-author.html" >{data.author}</a></small>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div>

    )
}
