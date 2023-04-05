import React from 'react'
import MasonryBox from '../SectionBox/masonry_box'
import ListNews from '../ListNews'
export default function SectionThird({ data }) {

    return (
        <div className='mt-3'>
            <div className='row'>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="d-flex justify-content-between side-tag-wrapper">
                        <div className="title">Categoty</div>
                        <div>
                            <button className='btn m-1 btn-left'>
                                <img src="assets/icons/icon-left.svg"/>
                            </button>
                            <button className='btn m-1 btn-right'>
                                <img src="assets/icons/icon-right.svg"/>
                            </button>
                        </div>
                    </div>
                    <hr className='throw-line' />
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="masonry-blog">
                        <div className="masonry-full">
                            <MasonryBox
                                className="masonry-box post-media main"
                                data={data[4]}
                                meta={false}
                                desc={true}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <ListNews className="flex-row" data={data} size={3}/>
                </div>
            </div>
        </div>
    )
}
