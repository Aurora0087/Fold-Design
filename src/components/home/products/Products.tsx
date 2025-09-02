'use client'

import Image from 'next/image';
import Experience from './Experience';
import ProcuctSlider from './ProcuctSlider';
import Getintuch from './Getintuch';
import Contactus from '../contact/Contactus';

function Products() {
    return (
        <div className="relative min-h-[600vh] bg-white">
            <Experience />
            <ProcuctSlider />
            <div className='sticky top-0 h-fit w-full bg-white'>
                <Image width={5000} height={1000} alt="" src="/images/certi.png" className=' w-full h-full object-cover' />
            </div>
            <Getintuch />
            <div className='sticky top-0 max-h-screen w-full bg-white grid-cols-1 p-4'>
                <div className=' w-full grid grid-cols-2 overflow-hidden h-[40vh]'>
                    <div className=' w-full h-full overflow-hidden grid place-content-center'>
                        <Image width={500} height={100} alt="" src="/images/products/p26.jpeg" className='object-cover' />
                    </div>
                    <div className=' w-full h-full overflow-hidden grid place-content-center'>
                        <Image width={500} height={100} alt="" src="/images/products/p20.jpeg" className=' object-center' />
                    </div>
                </div>
                <div className=' w-full h-[40vh] overflow-hidden grid grid-cols-3'>
                    <div className=' w-full h-full overflow-hidden'>
                        <Image width={5000} height={1000} alt="" src="/images/products/p24.jpeg" className=' w-full h-full object-contain' />
                    </div>
                    <div className=' w-full h-full overflow-hidden'>
                        <Image width={5000} height={1000} alt="" src="/images/products/p11.jpeg" className=' w-full h-full object-contain' />
                    </div>
                    <div className=' w-full h-full overflow-hidden'>
                        <Image width={5000} height={1000} alt="" src="/images/products/p25.jpeg" className=' w-full h-full object-contain' />
                    </div>
                </div>

            </div>
            <div className='sticky top-0 min-h-screen w-full bg-white p-8'>
                <Contactus />
            </div>
        </div>
    )
}

export default Products