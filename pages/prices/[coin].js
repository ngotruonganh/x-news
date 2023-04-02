import React from 'react'
import { menuCoin } from '../../components/data/dataMenu';
import Layout from '../../layout'
import { compareString } from '../../utils/string';

export async function getServerSideProps(context) {
    try {

        const coinInfor = menuCoin.find((item) => compareString(item.name, context.params.coin))

        return { props: { data: coinInfor } }
    } catch (error) {
        context.res.statusCode = 404;
        return {
            notFound: true,
        }
    }
}

export default function Coin({ data }) {
    return (
        <Layout>
            <div className="category-layout">
                <div className="title">
                    <h2>
                        <img className="logo" width="50px" height="50px" alt={`logo-${data.name}`} src={data.logo} />
                        {data.name}
                    </h2>
                </div>
            </div>
        </Layout>
    )
}
