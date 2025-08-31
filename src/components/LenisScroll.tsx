"use client"

import { ReactLenis } from 'lenis/react'

function LenisScroll(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {

  return (
    <ReactLenis root options={{
      lerp: 0.01,
      duration: 2.5,
      smoothWheel: true,
      touchMultiplier: 2,
      autoResize: true,
    }}>
      {children}
    </ReactLenis>
  )
}

export default LenisScroll