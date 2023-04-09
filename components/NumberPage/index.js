import React from 'react'

export default function NumberPage() {
    return (
        <div className='number-page-wrapper'>
            <div className='number action'>
                <img src="/assets/icons/icon-left.svg" alt='' />
            </div>
            <div className='number active'>1</div>
            <div className='number'>2</div>
            <div className='number'>3</div>
            <div className='number'>4</div>
            <div className='number'>5</div>
            <div className='number action'>
                <img src="/assets/icons/icon-right.svg" alt='' />
            </div>
        </div>
    )
}
