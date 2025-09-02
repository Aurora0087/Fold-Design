"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Keyboard } from "swiper/modules"
import "swiper/css"

type Product = {
    id: string
    image: string
    alt: string
}

export type ProcuctSliderProps = {
    title?: string
    products?: Product[]
    autoplayDelayMs?: number
    speedMs?: number
}

const sampleProducts: Product[] = [

    {
        id: "p4",
        image: "/images/products/p4.jpeg",
        alt: "p4",
    },
    {
        id: "p11",
        image: "/images/products/p11.jpeg",
        alt: "p11",
    },
    {
        id: "p10",
        image: "/images/products/p10.jpeg",
        alt: "p10",
    },
    {
        id: "p25",
        image: "/images/products/p25.jpeg",
        alt: "p25",
    },
]

export default function ProcuctSlider({
    products = sampleProducts,
    autoplayDelayMs = 2200,
    speedMs = 600,
}: ProcuctSliderProps) {
    return (
        <section aria-label="Product showcase" className="sticky top-[-10vh] h-fit w-full bg-white p-8 md:p-28 md:py-16">
            <div className="h-fit w-full pb-8 flex flex-col gap-6">
                <div className="relative grow" aria-live="off">
                    <Swiper
                        modules={[Autoplay, Keyboard]}
                        loop
                        grabCursor
                        keyboard={{ enabled: true }}
                        slidesPerView={1.1}
                        spaceBetween={12}
                        centeredSlides={false}
                        autoplay={{
                            delay: autoplayDelayMs,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={speedMs}
                        breakpoints={{
                            480: { slidesPerView: 1.2, spaceBetween: 14 },
                            640: { slidesPerView: 2, spaceBetween: 16 },
                            768: { slidesPerView: 2, spaceBetween: 18 },
                            /*1024: { slidesPerView: 3.25, spaceBetween: 20 },
                            1280: { slidesPerView: 4, spaceBetween: 24 },*/
                        }}
                        className="h-full"
                    >
                        {products.map((p) => (
                            <SwiperSlide key={p.id} className="!h-auto">
                                <div className="aspect-3/2 w-full overflow-hidden rounded-md bg-white">
                                    <img src={p.image || "/placeholder.svg"} alt={p.alt} className="h-full w-full object-contain" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
