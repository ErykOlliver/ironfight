import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { LuCheckCheck } from 'react-icons/lu'

export default function Hero() {
    return (
        <section className='relative w-full min-h-screen flex flex-col border items-center justify-end pt-27 pb-17 gap-4'>
            <div className='w-full h-full absolute bg-linear-to-t from-black via-black/80 to-transparent -z-1 top-0' />
            <div className='w-full h-full absolute bg-black/10 -z-1 top-0' />

            <video autoPlay loop muted playsInline className='absolute -z-2 inset-0 h-full w-full object-cover'>
                <source src='/homeclip.mp4' type="video/webm" />
            </video>
            <header className='w-full h-fit flex flex-col px-7.5 items-start gap-4 justify-center'>
                <h1 className='text-forge-white uppercase text-3xl font-bebas-neue'>Forje <span className='text-iron-gold'>disciplina</span>. <br /> Construa respeito. <br /> <span className='text-iron-gold'>Transforme</span> seu corpo.</h1>
                <h2 className='font-inter text-md text-silver'>Treine em uma das academias mais completas de Nova Vitória, em Camaçari. Jiu-Jitsu, Boxe e Treinamento Funcional com acompanhamento profissional, ambiente motivador e evolução real.</h2>
            </header>
            <article className='w-full h-fit flex flex-col px-7.5 gap-4'>
                <div className='w-full h-fit flex flex-col p-2.5 shadow-[0_0_10px] shadow-bronze/25 bg-graphite/30 rounded-md border-[0.5px] border-steel/50'>
                    <ul className='w-full h-fit flex gap-1 flex-col text-forge-white'>
                        <li className='flex w-full h-fit line-through py-1.5 backdrop-blur-md items-center gap-1.5 justify-start'>
                            <LuCheckCheck className='text-bronze size-5'/>
                            Jiu-Jitsu (Adulto e Infantil)
                        </li>
                        <li className='flex w-full h-fit line-through py-1.5 backdrop-blur-md items-center gap-1.5 justify-start'>
                            <LuCheckCheck className='text-bronze size-5'/>
                            Boxe
                        </li>
                        <li className='flex w-full h-fit line-through py-1.5 backdrop-blur-md items-center gap-1.5 justify-start'>
                            <LuCheckCheck className='text-bronze size-5'/>
                            Treinamento Funcional
                        </li>
                        <li className='flex w-full h-fit line-through py-1.5 backdrop-blur-md items-center gap-1.5 justify-start'>
                            <LuCheckCheck className='text-bronze size-5'/>
                            Condicionamento Físico
                        </li>
                        <li className='flex w-full h-fit line-through py-1.5 backdrop-blur-md items-center gap-1.5 justify-start'>
                            <LuCheckCheck className='text-bronze size-5'/>
                            Disciplina e Defesa Pessoal
                        </li>
                    </ul>
                </div>
                <Link href={''} className='bg-iron-gold border-l-2 shadow-[0_1px_10px] shadow-bronze border-t-2 rounded-full text-center font-semibold font-inter border-forge-white p-4 uppercase'>AGENDAR AULA EXPERIMENTAL</Link>
                <Link href={''} className='bg-emerald border-l-2 shadow-[0_1px_10px] shadow-victory border-t-2 rounded-full text-center font-semibold font-inter border-forge-white p-4 flex items-center justify-center text-forge-white gap-1.5'> <FaWhatsapp className='size-6'/> Falar no Whatsapp</Link>
            </article>
        </section>
    )
}
