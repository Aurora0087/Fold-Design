'use client'

import Image from 'next/image';
import React from 'react'

function Section2() {

    return (
        <div className=' sticky top-0 min-h-screen w-full bg-white p-8 md:p-28 md:py-16 grid gap-8 md:gap-4 '>
            <div className='overflow-hidden h-full w-full rounded-xl'>
                <Image width={2560} height={800} alt='' src="/images/about/s2.jpeg" className=' w-full h-full object-cover grayscale-100' />
            </div>
            <div>
                <h3 className=' text-3xl md:text-5xl font-bold text-primary mb-8'>Stronger together, better for you </h3>
                <p className=' mb-2 font-sans'>At Fold Design, we believe collaboration fuels innovation. With 20 years of industry expertise, our team of sourcing, product development and merchandising specialists is dedicated to bringing your vision alive.</p>

                <p className=' font-sans mb-2'>Our trend savvy design team  stays ahead of the curve by attending global fashion fairs and exploring top style capitals. We offer exclusive private label designs and work hand in hand with client teams to create standout collections that inspire.</p>

                <p className=' font-sans mb-2'>From manufacturing to packaging and dispatch, our entire production process is conducted under strict quality control, prioritizing health and employee safety while upholding our commitment to environmental sustainability.</p>
            </div>

        </div>
    )
}

export default Section2