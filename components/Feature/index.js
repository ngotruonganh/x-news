import React from 'react'
import { BlogBox } from '../SectionBox'
export default function Feature({ dataFeature, desc = false }) {

    function renderFeature() {
        let result = []
        const nstep = 3
        for (let step = 0; step < nstep; step++) {
            result.push(
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 " key={step}>
                    <div className="row">
                        <BlogBox className="blog-meta big" data={dataFeature[step]} desc={desc} />
                    </div>
                </div>
            )
        }
        return result
    }

    return (
        <div className="cate-feature">
            <div className="row">
                {renderFeature()}
            </div>
        </div>
    )
}
