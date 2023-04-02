import React from 'react'
import TopSocial from '../Header/top_social'
import BlogListWidget from './blog_list_widget'
import { dataPopular, dataPopularCate, dataRecent } from '../data/dataFooter'
export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Recent Posts</h2>
                            <BlogListWidget data={dataRecent} type="date"/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Popular Posts</h2>
                            <BlogListWidget data={dataPopular} type="star"/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Popular Categories</h2>
                            <div className="link-widget">
                                <ul>
                                    {dataPopularCate.length > 0 &&
                                        dataPopularCate.map((item,idx)=>{
                                            return <li key={idx}><a href={item.url}>{item.type}<span>({item.total})</span></a></li>
                                        })
                                    }
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="invis1" />
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="widget">
                            <div className="footer-text text-center">
                                <a href="index.html"><img src="/assets/images/logo-coin-desk.png" alt="" className="img-fluid" /></a>
                                <p>Cloapedia is a personal blog for handcrafted, cameramade photography content, fashion styles from independent creatives around the world.</p>
                                <TopSocial className="social"/>
                                <hr className="invis" />
                                <div className="newsletter-widget text-center">
                                    <form className="form-inline">
                                        <input type="text" className="form-control" placeholder="Enter your email address" />
                                        <button type="submit" className="btn btn-primary">Subscribe <i className="fa fa-envelope-open-o" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <br />
                        <div className="copyright">© Cloapedia. Design: <a href="http://html.design">HTML Design</a>.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
