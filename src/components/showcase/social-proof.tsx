'use client'

import React, { useState } from 'react'
import { FaFire, FaStar } from 'react-icons/fa'
import { IoBarbell, IoBarbellSharp } from 'react-icons/io5'
import { MasonryPhotoAlbum } from 'react-photo-album'
import "react-photo-album/masonry.css"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Image from 'next/image'
import TestimonalsCard from '../interface/testimonals-card'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from 'next/link'
import CountUp from 'react-countup'
import BenefitCard from '../interface/benefit-card'
import { PiMapPinFill, PiUsersThreeFill } from 'react-icons/pi'
import { SiFireship } from 'react-icons/si'


const photos = [
    { src: "/photo.png", width: 800, height: 600, alt: "Aluno 1" },
    { src: "/photo1.png", width: 800, height: 600, alt: "Aluno 1" },
    { src: "/photo2.png", width: 600, height: 900, alt: "Aluno 2" },
    { src: "/photo3.png", width: 700, height: 500, alt: "Aluno 3" },
    { src: "/photo4.png", width: 500, height: 800, alt: "Aluno 4" },
    { src: "/photo5.png", width: 800, height: 700, alt: "Aluno 5" },
    { src: "/photo6.png", width: 600, height: 600, alt: "Aluno 6" },
    { src: "/photo7.png", width: 600, height: 600, alt: "Aluno 6" },
]

const testimonials = [
    { name: "miriansantos", testimonial: "Ótimo local para colocar seus filhos e desenvolver neles obediência e respeito ao próximo." },
    { name: "miriansantos", testimonial: "Ótimo local para colocar seus filhos e desenvolver neles obediência e respeito ao próximo." },
    { name: "miriansantos", testimonial: "Ótimo local para colocar seus filhos e desenvolver neles obediência e respeito ao próximo." },
    { name: "miriansantos", testimonial: "Ótimo local para colocar seus filhos e desenvolver neles obediência e respeito ao próximo." },
    { name: "miriansantos", testimonial: "Ótimo local para colocar seus filhos e desenvolver neles obediência e respeito ao próximo." },
    { name: "miriansantos", testimonial: "Ótimo local para colocar seus filhos e desenvolver neles obediência e respeito ao próximo." },
]

const benefits = [
    { icon: <PiUsersThreeFill className='size-8' />, description: 'Aulas para todas as idades' },
    { icon: <SiFireship className='size-8' />, description: 'Ambiente motivador todos os dias' },
    { icon: <PiMapPinFill className='size-8' />, description: 'Localização acessível em Nova Vitória' },
]

