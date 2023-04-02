import React, { useState } from 'react'
import { menuCoin, menuSort } from '../../components/data/dataMenu'
import CoinBox from '../../components/SectionBox/coin_box'
import Layout from '../../layout'
import classNames from 'classnames'
import NumPage from '../../components/SectionBox/num_page'
import { useRouter } from 'next/router';


export async function getServerSideProps(context) {
    try {
        let page = parseInt(context.query.page) || 1

        if(menuCoin.lengh<0){
            context.res.statusCode = 404;
            return {
                notFound: true,
            }
        }

        return { props: { total: menuCoin.length,currentPage:page,dataCoin:menuCoin.slice(page-1,page+23) } }
    } catch (error) {
        context.res.statusCode = 404;
        return {
            notFound: true,
        }
    }
}


export default function index({ total,currentPage, dataCoin }) {
    const [selectSort, setSelectSort] = useState('' || menuSort[0].type)

    const router = useRouter()
    const { pathname,query } = router

    function renderCoinTags() {
        return dataCoin.map((coin, idx) => {
            return <CoinBox coin={coin} key={idx} />
        })
    }

    function renderSelectSort() {
        return menuSort.map((item, idx) => {
            return <div onClick={() => setSelectSort(item.type)}
                key={idx}
                className={classNames("search-tags-item",
                    item.type === selectSort && "search-tags-item-active")}
            >{item.name}
            </div>
        })
    }

    function onChangePage(page){
        return router.push({
            pathname:pathname,
            query:{...query,page:page}
        })
    }

    return (
        <Layout>
            <div className="layout-prices container-fluid">
                <div className="search-bar">
                    <div className="search-crypto">
                        <button ><i className="fa fa-search"></i></button>
                        <input placeholder="Search Cryptocurrency" />
                    </div>
                    <div className="search-tags">
                        {renderSelectSort()}
                    </div>
                    <div className="search-currency">
                        <select className="form-control">
                            <option>USD</option>
                            <option>GBP</option>
                            <option>EUR</option>
                            <option>CNY</option>
                            <option>AED</option>
                            <option>AFN</option>
                            <option>ALL</option>
                            <option>AMD</option>
                            <option>ANG</option>
                            <option>AOA</option>
                        </select>
                    </div>
                </div>
                <div className="crypto">
                    {renderCoinTags()}
                </div>
                <div className="pagination-bar" >
                    <NumPage num={24} total={total} current={currentPage} onChangePage={onChangePage}/>
                </div>
            </div>
        </Layout>
    )
}
