import React, { useState } from 'react'
import BlogBoxSquare from '../SectionBox/blog_box_square'
import { NumPage, NumPapge } from '../SectionBox'
export default function Trending({ data }) {
    const [onReadMore, setOnReadMore] = useState(false)
    function renderTrending() {
        let result = []
        let nstep = onReadMore ? data.length : 4        
        for (let step = 0; step < nstep; step++) {
            result.push(
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 " key={step}>
                    <div className="row">
                        <BlogBoxSquare data={data[step]} desc={false} />
                    </div>
                </div>
            )
        }
        return result
    }

    return (
        <div className="cate-trending">
            <div className="row">
                {renderTrending()}
            </div>
            <div className="button-more">
                <button
                    onClick={()=>setOnReadMore(!onReadMore)}
                >{onReadMore ? 'Hidden' : 'Show more'}
                </button>
            </div>
        </div>
    )
}
