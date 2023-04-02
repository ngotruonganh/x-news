import React, { useEffect, useState } from 'react'

export default function Loading() {
    const [isLoad, setIsLoad] = useState(true)
    useEffect(() => {
        setTimeout(()=>{
            setIsLoad(false)
        },500)
    }, [isLoad])

    return (
        isLoad && <div id="preloader">
            <img className="preloader" src="assets/images/loader.gif" alt="" />
        </div>
    )
}
