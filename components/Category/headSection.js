import React from 'react'
import Slider from 'react-slick';
import MasonryBox from '../SectionBox/masonry_box';
import classNames from 'classnames';

export default function HeadSection({ data }) {

	const settings = {
		dots: false,
		infinite: true,
		lazyLoad: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	function renderBlockFour() {
		let result = []
		let nstep = 4
		for (let step = 0; step < nstep; step++) {
			result.push(
				<MasonryBox
					className={classNames("masonry-box post-media main")}
					key={step}
					data={data[step]}
					meta={true}
					desc={false}
				/>
			)
		}
		return result
	}

	return (
		<div>
			<div className='row'>
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<Slider {...settings} >
						{data.map((item, idx) => {
							return <div className="masonry-blog" key={idx}>
								<div className="masonry-full">
									<MasonryBox
										className={classNames("masonry-box post-media main slice-view")}
										data={item}
										meta={true}
										desc={false}
									/>
								</div>
							</div>
						})}
					</Slider>
				</div>
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 section-group">
					<div className="section-left">
						<MasonryBox
							className={classNames("masonry-box post-media main")}
							data={data[1]}
							meta={true}
							desc={false}
						/>
					</div>
					<div className="section-right">
						{renderBlockFour()}
					</div>
				</div>
			</div>
		</div>
	)
}
