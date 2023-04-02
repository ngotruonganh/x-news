import React from 'react'
import Layout from '../../layout'
import Trending from '../../components/Trending'
import Category from '../../components/Category'
import Feature from '../../components/Feature'
import CategoryDetail from '../../components/Category/cate_detail'
import { dataBusiness } from '../../components/data/dataHome'

export default function Business() {
    return (
        <Layout>
            <div className="category-layout">
                <div className="title">
                    <h2>Business</h2>
                </div>
                {/* main of cate */}
                <Category dataCate={dataBusiness} />
                <hr className="break-line" />
                <div className="title">
                    <h3>Trending in Business</h3>
                </div>
                {/* trending */}
                <Trending dataTrending={dataBusiness} />
                <hr className="break-line" />
                <div className="title">
                    <h3>Features of Business</h3>
                </div>
                {/* feature */}
                <Feature dataFeature={dataBusiness} />
                <hr className="invis" />
                <hr className="break-line" />
                <div className="title">
                    <h3>More from Business</h3>
                </div>
                {/* more cate */}
                <CategoryDetail data={dataBusiness} />
                <hr className="invis" />
            </div>
        </Layout>
    )
}
