import React from 'react'
import { InfiniteMovingCardsDemo } from '../../infiniteContant/InfiniteMovingCardsDemo'

function ClientSay() {
  return (
    <div className=' w-full grid gap-8 md:gap-2 md:grid-cols-[1fr_1.6fr]'>
      <div className=' uppercase'>
        <h1 className=' text-[10vw] text-[#C2FF3F] indent-0 h-[10vw] font-bold'>Our</h1>
        <h1 className=' text-[8vw] text-transparent text-stroke-1 indent-0 h-[8vw]'>clients</h1>
        <h1 className=' text-[4vw] text-white indent-0 h-[4vw] text-center w-fit pl-2 md:pl-0 md:w-full'>say</h1>
      </div>
      <div className=' w-full overflow-hidden'>
        <InfiniteMovingCardsDemo/>
      </div>
    </div>
  )
}

export default ClientSay