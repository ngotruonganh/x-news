import React from 'react'
import Layout from '../../layout'
import { getHome } from '../api/home'

export async function getServerSideProps(context) {
    // Fetch data from external API
    let menuCate = await getHome()
  
    // Pass data to the page via props
    return { props: { menuCate: menuCate } }
}

export default function index() {
    return (
       <Layout>
           tv and video
       </Layout>
    )
}
