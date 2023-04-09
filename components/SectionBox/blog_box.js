import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link';
export default function BlogBox({ className, data, desc = false, showName = false, isVideo = false, meta = true }) {
    const router = useRouter()

    function onClickPosts() {
        const typePost = isVideo ? 'videos' : 'posts'
        router.push({
            pathname: `/${typePost}/[chapt]`,
            query: { chapt: "dummy" }

        })
    }

    return (
        data ? <div className="blog-box">
            <div className="post-media">
                <div
                    onClick={onClickPosts}
                >
                    <div>
                        {isVideo === true ?
                            <iframe src={data.url && data.url.replace('watch?v=', 'embed/')}></iframe>
                            :
                            data.image && <img src={data.image} alt="" className="img-fluid" />}
                        <div className="hovereffect">
                        </div>
                    </div>
                </div>
            </div>
            <div className={className}>

                <div
                    onClick={onClickPosts}
                >
                    <div>
                        {meta &&
                            <div className='meta'><div className='auth'>{data.author}</div> - <div className='date'>{data.date}</div> </div>
                        }
                        <h4 className='title'>{data.title}</h4>
                    </div>
                </div>
                {desc && <p className='desc text-wrap'>{data.desc}</p>}
                {showName && <small><Link href={data.url} >{data.type}</Link></small>}
            </div>
        </div>
            :
            <div />
    )
}
