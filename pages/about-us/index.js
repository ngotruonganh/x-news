import React from 'react'
import Layout from '../../layout'
import { HeadSection } from '../../components'
import dataSection1 from '../../mocks/resData/dataSection1.json'
export default function AboutUS() {
    return (
        <Layout>
            <div className='layout-wrapper'>
                <div className='head-section-wrapper'>
                    <HeadSection data={dataSection1.data} />
                </div>
            </div>
        </Layout>
    )
}
