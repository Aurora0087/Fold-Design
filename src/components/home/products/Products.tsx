'use client'

import Image from 'next/image';
import Experience from './Experience';
import ProcuctSlider from './ProcuctSlider';
import Getintuch from './Getintuch';
import Contactus from '../contact/Contactus';

function Products() {
    return (
        <div className="relative max-h-[600vh] bg-white">
            <Experience />
            <ProcuctSlider />
            <div className='sticky top-0 h-fit w-full bg-white'>
                <Image width={5000} height={1000} alt="" src="/images/certi.png" className=' w-full h-full object-cover' />
            </div>
            <Getintuch />
            <div className='sticky top-0 max-h-screen w-full bg-white grid-cols-1 p-4'>
                <Image width={5000} height={5000} alt='' className=' object-cover w-full h-full grayscale-100' src="/images/about/xyyz.jpg" />
            </div>
            <div className='sticky top-0 min-h-screen w-full bg-white p-8'>
                <Contactus />
            </div>
        </div>
    )
}

export default Products