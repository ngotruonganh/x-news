import React from 'react'
import SectionBanner from './section_banner'
import { dataLifeStyle, dataFastion } from '../data/dataHome'
import BlogBoxSquare from './blog_box_square'
import BlogBox from './blog_box'
export default function SectionThird() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <div className="blog-list clearfix">
                        <div className="section-title">
                            <h3 className="color-green"><a href="blog-category-01.html" >Travel</a></h3>
                        </div>
                        <BlogBoxSquare data={dataLifeStyle[1]} />
                        <hr className="invis" />
                        <BlogBoxSquare data={dataFastion[2]} />
                        <hr className="invis" />
                        <BlogBoxSquare data={dataFastion[1]} />
                        <hr className="invis" />
                        <BlogBoxSquare data={dataFastion[1]} />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="section-title">
                        <h3 className="color-yellow"><a href="blog-category-01.html" >Vlogs</a></h3>
                    </div>
                    <BlogBox data={dataFastion[1]} />
                    <hr className="invis" />
                    <BlogBox data={dataFastion[1]} />
                    <hr className="invis" />
                    <BlogBox data={dataFastion[1]} />
                </div>
            </div>
        </div>
    )
}
