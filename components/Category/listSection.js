import classNames from 'classnames'
import React from 'react'
import { getTagColor } from '../../utils/func'
import AdsBanner from '../AdsBanner'
import BlogBox from '../SectionBox/blog_box'

export default function ListSection({ data, desc, isVideo, meta = true }) {

	function renderBlockFour() {
		let result = []
		let nstep = data.length
		for (let step = 0; step < nstep; step++) {
			if (step > 0 && step % 4 == 0) {
				result.push(
					<AdsBanner />
				)
			}

			result.push(
				<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div className='masonry-box'>
						<div className="section-title">
							<span className={classNames("tag", getTagColor(data[step].type))}>{data[step].type}</span>
						</div>
						<div className="row">
							<div className="">
								<BlogBox className="blog-meta big-meta" data={data[step]} desc={desc} isVideo={isVideo} meta={meta} />
							</div>
						</div>
					</div>
				</div>
			)
		}
		return result
	}

	return (
		<div>
			<div className='list-section'>
				{renderBlockFour()}
			</div>
			<div>
			</div>
		</div>
	)
}
