import React from 'react'
import Layout from '../../layout'
import { HeadSection } from '../../components'
import dataSection1 from '../../mocks/resData/dataSection1.json'
export default function Archives() {
    return (
        <Layout>
            <div className='head-section'>
                <HeadSection data={dataSection1.data} />
            </div>
        </Layout>
    )
}
