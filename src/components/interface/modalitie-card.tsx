import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuCheckCheck } from 'react-icons/lu'

type props = {
    poster: string,
    title: string,
    description: string,
    benefits: string[],
    cta: string,
    link: string
}

export default function ModalitieCard(props: props) {
    return (
        <article className='
            bg-carbon w-full flex flex-col h-fit items-center justify-center
            border-l-2 border-t-2 shadow-[3px_3px_0px] rounded-xl shadow-bronze border-silver
            lg:h-full lg:transition-all lg:duration-200 lg:hover:-translate-y-1 lg:hover:shadow-bronze/70 lg:hover:shadow-[3px_3px_14px]
        '>
            <div className='relative w-full h-38 rounded-xl lg:h-52'>
                <Image src={props.poster} alt={`${props.title} Poster`} fill className='object-cover rounded-xl' />
                <div className='w-full h-full absolute bg-linear-to-t from-carbon via-black/80 to-transparent z-0 top-0' />
            </div>

            <div className='flex flex-col w-full h-fit px-2.5 pb-5 gap-4 items-start justify-center lg:flex-1 lg:justify-between'>
                <header className='w-full h-fit flex flex-col items-start justify-center'>
                    <h1 className='font-bebas-neue text-iron-gold text-2xl lg:text-3xl'>{props.title}</h1>
                    <h2 className='font-inter text-silver text-xs'>{props.description}</h2>
                </header>
                <article className='w-full h-fit flex flex-col gap-4 items-start justify-center'>
                    <ul>
                        {props.benefits.map((b, i) => (
                            <li key={i} className='flex w-full h-fit gap-2 text-md text-forge-white line-through'>
                                <LuCheckCheck className='text-bronze size-5' />
                                {b}
                            </li>
                        ))}
                    </ul>
                    <Link
                        className='bg-iron-gold border-l-2 shadow-[0_1px_10px] shadow-bronze border-t-2 rounded-full text-center w-full font-semibold font-inter border-forge-white p-4 uppercase lg:hover:brightness-110 lg:transition-all lg:duration-150'
                        href={props.link}
                    >
                        {props.cta}
                    </Link>
                </article>
            </div>
        </article>
    )
}