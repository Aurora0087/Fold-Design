'use client'

import Image from 'next/image';
import React from 'react'

function Section2() {

    return (
        <div className=' sticky top-0 h-screen w-full bg-white p-8 md:p-28 md:py-16 grid gap-8 md:gap-4 grid-rows-2 md:grid-rows-[1.61fr_1fr]'>
            <div className='overflow-hidden grid md:grid-cols-3 gap-1 h-full rounded-xl'>
                <div className=' w-full h-full overflow-hidden'>
                    <Image width={500} height={500} src="/images/hero/human1.jpeg" alt='' className=' w-full h-full object-cover' />
                </div>
                <div className=' w-full min-h-[50vh] h-full overflow-hidden grid grid-rows-3 gap-1'>
                    <div className=' w-full h-full overflow-hidden'>
                        <Image width={500} height={500} src="/images/hero/about2.jpeg" alt='' className=' w-full h-full object-contain' />
                    </div>
                    <div className=' w-full h-full overflow-hidden grid grid-cols-2 gap-1'>
                        <div className=' w-full h-full overflow-hidden'>
                            <Image width={500} height={500} src="/images/products/p9-2.jpeg" alt='' className=' w-full h-full object-cover' />
                        </div>
                        <div className=' w-full h-full overflow-hidden'>
                            <Image width={500} height={500} src="/images/products/p22.jpeg" alt='' className=' w-full h-full object-cover' />
                        </div>
                    </div>
                    <div className=' w-full h-full overflow-hidden grid grid-cols-2 gap-1'>
                        <div className=' w-full h-full overflow-hidden'>
                            <Image width={500} height={500} src="/images/products/p26.jpeg" alt='' className=' w-full h-full object-contain' />
                        </div>
                        <div className=' w-full h-full overflow-hidden'>
                            <Image width={500} height={500} src="/images/products/p13.jpeg" alt='' className=' w-full h-full object-containr' />
                        </div>
                    </div>
                </div>
                <div className=' w-full h-full min-h-[50vh] overflow-hidden grid gap-1 grid-rows-[2fr_1fr]'>
                    <div className=' w-full h-full overflow-hidden'>
                        <Image width={500} height={500} src="/images/hero/human2.jpeg" alt='' className=' w-full h-full object-cover' />
                    </div>
                    <div className=' w-full h-full overflow-hidden grid grid-cols-2 gap-1'>
                        <div className=' w-full h-full overflow-hidden'>
                            <Image width={500} height={500} src="/images/products/p4.jpeg" alt='' className=' w-full h-full object-contain' />
                        </div>
                        <div className=' w-full h-full overflow-hidden'>
                            <Image width={500} height={500} src="/images/products/p20.jpeg" alt='' className=' w-full h-full object-contain' />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className=' text-3xl md:text-5xl font-bold text-primary mb-8'>Stronger together, better for you </h3>
                <p className=' mb-2 font-sans'>At Fold Design, we believe collaboration fuels innovation. With 20 years of industry expertise, our team of sourcing, product development and merchandising specialists is dedicated to bringing your vision alive.</p>

                <p className=' font-sans mb-2'>Our trend savvy design team in Spain stays ahead of the curve by attending global fashion fairs and exploring top style capitals. We offer exclusive private label designs and work hand in hand with client teams to create standout collections that inspire.</p>

                <p className=' font-sans mb-2'>From manufacturing to packaging and dispatch, our entire production process is conducted under strict quality control, prioritizing health and employee safety while upholding our commitment to environmental sustainability.</p>
            </div>

        </div>
    )
}

export default Section2