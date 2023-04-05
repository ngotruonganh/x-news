import React, { useState } from 'react'
import Layout from '../../layout'
import {
    dataLifeStyle,
    dataTravel,
    dataFastion,
    dataMarkets,
    dataBusiness
} from '../../components/data/dataHome'

import { handleSearchData } from '../../utils/string'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
    try {
        const s = context.query.s || ''


        let searchData = [
            ...dataLifeStyle.filter((item) => handleSearchData(item.type, s)),
            ...dataTravel.filter((item) => handleSearchData(item.type, s)),
            ...dataFastion.filter((item) => handleSearchData(item.type, s)),
            ...dataMarkets.filter((item) => handleSearchData(item.type, s)),
            ...dataBusiness.filter((item) => handleSearchData(item.type, s))
        ]


        return { props: { data: searchData, query: s } }

    } catch (error) {
        context.res.statusCode = 404;
        return {
            notFound: true,
        }
    }
}


export default function Search({query}) {
    const [searchQuery, setSearchQuery] = useState(query || '')

    const router = useRouter()

    function onChangeSearchQuery(e) {
        setSearchQuery(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.push({
            pathname: 'search',
            query: { s: searchQuery }
        })
    }

    function handleCancel() {
        router.push({
            pathname: '/',
            query: {}
        })
    }

    return (
        <Layout>
            <div className="category-layout wrap-search">
                <div className="title">
                    <h2>Search</h2>
                </div>
                <div className="search-bar">
                    <form onSubmit={handleSubmit}>
                        <button className="fa fa-search button-search"></button>
                        <input
                            className="input-search"
                            type="text"
                            placeholder="Search for"
                            value={searchQuery}
                            onChange={onChangeSearchQuery}
                        />
                        <button className="button-cancel"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>

                    </form>
                </div>

                <hr className="break-line" />

                <div className="search-data">

                </div>
            </div>
        </Layout>
    )
}
