import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { LuCheckCheck } from 'react-icons/lu'

export default function Hero() {
    return (
        <section className='
            relative w-full min-h-screen
            flex flex-col items-center justify-end pt-27 pb-17 gap-4
            lg:flex-row lg:items-end lg:justify-start lg:pt-0 lg:pb-0 lg:gap-0
        '>
            <div className='w-full h-full absolute bg-linear-to-t from-obsidian via-black/80 to-transparent -z-1 top-0
                lg:bg-[linear-gradient(to_right,rgba(10,10,10,0.85)_0%,rgba(10,10,10,0.3)_55%,rgba(10,10,10,0.75)_100%),linear-gradient(to_top,#0a0a0a_0%,rgba(0,0,0,0.6)_40%,transparent_100%)]
            ' />
            <div className='w-full h-full absolute bg-black/10 -z-1 top-0' />

            <video autoPlay loop muted playsInline className='absolute -z-2 inset-0 h-full w-full object-cover'>
                <source src='/homeclip.webm' type="video/webm" />
            </video>

            <header className='
                w-full h-fit flex flex-col px-7.5 items-start gap-4 justify-center
                lg:w-[55%] lg:px-20 lg:pl-20 lg:pr-16 lg:pb-18 lg:gap-6 lg:justify-end lg:self-end lg:items-start
            '>
                <h1 className='
                    text-forge-white uppercase text-3xl font-bebas-neue
                    lg:text-[clamp(3rem,5vw,5rem)] lg:leading-none
                '>
                    Forje <span className='text-iron-gold'>disciplina</span>. <br />
                    Construa respeito. <br />
                    <span className='text-iron-gold'>Transforme</span> seu corpo.
                </h1>
                <h2 className='
                    font-inter text-md text-silver
                    lg:text-[1.05rem] lg:max-w-130 lg:leading-[1.7]
                '>
                    Treine em uma das academias mais completas de Nova Vitória, em Camaçari.
                    Jiu-Jitsu, Boxe e Treinamento Funcional com acompanhamento profissional,
                    ambiente motivador e evolução real.
                </h2>
            </header>

            <div className='hidden lg:block relative z-10 w-px self-stretch my-20 bg-linear-to-b from-transparent via-iron-gold/40 to-transparent' />

            <article className='
                w-full h-fit flex flex-col px-7.5 gap-4
                lg:w-[45%] lg:px-20 lg:pl-16 lg:pr-20 lg:pb-18 lg:gap-4 lg:justify-end lg:self-end
            '>
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
                <Link href={''} className='bg-iron-gold border-l-2 shadow-[0_1px_10px] shadow-bronze border-t-2 rounded-full text-center font-semibold font-inter border-forge-white p-4 uppercase'>
                    AGENDAR AULA EXPERIMENTAL
                </Link>
                <Link href={''} className='bg-emerald border-l-2 shadow-[0_1px_10px] shadow-victory border-t-2 rounded-full text-center font-semibold font-inter border-forge-white p-4 flex items-center justify-center text-forge-white gap-1.5'>
                    <FaWhatsapp className='size-6'/> Falar no Whatsapp
                </Link>
            </article>
        </section>
    )
}