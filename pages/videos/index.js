import React from 'react'
import Layout from '../../layout'
import { BreadCrumb, PostAuthor } from '../../components'

export default function SingleVideoPost() {
    return (
        <Layout>
            <div className="layout-wrapper single-video-post-wrapper">
                <div className='title-wrapper'>
                    <BreadCrumb subTitle="Video" />
                    <div className="name">Video</div>
                    <div className="desc">This is the place of all the video, get it and make sure you always follow us to be up to dated all the time.</div>
                </div>
                <div className='video-wrapper'>
                    <img src="/mocks/images/bannerSingleVideoPost1.svg" alt="" />
                    <div className='title-img'>
                        Eid has no colour for people trapped in flood
                    </div>
                </div>
                <div className='chapter-wrapper'>
                    <div className='mt-3'>
                        <div className='row'>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 content-wrapper">
                                <PostAuthor />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-video'>
                    <div className='title-footer'>
                        Next Video
                    </div>
                    <hr className="throw-line"></hr>
                    <div className='video-footer'>
                        <div className='item'>
                            <img src="/mocks/images/bannerSingleVideoPost2.svg" alt="" />
                            <div className='title-img'>
                                Liquid waste falls into Buriganga
                            </div>
                        </div>
                        <div className='item'>
                            <img src="/mocks/images/bannerSingleVideoPost3.svg" alt="" />
                            <div className='title-img'>
                                Crisis in Sarika Sabah’s life: Lux-Cafe Live
                            </div>
                        </div>
                        <div className='item'>
                            <img src="/mocks/images/bannerSingleVideoPost4.svg" alt="" />
                            <div className='title-img'>
                                Ex-minister Inu infected with coronavirus
                            </div>
                        </div>
                    </div>
                </div>
                <div className='banner-under'>
                    <img src="/mocks/images/bannerSingleVideoPost5.svg" alt="" />
                    <button>
                        READ MORE
                    </button>
                    <span>
                        <div>
                            NFTBOOKS
                        </div>
                        <div>
                            Best Platform for NFT Book
                        </div>
                        <div>
                            Experience the change!
                        </div>
                    </span>
                </div>
            </div>
        </Layout >
    )
}
