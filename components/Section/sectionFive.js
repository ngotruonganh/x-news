import React from 'react'
import BlogBox from '../SectionBox/blog_box'
import { getTagColor } from '../../utils/func'
import classNames from 'classnames'
import dataTag from '../../mocks/resData/dataTag.json'
import dataCategory from '../../mocks/resData/dataCategory.json'
import ListNews from '../ListNews'
export default function SectionFive({ data }) {

    return (
        <div className='mt-3'>
            <div className='row'>
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <div className="d-flex justify-content-between">
                        <div >Category</div>
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
                            Stay Connected
                        </div>
                    </div>
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
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ads-wrapper " style={{backgroundImage:`url(mocks/images/ads2.svg)`}}>
                        <div className='title'>
                            <div>NFTBOOKS</div>
                            <div> Best Platform for NFT Book</div>
                            <div className='hight-light'>Experience the change!</div>
                        </div>
                        <div>
                            <button>
                                READ MORE
                            </button>
                        </div>
                    </div>

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
                            return <div className="rank-item">
                                <span className='title'>
                                    <img src="assets/icons/icon-right.svg" />
                                    {item.name}
                                </span>
                                <span key={idx} className={classNames("total", getTagColor(item.tagSeo))} >{item.total}</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
