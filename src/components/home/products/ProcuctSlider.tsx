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
        id: "p2",
        image: "/images/products/p2.jpeg",
        alt: "p2",
    },
    {
        id: "p4",
        image: "/images/products/p4.jpeg",
        alt: "p4",
    },
    {
        id: "p6",
        image: "/images/products/p6.jpeg",
        alt: "p6",
    },
    {
        id: "p7",
        image: "/images/products/p7.jpeg",
        alt: "p7",
    },
    {
        id: "p8",
        image: "/images/products/p8.jpeg",
        alt: "p8",
    },
    {
        id: "p9",
        image: "/images/products/p9.jpeg",
        alt: "p9",
    },
    {
        id: "p10",
        image: "/images/products/p1.jpeg",
        alt: "p10",
    },
    {
        id: "p11",
        image: "/images/products/p11.jpeg",
        alt: "p11",
    },
    {
        id: "p13",
        image: "/images/products/p13.jpeg",
        alt: "p13",
    },
    {
        id: "p14",
        image: "/images/products/p14.jpeg",
        alt: "p14",
    },
    {
        id: "p18",
        image: "/images/products/p18.jpeg",
        alt: "p18",
    },
    {
        id: "p19",
        image: "/images/products/p19.jpeg",
        alt: "p19",
    },
    {
        id: "p20",
        image: "/images/products/p20.jpeg",
        alt: "p20",
    },
    {
        id: "p21",
        image: "/images/products/p21.jpeg",
        alt: "p21",
    },
    {
        id: "p22",
        image: "/images/products/p22.jpeg",
        alt: "p22",
    },
    {
        id: "p23",
        image: "/images/products/p23.jpeg",
        alt: "p23",
    },
    {
        id: "p24",
        image: "/images/products/p24.jpeg",
        alt: "p24",
    },
    {
        id: "p25",
        image: "/images/products/p25.jpeg",
        alt: "p25",
    },
    {
        id: "p26",
        image: "/images/products/p26.jpeg",
        alt: "p26",
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
