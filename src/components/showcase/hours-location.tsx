import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiMapPin } from 'react-icons/bi'
import { BsClock, BsClockFill } from 'react-icons/bs'
import { CgLock } from 'react-icons/cg'
import { FaMapMarker, FaMapMarkerAlt, FaMapPin } from 'react-icons/fa'

export default function HoursAndLocation() {
    return (
        <section className='w-full h-fit flex flex-col gap-4 bg-obsidian items-center justify-center'>
            <header className='w-full gap-4 h-fit items-start px-7.5 pt-10 justify-center flex flex-col'>
                <h1 className='font-bebas-neue text-3xl text-forge-white text-center'><span className='text-iron-gold'>Sem desculpas</span>. Veja quando e onde começar.</h1>
                <h2 className='font-inter text-md text-silver text-center'>Escolha o melhor horário pra você e venha treinar em um ambiente preparado pra sua evolução.</h2>
            </header>

            <article className='w-full px-7.5 h-fit flex flex-col items-center justify-center gap-4'>
                <article className='bg-carbon rounded-md w-full h-fit p-2.5 border border-silver/30 shadow-xs shadow-bronze items-center justify-center'>
                    <header className='w-full h-fit p-2.5 flex gap-2 border-b border-silver'>
                        <BsClockFill className='size-6 text-iron-gold' />
                        <p className='text-forge-white text-md font-inter font-medium uppercase'>Horário de funcionamento</p>
                    </header>
                    <article className='w-full h-fit flex flex-col gap-4 py-2.5'>
                        <div className='w-full flex h-fit gap-2 items-center justify-between'>
                            <p className='font-inter text-forge-white text-md'>Segunda a Sexta</p>
                            <p className='font-inter text-iron-gold text-md'>05:00 às 21:30</p>
                        </div>
                        <div className='w-full flex h-fit gap-2 items-center justify-between'>
                            <p className='font-inter text-forge-white text-md'>Sábado</p>
                            <p className='font-inter text-iron-gold text-md'>06:00 às 12:00</p>
                        </div>
                    </article>
                </article>

                <article className='w-full bg-carbon border border-silver/30 shadow-xs shadow-bronze gap-2.5 h-fit flex flex-col items-center justify-center p-2.5 rounded-md'>
                    <div className='relative rounded-lg w-full h-50 shadow-xs shadow-black'>
                        <div className='w-full h-full absolute bg-linear-to-t from-black via-black/50 rounded-lg to-black z-1 top-0' />
                        <Image src={"/gym2.png"} alt='Fachada Iron Fight' fill className='object-cover -z-0 rounded-lg' />
                        <div className='w-full h-full relative z-2 flex flex-col items-center gap-2.5 justify-center p-2.5'>
                            <div className='flex w-fit h-fit items-center justify-center flex-col gap-2.5'>
                                <FaMapPin className='text-iron-gold size-6' />
                                <p className='font-inter font-semibold text-md text-center uppercase text-forge-white'>Nossa localização</p>
                            </div>
                            <div className='w-fit h-fit flex flex-col items-center justify-center gap-1'>
                                <p className='font-inter font-semibold text-base text-center text-forge-white'  >Rua Padre Paulo Maria Tunuci</p>
                                <p className='font-inter font-medium text-md text-center text-silver'  >Nova Vitória - Camaçari, BA</p>
                                <p className='font-inter font-medium text-xs underline text-center text-silver'  >Fácil Acesso, perto de você.</p>
                            </div>
                        </div>
                    </div>
                    <Link href={""} className='flex w-full h-fit gap-1 items-center justify-center uppercase text-md border-silver/25 border rounded-md p-2.5 text-forge-white'> <FaMapMarkerAlt className='text-red size-6' /> Ver no google maps</Link>
                </article>

                <article className='w-full gap-4 h-fit flex flex-col items-center justify-center'>
                    <h1 className='font-inter text-xl text-forge-white uppercase font-bold text-center'>o <span className='text-iron-gold'> melhor momento </span> para começar <span className='text-iron-gold'> é agora</span> </h1>
                    <h2 className='font-inter text-base text-silver text-center'>Escolha um horário e venha conhecer de perto.</h2>
                    <Link href={''} className='bg-iron-gold border-l-2 shadow-[0_1px_10px] shadow-bronze border-t-2 rounded-full text-center w-full font-semibold font-inter border-forge-white p-4 uppercase'>AGENDAR AULA EXPERIMENTAL</Link>
                    <p className='font-inter text-silver underline text-center'> Sem burocracia. Chegou, treinou.</p>
                </article>

            </article>
        </section>
    )
}
