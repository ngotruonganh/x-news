import React from 'react'
import Layout from 'layout'
import { BreadCrumb, PostAuthor } from 'components'
import { BlogBox } from 'components/SectionBox'
import dataSection6 from 'mocks/resData/dataSection6.json'
import AdsBanner from 'components/AdsBanner'

export default function VideosDetail() {
    const data = dataSection6.data
    return (
        <Layout>
            <div className="layout-wrapper videos-wrapper">
                <div className='title-wrapper'>
                    <BreadCrumb subTitle="Video" />
                    <div className="name">Video</div>
                    <div className="desc">This is the place of all the video, get it and make sure you always follow us to be up to dated all the time.</div>
                </div>
                <BlogBox className="blog-meta big-meta" data={data[0]} desc={false} isVideo={true} meta={false} />
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
                            <BlogBox className="blog-meta big-meta" data={data[1]} desc={false} isVideo={true} meta={false} />
                        </div>
                        <div className='item'>
                            <BlogBox className="blog-meta big-meta" data={data[2]} desc={false} isVideo={true} meta={false} />
                        </div>
                        <div className='item'>
                            <BlogBox className="blog-meta big-meta" data={data[3]} desc={false} isVideo={true} meta={false} />
                        </div>
                    </div>
                </div>
                <AdsBanner />
            </div>
        </Layout >
    )
}
