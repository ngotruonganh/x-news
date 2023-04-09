import React from 'react'
import BlogBox from '../SectionBox/blog_box'
import { getTagColor } from '../../utils/func'
import classNames from 'classnames'
import dataCategory from '../../mocks/resData/dataCategory.json'
import ListNews from '../ListNews'
import SideTag from '../SideTag'
import AdsBanner from '../AdsBanner'
export default function SectionFive({ data }) {

    return (
        <div className='mt-3'>
            <div className='row'>
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <SideTag title="Category" />
                    <hr className='throw-line' />
                </div>
            </div>
            <div className='row'>
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <div className='d-flex'>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <ListNews className="flex-row" data={data} size={4} />
                    </div>
                    <AdsBanner />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                    <div className='subscribe-wrapper'>
                        <div>
                            <div className='title'>Get Latest Updates</div>
                            <input placeholder='Your email address' />
                            <div>
                                <button>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rank-wrapper">
                        Category
                        <hr className='throw-line' />
                        {dataCategory.data.map((item, idx) => {
                            return <div className="rank-item" key={idx}>
                                <span className='title'>
                                    <img src="/assets/icons/icon-right.svg" alt='' />
                                    {item.name}
                                </span>
                                <span className={classNames("total", getTagColor(item.tagSeo))} >{item.total}</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
