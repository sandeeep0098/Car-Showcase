import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>

                    Find ,book, or rent - car quickly
                    and easily!

                </h1>
                    <p className='hero__subtitle'>
                        strealine your car rental experience 
                        with our effortless booking experience 
                    </p>
                    <CustomButton/>

            </div>
        </div>
    )
}

export default Hero