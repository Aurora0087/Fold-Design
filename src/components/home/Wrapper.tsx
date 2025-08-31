import React from 'react'

function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className='px-8'>{children}</div>
    )
}

export default Wrapper