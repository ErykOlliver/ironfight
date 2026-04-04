import React from 'react'
import { BsStar } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { IoBarbell, IoBarbellSharp } from 'react-icons/io5'

export default function SocialProof() {
    return (
        <section className='w-full h-fit flex flex-col bg-obsidian items-center justify-center'>
            <header className='w-full gap-4 h-fit items-center px-7.5 justify-center flex flex-col'>
                <div className='flex w-fit h-fit gap-1'>
                    <FaStar className='size-5 text-graphite' />
                    <FaStar className='size-5 text-graphite' />
                    <FaStar className='size-5 text-graphite' />
                    <FaStar className='size-5 text-graphite' />
                    <FaStar className='size-5 text-graphite' />
                </div>
                <div className='w-full h-fit flex flex-col gap-1 items-center justify-center'>
                    <p className='text-xs text-forge-white font-inter font-extralight uppercase'>Veja de perto quem decidiu mudar.</p>
                    <h1 className='font-bebas-neue text-3xl text-forge-white text-center'>Quem treina aqui, evolui. <span className='text-iron-gold'> Simples assim</span>.</h1>
                    <h2 className='font-inter text-md text-silver text-center'>Todos começaram do zero. Hoje, carregam disciplina, força e confiança dentro e fora do treino.</h2>
                </div>
                <div className='w-fit text-silver h-fit flex gap-1.5 items-center justify-center'>
                    <IoBarbellSharp className='size-4' />
                    <p className='font-inter'>Iron Fight</p>
                </div>
            </header>
        </section>
    )
}
