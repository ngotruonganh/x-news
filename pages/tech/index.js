import React from 'react'
import Layout from '../../layout'
import Trending from '../../components/Trending'
import Category from '../../components/Category'
import Feature from '../../components/Feature'
import CategoryDetail from '../../components/Category/cate_detail'
import { dataMarkets } from '../../components/data/dataHome'

export default function Tech() {
    return (
        <Layout>
            <div className="category-layout">
                <div className="title">
                    <h2>Tech</h2>
                </div>
                {/* main of cate */}
                <Category dataCate={dataMarkets} />
                <hr className="break-line" />
                <div className="title">
                    <h3>Trending in Tech</h3>
                </div>
                {/* trending */}
                <Trending dataTrending={dataMarkets} />
                <hr className="break-line" />
                <div className="title">
                    <h3>Features of Tech</h3>
                </div>
                {/* feature */}
                <Feature dataFeature={dataMarkets} />
                <hr className="invis" />
                <hr className="break-line" />
                <div className="title">
                    <h3>More from Tech</h3>
                </div>
                {/* more cate */}
                <CategoryDetail data={dataMarkets} />
                <hr className="invis" />
            </div>
        </Layout>
    )
}