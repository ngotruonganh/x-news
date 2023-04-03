import React from 'react'
import BlogBox from '../SectionBox/blog_box'
import { getTagColor } from '../../utils/func'
import classNames from 'classnames'
import ListNews from '../ListNews'
import dataTag from '../../mocks/resData/dataTag.json'
export default function SectionSecond({ data }) {

    return (
        <div className='mt-3'>
            <div className='row'>
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <div className="d-flex justify-content-between">
                        <div >Don't Miss</div>
                        <div>
                            {dataTag.data.map((item, idx) => {
                                return <span key={idx} className={classNames("tag m-1", getTagColor(item.tagSeo))} >{item.name}</span>
                            })}
                        </div>
                    </div>
                    <hr className='throw-line' />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div>
                        <div className="d-flex justify-content-between">
                            <div className="align-self-start font-weight-bold">
                                Recent
                            </div>
                            <div className="">
                                Trending
                            </div>
                            <div className="">
                                Most Views
                            </div>
                        </div>
                    </div>
                    <hr className='throw-line' />
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className='masonry-box '>
                        <div className="section-title">
                            <span className={classNames("tag", getTagColor(data[0].type))}>{data[0].type}</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <BlogBox className="blog-meta big-meta" data={data[1]} desc={true} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <ListNews data={data} />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <ListNews data={data} />
                </div>
            </div>
        </div>
    )
}
