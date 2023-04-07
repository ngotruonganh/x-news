import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
export default function CoinBox({ coin }) {
    const diff = coin.newPrice - coin.oldPrice
    const rate = coin.newPrice / coin.oldPrice * 100
    return (
        <div className="crypto-item">
            <Link
                href={{
                    pathname: `prices/[coin]`,
                    query: { coin: coin.name.toLowerCase() }
                }}
                passHref
            >
                <div className={classNames("crypto-item-tag", diff < 0 && 'crypto-item-tag-down')}>
                    <div className="crypto-item-tag-title">
                        <div className="tag-left">
                            <img className="coin-logo" width="39px" height="39px" alt="" src={coin.logo} />
                            <div>{coin.name}</div>
                        </div>
                        <div className='tag-right'>
                            <span>${coin.newPrice.toFixed(5)}</span>
                            <div>
                                <span className="tag-rate">
                                    {diff > 0 ? ' +' : ' -'}{rate.toFixed(2)}%
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="crypto-item-tag-diagram">
                        <img src="/assets/images/demo-diagram.png" alt=""/>
                    </div>
                </div>

            </Link>
        </div>
    )
}
