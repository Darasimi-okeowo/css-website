import React from 'react'
import { IoLogoPlaystation } from 'react-icons/io'


const Section1 = () => {
    return (
        <header className='header'>
            <div className='logo-box'>
                <IoLogoPlaystation className='logo'/> 
            </div>
            <div className='text-box'>
                <h1 className='heading-primary'>
                <span className='heading-primary-main'>PlayStation</span>
                <span className='heading-primary-sub'>is where you cool your mind</span>
                </h1>
                <button className='btn btn-white btn-animated'>Discover our games</button>
            </div>
        </header> 
    )
}

export default Section1
