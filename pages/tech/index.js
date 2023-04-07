import React from 'react'
import Layout from '../../layout'
import Trending from '../../components/Trending'
import Category from '../../components/Category'
import Feature from '../../components/Feature'
import CategoryDetail from '../../components/Category/cate_detail'
import { dataMarkets } from '../../components/data/dataHome'
import { getHome } from '../api/home'

export async function getInitialProps(context) {
    // Fetch data from external API
    let menuCate = await getHome()
  
    // Pass data to the page via props
    return { props: { menuCate: menuCate } }
}

export default function Tech() {
    return (
        <Layout>
            hello
        </Layout>
    )
}
