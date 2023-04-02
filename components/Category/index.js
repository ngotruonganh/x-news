import React from 'react'
import classNames from 'classnames'
import { BlogBox, BlogBoxSquare } from '../SectionBox'
export default function Category({ dataCate }) {

    function renderCate() {
        let result = []
        const nstep = 3
        for (let step = 0; step < nstep; step++) {
            result.push(
                <div className={classNames(step<nstep-1 && "bottom-line")} key={step}>
                    <BlogBoxSquare data={dataCate[step]}  />
                </div>
            )
        }
        return result
    }

    return (
        <div className="cate-main row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 cate-left">
                <BlogBox className="blog-meta big-meta " data={dataCate[0]} desc={true} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 cate-right container">
                <div className="row">
                    {renderCate()}
                </div>
            </div>
        </div>
    )
}
