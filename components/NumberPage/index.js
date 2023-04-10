import classNames from 'classnames';
import { useRouter } from 'next/router'
import React from 'react'

export default function NumberPage({ toIndex = false }) {
    const router = useRouter()
    const { query } = router
    const data = [1, 2, 3, 4, 5, 6, 7];
    function handleChangePage(page) {
        router.push({ pathname: router.pathname, query: { ...query, page: page } }, undefined,
            { scroll: false })
        if (toIndex) {
            const scrollIndex = document.getElementById("scroll-index");
            scrollIndex.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className='number-page-wrapper'>
            <div className='number action'>
                <img src="/assets/icons/icon-left.svg" alt='' />
            </div>
            {data.map((item, idx) => {
                return <div key={idx}
                    className={classNames('number', { 'active': query.page == item })}
                    onClick={() => handleChangePage(item)}
                >
                    {item}
                </div>
            })}
            <div className='number action'>
                <img src="/assets/icons/icon-right.svg" alt='' />
            </div>
        </div>
    )
}
