import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { BsClockFill } from 'react-icons/bs'
import { IoBarbellSharp } from 'react-icons/io5'

export default function Footer() {
    return (
        <footer className='w-full h-fit flex flex-col bg-obsidian border-t border-silver/20 items-center justify-center'>

            <div className='w-full h-px bg-linear-to-r from-transparent via-iron-gold/60 to-transparent' />

            <div className='w-full flex flex-col gap-8 px-7.5 py-10 lg:flex-row lg:items-start lg:justify-between lg:px-20 lg:max-w-7xl lg:mx-auto lg:py-16 lg:gap-12'>

                <div className='flex flex-col gap-3 lg:max-w-xs'>
                    <div className='flex items-center gap-3'>
                        <Image src='/logo.svg' alt='Iron Fight' width={38} height={38} />
                        <span className='font-bebas-neue text-2xl text-forge-white tracking-wide'>Iron Fight</span>
                    </div>
                    <p className='font-inter text-sm text-silver leading-relaxed'>
                        Forje disciplina. Construa respeito. Transforme seu corpo. Jiu-Jitsu, Boxe e Treinamento Funcional em Nova Vitória, Camaçari.
                    </p>
                    <div className='flex gap-3 items-center mt-1'>
                        <Link href='' className='text-silver hover:text-iron-gold transition-colors duration-150'>
                            <FaInstagram className='size-5' />
                        </Link>
                        <Link href='' className='text-silver hover:text-iron-gold transition-colors duration-150'>
                            <FaWhatsapp className='size-5' />
                        </Link>
                    </div>
                </div>

                <div className='w-full h-px bg-silver/15 lg:hidden' />

                <div className='flex flex-col gap-3 lg:gap-4'>
                    <p className='font-bebas-neue text-lg text-iron-gold tracking-widest uppercase'>Navegação</p>
                    <nav className='flex flex-col gap-2'>
                        {[
                            { label: 'Home', href: '/' },
                            { label: 'Modalidades', href: '/modalidades' },
                            { label: 'Prova Social', href: '/prova-social' },
                            { label: 'Sobre a Iron Fight', href: '/sobre' },
                            { label: 'Horários e Localização', href: '/horarios' },
                            { label: 'Perguntas Frequentes', href: '/faq' },
                        ].map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className='font-inter text-sm text-silver hover:text-iron-gold transition-colors duration-150 w-fit'
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className='w-full h-px bg-silver/15 lg:hidden' />

                <div className='flex flex-col gap-3 lg:gap-4'>
                    <p className='font-bebas-neue text-lg text-iron-gold tracking-widest uppercase flex items-center gap-2'>
                        <BsClockFill className='size-4' /> Horários
                    </p>
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-between gap-8'>
                            <span className='font-inter text-sm text-silver'>Seg a Sex</span>
                            <span className='font-inter text-sm text-forge-white'>05:00 – 21:30</span>
                        </div>
                        <div className='flex justify-between gap-8'>
                            <span className='font-inter text-sm text-silver'>Sábado</span>
                            <span className='font-inter text-sm text-forge-white'>06:00 – 12:00</span>
                        </div>
                        <div className='flex justify-between gap-8'>
                            <span className='font-inter text-sm text-silver'>Domingo</span>
                            <span className='font-inter text-sm text-silver'>Fechado</span>
                        </div>
                    </div>
                </div>

                <div className='w-full h-px bg-silver/15 lg:hidden' />

                <div className='flex flex-col gap-3 lg:gap-4 lg:max-w-56'>
                    <p className='font-bebas-neue text-lg text-iron-gold tracking-widest uppercase flex items-center gap-2'>
                        <FaMapMarkerAlt className='size-4' /> Localização
                    </p>
                    <div className='flex flex-col gap-1'>
                        <span className='font-inter text-sm text-forge-white font-medium'>Rua Padre Paulo Maria Tunuci</span>
                        <span className='font-inter text-sm text-silver'>Nova Vitória – Camaçari, BA</span>
                        <Link href='' className='font-inter text-xs text-silver underline hover:text-iron-gold transition-colors duration-150 mt-1 w-fit'>
                            Ver no Google Maps
                        </Link>
                    </div>
                    <Link
                        href=''
                        className='mt-2 bg-iron-gold border-l-2 border-t-2 border-forge-white/60 rounded-full text-center font-semibold font-inter text-obsidian text-xs px-4 py-3 uppercase shadow-[0_1px_10px] shadow-bronze hover:brightness-110 transition-all duration-150'
                    >
                        Aula Experimental
                    </Link>
                </div>

            </div>

            <div className='w-full h-px bg-linear-to-r from-transparent via-silver/20 to-transparent' />
            <div className='w-full flex flex-col gap-1 items-center justify-center px-7.5 py-5 lg:flex-row lg:justify-between lg:px-20 lg:max-w-7xl lg:mx-auto'>
                <p className='font-inter text-xs text-silver/50'>Nova Vitória · Camaçari · BA</p>
                <div className='flex items-center gap-1.5 text-silver'>
                    <IoBarbellSharp className='size-3.5' />
                    <p className='font-inter text-xs'>© {new Date().getFullYear()} Iron Fight. Todos os direitos reservados.</p>
                </div>
                <Link href={"https://erykolliver.com.br"} target='_blank' className='font-inter text-xs text-silver/50 underline'>Desenvolvido por Eryk Olliver</Link>
            </div>

        </footer>
    )
}