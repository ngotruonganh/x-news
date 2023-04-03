import React from 'react'
import MasonryBox from '../SectionBox/masonry_box'
import ListNews from '../ListNews'
export default function SectionThird({ data }) {

    return (
        <div className='mt-3'>
            <div className='row'>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="d-flex justify-content-between">
                        <div >Categoty</div>
                        <div>
                            <button className='btn btn-primary m-1'>
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                            <button className='btn m-1'>
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                    <hr className='throw-line' />
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="masonry-blog row">
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
