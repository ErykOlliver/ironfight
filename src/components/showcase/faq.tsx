'use client'

import React, { useState } from 'react'
import Quest from '../interface/quest'
import Link from 'next/link'
import Image from 'next/image'

const faqs = [
    {
        question: 'Preciso ter experiência para começar?',
        response: 'Não. A maioria dos alunos começa do zero. Você será orientado desde o início, no seu ritmo.'
    },
    {
        question: 'Tem aula experimental?',
        response: 'Sim. Você pode fazer uma aula experimental e conhecer o ambiente antes de decidir.'
    },
    {
        question: 'Preciso estar em forma para treinar?',
        response: 'Não. O treino é justamente o caminho pra isso. Você começa como está e evolui com o tempo.'
    },
    {
        question: 'O projeto já vem otimizado para SEO e performance?',
        response: 'Sim. A estrutura é desenvolvida seguindo boas práticas de performance, organização de código e SEO técnico, garantindo carregamento rápido e base adequada para posicionamento em motores de busca.'
    },
    {
        question: 'Quais modalidades estão disponíveis?',
        response: 'Jiu-Jitsu (adulto e infantil), Boxe e Treinamento Funcional. Cada uma com foco em evolução física e disciplina.'
    },
    {
        question: 'Como faço para me inscrever?',
        response: 'É simples. Você pode falar diretamente pelo WhatsApp ou agendar uma aula experimental.'
    },
    {
        question: 'Onde fica a academia?',
        response: 'Em Nova Vitória, Camaçari – BA. Local de fácil acesso e bem localizado.'
    }
]

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index))
    }

    const half = Math.ceil(faqs.length / 2)
    const leftFaqs = faqs.slice(0, half)
    const rightFaqs = faqs.slice(half)

    return (
        <section id='faq' className='w-full h-fit flex flex-col gap-4 bg-obsidian items-center relative justify-center lg:gap-12 lg:py-20'>
            <div className='w-full h-full absolute bg-linear-to-t from-iron-gold via-black/80 to-obsidian z-1 top-0' />
            <Image src={'/FAQ.png'} alt='Iron Fight' priority className='object-cover' fill />

            <header className='w-full gap-4 h-fit items-center relative z-2 px-7.5 pt-10 justify-center flex flex-col lg:max-w-2xl lg:px-0 lg:pt-0'>
                <h1 className='font-bebas-neue text-3xl text-forge-white text-center lg:text-5xl'>
                    <span className='text-iron-gold'>FAQ </span>(Perguntas Frequentes)
                </h1>
                <h2 className='font-inter text-md text-silver text-center'>
                    Ainda com dúvida? A gente responde.
                </h2>
            </header>

            <article className='w-full px-7.5 h-fit relative z-2 flex flex-col items-center justify-center gap-4 lg:px-20 lg:max-w-7xl lg:mx-auto lg:w-full'>

                <div className='flex flex-col w-full items-center gap-4 lg:hidden'>
                    {faqs.map((f, index) => (
                        <Quest
                            key={index}
                            question={f.question}
                            response={f.response}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>

                <div className='hidden lg:flex w-full gap-6 items-start'>
                    <div className='flex flex-col flex-1 gap-4'>
                        {leftFaqs.map((f, index) => (
                            <Quest
                                key={index}
                                question={f.question}
                                response={f.response}
                                isOpen={openIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                    <div className='flex flex-col flex-1 gap-4'>
                        {rightFaqs.map((f, index) => (
                            <Quest
                                key={index + half}
                                question={f.question}
                                response={f.response}
                                isOpen={openIndex === index + half}
                                onToggle={() => handleToggle(index + half)}
                            />
                        ))}
                    </div>
                </div>

            </article>

            <article className='w-full gap-4 h-fit flex flex-col items-center px-7.5 z-2 relative justify-center lg:max-w-lg lg:px-0'>
                <h1 className='font-inter text-xl text-forge-white uppercase font-bold text-center'>
                    o <span className='text-iron-gold'> melhor momento </span> para começar <span className='text-iron-gold'> é agora</span>
                </h1>
                <h2 className='font-inter text-base text-silver text-center'>
                    Escolha um horário e venha conhecer de perto.
                </h2>
                <Link href={'https://wa.link/qd7uoz'} target='_blank' className='bg-iron-gold border-l-2 shadow-[0_1px_10px] shadow-bronze border-t-2 rounded-full text-center w-full font-semibold font-inter border-forge-white p-4 uppercase'>
                    AGENDAR AULA EXPERIMENTAL
                </Link>
                <p className='font-inter text-graphite underline text-center'>Sem burocracia. Chegou, treinou.</p>
            </article>
        </section>
    )
}