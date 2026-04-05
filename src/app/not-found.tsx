'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { IoBarbellSharp } from 'react-icons/io5'
import { FaHome } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

export default function NotFound() {
    return (
        <main className='relative w-full min-h-screen flex flex-col items-center justify-center bg-obsidian overflow-hidden px-7.5 gap-8 lg:px-20'>

            <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06)_0%,transparent_70%)] z-0' />
            <div className='absolute inset-0 bg-linear-to-b from-obsidian via-transparent to-obsidian z-0' />

            <div className='absolute select-none pointer-events-none z-0 flex items-center justify-center w-full'>
                <span className='font-bebas-neue text-[28vw] lg:text-[20vw] text-forge-white/3 leading-none tracking-widest'>
                    404
                </span>
            </div>

            <div className='relative z-10 flex flex-col items-center gap-6 lg:gap-8 lg:max-w-xl'>

                <div className='flex items-center gap-3'>
                    <Image src='/logo.svg' alt='Iron Fight' priority width={40} height={40} />
                    <span className='font-bebas-neue text-2xl text-forge-white tracking-wide'>Iron Fight</span>
                </div>

                <div className='w-16 h-px bg-linear-to-r from-transparent via-iron-gold to-transparent' />

                <div className='flex flex-col items-center gap-3 text-center'>
                    <p className='font-inter text-xs text-silver uppercase tracking-widest'>Erro 404</p>
                    <h1 className='font-bebas-neue text-4xl text-forge-white lg:text-6xl'>
                        Essa página <span className='text-iron-gold'>não existe</span>.
                    </h1>
                    <h2 className='font-inter text-sm text-silver leading-relaxed lg:text-base'>
                        Parece que você foi mais longe do que o tatame alcança. Essa página não foi encontrada, mas o caminho de volta é simples.
                    </h2>
                </div>

                <div className='flex items-center justify-center w-16 h-16 rounded-full border border-iron-gold/30 shadow-[0_0_24px] shadow-iron-gold/10'>
                    <IoBarbellSharp className='size-7 text-iron-gold' />
                </div>

                <div className='flex flex-col w-full gap-3'>
                    <Link
                        href='/'
                        className='bg-iron-gold border-l-2 border-t-2 border-forge-white/60 rounded-full text-center font-semibold font-inter text-obsidian px-4 py-4 uppercase shadow-[0_1px_10px] shadow-bronze flex items-center justify-center gap-2 hover:brightness-110 transition-all duration-150'
                    >
                        <FaHome className='size-4' />
                        Voltar para a Home
                    </Link>
                    <Link
                        href='https://wa.link/qd7uoz'
                        className='bg-emerald border-l-2 border-t-2 border-forge-white/60 rounded-full text-center font-semibold font-inter text-forge-white px-4 py-4 flex items-center justify-center gap-2 shadow-[0_1px_10px] shadow-victory hover:brightness-110 transition-all duration-150'
                    >
                        <FaWhatsapp className='size-5' />
                        Falar no WhatsApp
                    </Link>
                </div>

                <p className='font-inter text-xs text-silver/40 text-center'>
                    © {new Date().getFullYear()} Iron Fight · Nova Vitória, Camaçari – BA
                </p>

            </div>
        </main>
    )
}