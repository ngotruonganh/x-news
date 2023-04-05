import React from 'react'
import BlogBox from '../SectionBox/blog_box'
import { getTagColor } from '../../utils/func'
import classNames from 'classnames'
import dataTag from '../../mocks/resData/dataTag.json'
import MasonryBox from '../SectionBox/masonry_box'
import SideTag from '../SideTag'
export default function SectionFive({ data }) {

    return (
        <div className='mt-3'>
            <div className='row'>
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <SideTag title="Category"/>
                    <hr className='throw-line' />
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <div className="container-fluid">
                        <div className="masonry-blog row">
                            <div className="masonry-full">
                                <MasonryBox
                                    className="masonry-box post-media main"
                                    data={data[0]}
                                    meta={true}
                                    isVideo={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 d-flex justify-content-betwee m-0 p-0">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className='masonry-box'>
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
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className='masonry-box '>
                            <div className="section-title">
                                <span className={classNames("tag", getTagColor(data[0].type))}>{data[0].type}</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <BlogBox className="blog-meta big-meta" data={data[2]} desc={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
