import React, { useRef, useState } from 'react'
import MasonryBox from '../SectionBox/masonry_box'
import ListNews from '../ListNews'
import classNames from 'classnames'
import Slider from 'react-slick'
export default function SectionThird({ data }) {
    const [currentSide,setCurrentSide] = useState(0)
    const slider = useRef(null)
    const settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };

    function changeSide(type){
        if(type){
            slider.current.slickNext();
        }else{
            slider.current.slickPrev();
        }
    }

    return (
        <div className='mt-3'>
            <div className='row'>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="d-flex justify-content-between side-tag-wrapper">
                        <div className="title">Categoty</div>
                        <div>
                            <button className='btn m-1 btn-left' onClick={()=>changeSide(-1)}>
                                <img src="/assets/icons/icon-left.svg"/>
                            </button>
                            <button className='btn m-1 btn-right' onClick={()=>changeSide(1)}>
                                <img src="/assets/icons/icon-right.svg"/>
                            </button>
                        </div>
                    </div>
                    <hr className='throw-line' />
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Slider {...settings} ref={slider}>
                        {data.map((item, idx) => {
                            return <div className="masonry-blog" key={idx}>
                                <div className="masonry-full">
                                    <MasonryBox
                                        className={classNames("masonry-box post-media main slice-view")}
                                        data={item}
                                        meta={false}
                                        desc={true}
                                    />
                                </div>
                            </div>
                        })}
                    </Slider>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <ListNews className="flex-row" data={data} size={3}/>
                </div>
            </div>
        </div>
    )
}
