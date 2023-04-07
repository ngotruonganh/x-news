import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { menuCoin } from '../data/dataMenu'
export default function Slidebar() {
    const [onPlay, setOnPlay] = useState(false)
    const [onPlayHover, setOnPlayHover] = useState(false)
    const [numView, setNumView] = useState(0)
    let eventSlideView = useRef(null)

    const coutView = useRef(5)

    function setCurrency(coin) {
        const diff = coin.newPrice - coin.oldPrice
        const rate = coin.newPrice / coin.oldPrice * 100
        return <span className={classNames(diff > 0 ? 'coin-price-up' : 'coin-price-down')}>
            {coin.newPrice.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            })}
            {diff > 0 ? ' +' : ' -'}{rate.toFixed(2)}%
        </span>
    }

    useEffect(() => {
        if (onPlay && onPlayHover == false) {
            eventSlideView.current = setInterval(() => {
                setNumView(numView - 1)
                coutView.current= Math.ceil(Math.abs(numView) / 100)
            }, 30)
        }

        return () => {
            clearInterval(eventSlideView)
        }
    }, [numView, onPlay, onPlayHover])

    function renderSlider() {
        return menuCoin.slice(0,coutView.current+3).map((item, idx) => {
            return <div className="slide-view-item" key={idx} >
                <span className="coin-name">{item.name}</span>: {setCurrency(item)}
            </div>
        })
    }

    return (
        <div className="slide-bar-layout">
            <div className="slide-bar">
                <div className="slide-control ">
                    <button className={classNames("button-control", !onPlay ? "button-play" : 'button-pause')}
                        onClick={() => setOnPlay(!onPlay)}
                    >
                    </button>
                </div>
                <div className="slide-view "
                    onMouseEnter={() => {
                        if (onPlay) {
                            setOnPlayHover(true)
                        }
                    }}
                    onMouseLeave={() => {
                        if (onPlay) {
                            setOnPlayHover(false)
                        }
                    }}
                >
                    <div className="slide-view-bar" style={{ transform: `translateX(${numView}px)` }}>
                        {renderSlider()}
                    </div>
                </div>
            </div>
            <div className="slide-right ">
                <Link
                    href={{
                        pathname: '/prices'
                    }}
                    passHref
                >
                    <div className="slide-right-item crypto-price">Crypto Prices &#8594;</div>
                </Link>
                <div className="slide-right-item top-assets">Top Assets &#8594;</div>
            </div>
        </div>
    )
}
