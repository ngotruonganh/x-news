import React from 'react'
import Layout from 'layout'
import { HeadSection, BreadCrumb } from 'components'
import dataSection1 from 'mocks/resData/dataSection1.json'
export default function AboutUS() {
    return (
        <Layout>
            <div className='layout-wrapper'>
                <div className='head-section-wrapper'>
                    <HeadSection data={dataSection1.data} />
                </div>
                <div className='about-wrapper'>
                    <div className='header-about'>
                        <BreadCrumb subTitle="About us" />
                        <div className="name">About us</div>
                        <div className="desc">This is the place of all the archives news, get it and make sure you always follow us to be up to dated all the time.</div>
                    </div>
                    <div className='banner'>
                        <img src='/mocks/images/about-banner.svg' alt='' />
                    </div>
                    <div className='slogan'>
                        “I will tell you how to become rich. Close the doors.
                        Be fearful when others are greedy. Be greedy
                        when others are fearful.”
                    </div>
                    <div className='founder'>
                        <div>
                            <span>Chau Nguyen, Co-Founder</span>
                            <hr className='throw-line' />
                        </div>
                    </div>
                    <div className='phrases'>
                        <div className='item'>
                            <div className='title'>
                                Who We Are
                                <hr className='throw-line' />
                            </div>
                            <div className='para'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras purus, felis, sed viverra morbi. Et mattis vestibulum, amet praesent sed. Dictum scelerisque eu enim augue dolor maecenas sit. Sed viverra ut gravida sit nunc hendrerit massa suspendisse. Erat feugiat nisi, dignissim duis urna, elit odio. Ullamcorper ipsum tincidunt sit ut sed at pharetra.
                            </div>
                            <div className='para'>
                                Varius viverra proin pulvinar ultricies ipsum, ornare faucibus. Vehicula tincidunt dictumst neque nullam vestibulum, eget dolor. Aliquet congue in tincidunt fringilla egestas donec varius feugiat integer. Accumsan neque sed dictum purus maecenas diam. Morbi iaculis eget at eu, eget diam in diam consectetur. Ultrices consectetur nibh sit sagittis in at
                            </div>
                            <div className='para'>
                                vestibulum natoque eleifend. Ornare laoreet fermentum a pha
                            </div>
                        </div>
                        <div className='item'>
                            <div className='title'>
                                who we are
                                <hr className='throw-line' />
                            </div>
                            <div className='para'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras purus, felis, sed viverra morbi. Et mattis vestibulum, amet praesent sed. Dictum scelerisque eu enim augue dolor maecenas sit. Sed viverra ut gravida sit nunc hendrerit massa suspendisse. Erat feugiat nisi, dignissim duis urna, elit odio. Ullamcorper ipsum tincidunt sit ut sed at pharetra.
                            </div>
                            <div className='para'>
                                Varius viverra proin pulvinar ultricies ipsum, ornare faucibus. Vehicula tincidunt dictumst neque nullam vestibulum, eget dolor. Aliquet congue in tincidunt fringilla egestas donec varius feugiat integer. Accumsan neque sed dictum purus maecenas diam. Morbi iaculis eget at eu, eget diam in diam consectetur. Ultrices consectetur nibh sit sagittis in at
                            </div>
                            <div className='para'>
                                vestibulum natoque eleifend. Ornare laoreet fermentum a pha
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3 ads-wrapper-full" style={{ backgroundImage: `url(/mocks/images/ads2.svg)` }}>
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
            </div>
        </Layout>
    )
}
