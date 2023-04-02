import React from 'react'
import BlogBoxSquare from '../SectionBox/blog_box_square'
export default function Trending({ dataTrending }) {

    function renderTrending() {
        let result = []
        for (let step = 0; step < 4; step++) {
            result.push(
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" key={step}>
                    <div className="row">
                        <BlogBoxSquare data={dataTrending[step]} desc={false} />
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
        </div>
    )
}