export default function SocialProof() {
    const [lightboxIndex, setLightboxIndex] = useState(-1)

    return (
        <section id='social-proof' className='w-full h-fit flex flex-col gap-4 bg-obsidian items-center justify-center lg:gap-16 lg:py-20'>

            <header className='w-full gap-4 h-fit items-center px-7.5 justify-center flex flex-col lg:max-w-2xl lg:px-0'>
                <div className='flex w-fit h-fit gap-1'>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} className='size-5 text-iron-gold' />
                    ))}
                </div>
                <div className='w-full h-fit flex flex-col gap-1 items-center justify-center'>
                    <p className='text-xs text-forge-white font-inter font-extralight uppercase'>Veja de perto quem decidiu mudar.</p>
                    <h1 className='font-bebas-neue text-3xl text-forge-white text-center lg:text-5xl'>Quem treina aqui, evolui. <span className='text-iron-gold'> Simples assim</span>.</h1>
                    <h2 className='font-inter text-md text-silver text-center'>Todos começaram do zero. Hoje, carregam disciplina, força e confiança dentro e fora do treino.</h2>
                </div>
                <div className='w-fit text-silver h-fit flex gap-1.5 items-center justify-center'>
                    <IoBarbellSharp className='size-4' />
                    <p className='font-inter'>Iron Fight</p>
                </div>
            </header>

            <article className='w-full px-7.5 flex flex-col items-center justify-center gap-4 relative lg:flex-row lg:items-start lg:gap-12 lg:px-20 lg:max-w-7xl lg:mx-auto'>

                <div className='w-full lg:w-[55%] lg:sticky lg:top-24 flex flex-col gap-4'>
                    <div className='relative w-full h-fit'>
                        <div className='w-full h-full absolute bottom-0 left-0 bg-linear-to-t from-obsidian via-obsidian/75 to-transparent z-10 pointer-events-none' />
                        <MasonryPhotoAlbum
                            photos={photos}
                            columns={(containerWidth) => {
                                if (containerWidth < 480) return 3
                                if (containerWidth < 768) return 4
                                return 5
                            }}
                            spacing={(containerWidth) => containerWidth < 480 ? 4 : 8}
                            onClick={({ index }) => setLightboxIndex(index)}
                            render={{
                                wrapper: ({ children, style, ...rest }) => (
                                    <div {...rest} style={style} className="photo-item">
                                        {children}
                                        <div className="photo-overlay">
                                            <IoBarbellSharp style={{ color: '#C9A84C', width: 24, height: 24 }} />
                                            <span style={{ color: 'white', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                                                Ver foto
                                            </span>
                                        </div>
                                        <div className="photo-ring" />
                                    </div>
                                )
                            }}
                        />
                    </div>
                </div>

                <div className='w-full lg:w-[45%] flex flex-col gap-4 lg:gap-6'>

                    <div className="w-full h-fit px-2 pb-2 [&_.swiper-pagination]:relative [&_.swiper-pagination]:mt-4 [&_.swiper]:overflow-visible">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            spaceBetween={16}
                            slidesPerView={1}
                            breakpoints={{
                                1024: { slidesPerView: 2 }
                            }}
                            pagination={{ clickable: true }}
                            className="w-full"
                        >
                            {testimonials.map((t, i) => (
                                <SwiperSlide key={i} className="pb-1 px-1">
                                    <TestimonalsCard name={t.name} testimonial={t.testimonial} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <article className='w-full h-fit flex flex-col items-center justify-center gap-4'>
                        <p className='font-bebas-neue text-forge-white text-2xl text-center'>
                            <span className='text-iron-gold text-xl'>
                                +<CountUp enableScrollSpy scrollSpyOnce scrollSpyDelay={200} start={0} end={500} duration={2.5} />
                            </span> <br /> ALUNOS ATIVOS
                        </p>
                        <div className='grid grid-cols-3 w-full h-fit items-center justify-center gap-4'>
                            {benefits.map((b, i) => (
                                <BenefitCard icon={b.icon} description={b.description} key={i} />
                            ))}
                        </div>
                    </article>

                    <article className='w-full gap-4 h-fit flex flex-col items-center justify-center'>
                        <h1 className='font-inter text-xl text-forge-white uppercase font-bold text-center'>Agora é a sua vez de <span className='text-iron-gold'> começar</span>.</h1>
                        <h2 className='font-inter text-base text-silver text-center'>Dê o primeiro passo. Sem pressão, sem experiência necessária.</h2>
                        <Link href={'https://wa.link/qd7uoz'} target='_blank' className='bg-iron-gold border-l-2 shadow-[0_1px_10px] shadow-bronze border-t-2 rounded-full text-center w-full font-semibold font-inter border-forge-white p-4 uppercase'>AGENDAR AULA EXPERIMENTAL</Link>
                        <p className='font-inter text-silver underline text-center'>Primeira experiência sem compromisso</p>
                    </article>

                </div>
            </article>

            <Lightbox
                open={lightboxIndex >= 0}
                index={lightboxIndex}
                close={() => setLightboxIndex(-1)}
                slides={photos.map(p => ({ src: p.src, alt: p.alt }))}
                plugins={[Zoom, Fullscreen]}
                styles={{ container: { backgroundColor: "rgba(0,0,0,0.92)" } }}
                zoom={{ maxZoomPixelRatio: 3 }}
            />
        </section>
    )
}