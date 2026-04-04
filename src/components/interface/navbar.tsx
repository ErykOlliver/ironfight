'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'

export default function NavBar() {
    const [enabledMenu, setEnabledMenu] = useState(false)

    return (
        <>
            <div className='w-[95%] md:w-[99%] h-fit backdrop-blur-md shadow-xs shadow-black/50 bg-obsidian/55 items-center justify-between flex py-2 rounded-md border-[0.5] border-silver z-1500 px-7.5 fixed top-0 left-1/2 -translate-x-1/2 mt-2'>
                <div className='w-fit h-fit flex gap-3 items-center justify-center'>
                    <Image src={"/logo.svg"} width={35} height={35} alt='Iron Fight Icon' />
                    <h1 className='font-bebas-neue text-lg text-forge-white'>Iron Fight</h1>
                </div>

                <nav className='hidden lg:flex items-center gap-1'>
                    {[
                        { label: 'HOME', href: '#hero' },
                        { label: 'PROVA SOCIAL', href: '#social-proof' },
                        { label: 'MODALIDADES', href: '#modalities' },
                        { label: 'SOBRE', href: '#about-gym' },
                        { label: 'HORÁRIOS', href: '#hours-and-location' },
                        { label: 'FAQ', href: '#faq' },
                    ].map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            className='select-none text-xs font-inter font-semibold text-silver hover:text-iron-gold transition-colors duration-150 uppercase px-3 py-1.5 rounded-sm hover:bg-white/5'
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        href={'https://wa.link/qd7uoz'}
                        target='_blank'
                        className='ml-3 select-none text-xs font-inter font-semibold text-obsidian bg-iron-gold hover:brightness-110 transition-all duration-150 uppercase px-4 py-2 rounded-full border-l border-t border-forge-white/60'
                    >
                        AULA EXPERIMENTAL
                    </Link>
                </nav>

                {enabledMenu ? (
                    <LuX className='size-7 text-white lg:hidden' onClick={() => setEnabledMenu(false)} />
                ) : (
                    <LuMenu className='size-7 text-white lg:hidden' onClick={() => setEnabledMenu(true)} />
                )}
            </div>

            {enabledMenu && (
                <>
                    <div onClick={() => setEnabledMenu(false)} className='bg-black/40 w-screen h-screen z-1000 fixed lg:hidden' />
                    <div className='p-3 w-60 max-w-70 h-fit gap-2.5 flex flex-col items-center justify-start backdrop-blur-md shadow-xs shadow-black/50 bg-obsidian/55 right-3 top-18 rounded-md border-[0.5] border-silver fixed z-2000 lg:hidden'>
                        <nav className='overflow-x-hidden overflow-y-auto gap-3 flex flex-col h-fit w-full'>
                            <Link className='hover:text-primary-500 select-none text-sm font-inter text-forge-white transition-colors duration-150 uppercase border-b p-1 border-silver/30' href={'#hero'}>HOME</Link>
                            <Link className='hover:text-primary-500 select-none text-sm font-inter text-forge-white transition-colors duration-150 uppercase border-b p-1 border-silver/30' href={'#social-proof'}>PROVA SOCIAL</Link>
                            <Link className='hover:text-primary-500 select-none text-sm font-inter text-forge-white transition-colors duration-150 uppercase border-b p-1 border-silver/30' href={'#modalities'}>MODALIDADES</Link>
                            <Link className='hover:text-primary-500 select-none text-sm font-inter text-forge-white transition-colors duration-150 uppercase border-b p-1 border-silver/30' href={'#about-gym'}>SOBRE A IRON FIGHT</Link>
                            <Link className='hover:text-primary-500 select-none text-sm font-inter text-forge-white transition-colors duration-150 uppercase border-b p-1 border-silver/30' href={'#hours-and-location'}>Horário e Localização</Link>
                            <Link className='hover:text-primary-500 select-none text-sm font-inter text-forge-white transition-colors duration-150 uppercase border-b p-1 border-silver/30' href={'#faq'}>PERGUNTAS FREQUENTES</Link>
                        </nav>
                    </div>
                </>
            )}
        </>
    )
}