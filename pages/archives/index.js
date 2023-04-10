import React from 'react'
import Layout from '../../layout'
import { BreadCrumb, HeadSection, ListSection, SideTag } from '../../components'
import dataSection1 from '../../mocks/resData/dataSection1.json'
import dataSection6 from '../../mocks/resData/dataSection6.json'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { getTagColor } from '../../utils/func';
import dataCategory from '../../mocks/resData/dataCategory.json'
import dataRecent from '../../mocks/resData/dataRecent.json'
import ListNews from '../../components/ListNews'
import NumberPage from '../../components/NumberPage';

const yearData = ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016']
const monthData = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August", 
    "September",
    "October",
    "Novermber",
    "December"
]

export default function Archives() {
    const router = useRouter()
    const { query } = router
    const data = [...dataSection6.data, ...dataSection6.data]

    function handleClickYear(year) {
        router.push({
            pathname: router.pathname,
            query: { ...query, year: year },
        }, undefined,
            { scroll: false })
    }

    function handleClickMonth(month) {
        router.push({
            pathname: router.pathname,
            query: { ...query, month: month },
        }, undefined,
            { scroll: false })
    }

    return (
        <Layout>
            <div className='archives-wrapper layout-wrapper'>
                <div className='head-section-wrapper'>
                    <HeadSection data={dataSection1.data} />
                </div>
                <div>
                    <div id="scroll-index" className='mt-3'>
                        <BreadCrumb subTitle="Archives" />
                        <SideTag title="Archives" showTag={false} />
                        <p className='mt-3'>
                            This is the place of all the archives news,
                            get it and make sure you always follow us to be up to dated all the time.
                        </p>
                        <div className='nav-year-wrapper'>
                            {yearData.map((item, idx) => {
                                return <div
                                    className={classNames("year-item", { active: query.year === item })}
                                    key={idx}
                                    onClick={() => handleClickYear(item)}
                                >
                                    {item}
                                </div>
                            })}
                        </div>
                        <div className='nav-month-wrapper'>
                            {monthData.map((item, idx) => {
                                return <div
                                    className={classNames("month-item", { active: query.month === item })}
                                    key={idx}
                                    onClick={() => handleClickMonth(item)}
                                >
                                    {item}
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 mt-3 list-archives">
                            {data && <ListNews data={data} size={data.length} desc={true} meta={false} showAds={true}/>}
                            <NumberPage toIndex={true}/>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">

                            <div>
                                <div className="d-flex justify-content-between">
                                    <div className="align-self-start font-weight-bold">
                                        Recent
                                    </div>
                                    <div className="">
                                        Trending
                                    </div>
                                    <div className="">
                                        Most Views
                                    </div>
                                </div>
                            </div>
                            <hr className='throw-line' />
                            <ListNews data={dataRecent.data} />
                            <div className='ads-right-wrapper mt-3'>
                                <img src="/mocks/images/ads.svg" alt='' />
                                <div className='ads-item'>Ad</div>
                            </div>
                            <div className="rank-wrapper">
                                Category
                                <hr className='throw-line' />
                                {dataCategory.data.map((item, idx) => {
                                    return <div className="rank-item" key={idx}>
                                        <span className='title'>
                                            <img src="/assets/icons/icon-right.svg" alt='' />
                                            {item.name}
                                        </span>
                                        <span className={classNames("total", getTagColor(item.tagSeo))} >{item.total}</span>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
