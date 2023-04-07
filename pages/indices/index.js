import React from 'react'
import Layout from '../../layout'
import { dataSingle } from '../../components/data/dataIndices'
import { FormContact } from '../../components/SectionBox'
import Link from 'next/link'
import { getHome } from "../api/home";

export async function getInitialProps(context) {
  // Fetch data from external API
  let menuCate = await getHome()

  // Pass data to the page via props
  return { props: { menuCate: menuCate } }
}
export default function Indices() {
    function renderSingle() {
        let result = []
        if (dataSingle.length > 0)
            dataSingle.map((item, idx) => {
                result.push(<tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.assets}</td>
                    <td>{item.ticker}</td>
                </tr>)
            })
        else return null
        return result
    }

    function renderMulti() {
        let result = []
        if (dataSingle.length > 0)
            dataSingle.map((item, idx) => {
                result.push(<tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.ticker}</td>
                </tr>)
            })
        else return null
        return result
    }
    return (
        <Layout>
            <div className="category-layout wrap-indices">
                <div className="wrap-indices-banner">
                    <div className="wrap-indices-banner-logo">
                        <Link  href="/" passHref><img src="/assets/images/coin-desk-indices.png" alt="main logo" /></Link>
                    </div>
                    <div className="wrap-indices-banner-content">
                        <p>CoinDesk Indices are the industry standard for institutional
                            single- and multi-asset benchmarks for crypto assets. The flagship
                            CoinDesk Bitcoin Price Index (XBX) has been in operation continuously since 2014.
                            Financial institutions rely on the XBX and other CoinDesk Indices products to benchmark
                            billions of dollars in assets under management and to price hundreds of millions
                            in over-the-counter transactions, daily. We are adding to the list below,
                            developing new indices for some of the largest institutions active in the crypto market.
                            To find out more, get in touch with our sales team.
                        </p>
                    </div>
                </div>
                <hr className="break-line" />
                <div className="wrap-indices-table">
                    <div className="title">
                        <h2>Single-asset price indices</h2>
                    </div>
                    <table className="table">
                        <thead className="thead">
                            <tr>
                                <th className="index-name">Index name</th>
                                <th>Asset Ticker</th>
                                <th>Ticker</th>
                            </tr>
                        </thead>
                        <tbody className="tbody">
                            {renderSingle()}
                        </tbody>
                    </table>
                    <div className="title">
                        <h2>Multi-asset indices</h2>
                    </div>
                    <table className="table">
                        <thead className="thead">
                            <tr>
                                <th className="index-name">Index name</th>
                                <th>Ticker</th>
                            </tr>
                        </thead>
                        <tbody className="tbody">
                            {renderMulti()}
                        </tbody>
                    </table>
                </div>
                <div className="wrap-indices-contact">
                    <div className="form-box">
                        <FormContact />
                    </div>
                </div>

            </div>
        </Layout>
    )
}
