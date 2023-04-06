import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
export default function NumPage({ total, current, num, onChangePage }) {

    function renderNumPage() {
        const page = Math.ceil(total / num)

        let result = []

        for (let i = 0; i < page; i++) {
            result.push(<li
                key={i}
                className="page-item"
            >
                <Link className={classNames("page-link", current - 1 == i && "page-link-active")} href="/"
                    onClick={() => onChangePage(i + 1)}
                >{i + 1}</Link>
            </li>)
        }

            
            if (current + 5 > page) {
                result = result.slice(page - 6, page)
            }

            else {
                result = result.slice(current - 1, current + 5)
                result.push(
                    <li key={98} className="page-item">
                        <Link className="page-link" href="/"
                            onClick={() => onChangePage(page)}
                        >..</Link>
                    </li>
                )

                result.push(
                    <li key={99} className="page-item">
                        <Link className="page-link" href="/"
                            onClick={() => onChangePage(current + 1)}
                        >&#62;</Link>
                    </li>
                )

            if (current > 1)
                result.unshift(
                    <li key={-1} className="page-item">
                        <Link className="page-link" href="/"
                            onClick={() => onChangePage(current - 1)}
                        >&#60;</Link>
                    </li>
                )
        }

        result.unshift(
            <li key={101} className="page-item">
                <Link className="page-link" href="/"
                    onClick={() => onChangePage(1)}
                >&#60;&#60;</Link>
            </li>
        )

        result.push(
            <li key={102} className="page-item">
                <Link className="page-link" href="/"
                    onClick={() => onChangePage(page)}
                >&#62;&#62;</Link>
            </li>
        )

        return result
    }


    return (
        <div className="row">
            <div className="col-md-12">
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-start">
                        {renderNumPage()}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
