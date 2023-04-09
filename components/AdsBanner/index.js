import React from 'react'

export default function AdsBanner() {
    return (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ads-wrapper-full" style={{ backgroundImage: `url(/mocks/images/ads2.svg)` }}>
            <div className='title'>
                <div>NFTBOOKS</div>
                <div> Best Platform for NFT Book</div>
                <div className='hight-light'>Experience the change!</div>
            </div>
            <div>
                <button>
                    READ MORE
                </button>
            </div>
        </div>
    )
}
