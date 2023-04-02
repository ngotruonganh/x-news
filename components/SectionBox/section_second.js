import React from 'react'
import BlogBox from './blog_box'
export default function SectionSecond({data}) {
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="section-title">
                            <h3 className="color-aqua"><a href="blog-category-01.html" >{data[0][0].type}</a></h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <BlogBox className="blog-meta big-meta" data={data[0][0]} desc={true} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="section-title">
                            <h3 className="color-pink"><a href="blog-category-01.html" >{data[1][0].type}</a></h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <BlogBox className="blog-meta big" data={data[1][0]} desc={true} />
                                <hr className="invis" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <BlogBox className="blog-meta big" data={data[1][0]} desc={true} />
                                <hr className="invis" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
