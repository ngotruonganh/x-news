import { useRouter } from 'next/router'
import React from 'react'
import { getTagColor } from 'utils/func'
import classNames from 'classnames'

export default function MasonryBox({ className, data, desc = false, meta = false, isVideo = false }) {
    const router = useRouter()

    function onClickPosts() {
        const typePost = isVideo ? 'videos' : 'posts'
        router.push({
            pathname: `/${typePost}/[chapt]`,
            query: { chapt: 'dummy' }

        })
    }

    return (
        <div className={className}>
            <span className={classNames("tag", getTagColor(data.type))} >{data.type}</span>
            {isVideo === true ?
                <iframe src={data.url.replace('watch?v=', 'embed/')}></iframe>
                :
                data.image && <img src={data.image} alt="" className="img-fluid" />}
            <div className="shadoweffect"
                onClick={onClickPosts}
            >
                <div className="shadow-desc" >
                    <div className="blog-meta">
                        <div
                            onClick={onClickPosts}
                        >
                            <div className="title text-wrap">
                                {meta &&
                                    <div className='meta'><div className='auth'>{data.author}</div>&nbsp;-&nbsp;<div className=''>{data.date}</div> </div>
                                }
                                {data.title}
                            </div>
                        </div>
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
