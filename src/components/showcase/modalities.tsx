import Link from 'next/link'
import React from 'react'
import ModalitieCard from '../interface/modalitie-card'

const modalities = [
    {
        title: 'Jiu-Jitsu',
        description: 'Desenvolva disciplina, controle emocional e defesa pessoal enquanto evolui seu corpo e sua mente. Do iniciante ao avançado.',
        poster: '/jiu.png',
        benefits: ["Foco e disciplina", "Defesa pessoal", "Força e resistência"],
        cta: 'Começar no Jiu-Jitsu',
        link: ''
    },
    {
        title: 'Boxe',
        description: 'Libere o estresse, melhore seu condicionamento e desenvolva agilidade com treinos intensos e dinâmicos.',
        poster: '/boxe.png',
        benefits: ["Alto gasto calórico", "Reflexo e agilidade", "Alívio de estresse"],
        cta: 'Começar no Boxe',
        link: ''
    },
    {
        title: 'Treinamento Funcional',
        description: 'Treinos completos para emagrecimento, resistência e performance. Ideal para quem quer resultado rápido e consistente.',
        poster: '/funci.png',
        benefits: ["Emagrecimento", "Condicionamento físico", "Performance no dia a dia"],
        cta: 'Começar no Funcional',
        link: ''
    },
]

export default function Modalities() {
    return (
        <section className='w-full h-fit flex flex-col gap-4 bg-obsidian items-center justify-center lg:gap-12 lg:py-20'>

            <header className='w-full gap-4 h-fit items-center px-7.5 justify-center flex flex-col lg:max-w-2xl lg:px-0'>
                <h1 className='font-bebas-neue text-3xl text-forge-white text-center lg:text-5xl'>
                    Aqui, cada treino tem um <span className='text-iron-gold'> propósito</span>.
                </h1>
                <h2 className='font-inter text-md text-silver text-center'>
                    Não importa seu nível. Existe um treino certo pra você começar hoje.
                </h2>
            </header>

            <article className='w-full px-7.5 h-fit flex flex-col items-center justify-center gap-4 lg:px-20 lg:max-w-7xl lg:mx-auto lg:gap-10'>

                <div className='items-center w-full h-fit justify-center grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch'>
                    {modalities.map((m, i) => (
                        <ModalitieCard
                            title={m.title} key={i} cta={m.cta}
                            benefits={m.benefits} description={m.description}
                            link={m.link} poster={m.poster}
                        />
                    ))}
                </div>

                <article className='w-full gap-4 h-fit flex flex-col items-center justify-center lg:max-w-lg'>
                    <h1 className='font-inter text-xl text-forge-white uppercase font-bold text-center'>
                        Independente da escolha, o importante é <span className='text-iron-gold'> começar</span>.
                    </h1>
                    <h2 className='font-inter text-base text-silver text-center'>
                        Dê o primeiro passo hoje e sinta a diferença já nos primeiros treinos.
                    </h2>
                    <Link href={''} className='bg-iron-gold border-l-2 shadow-[0_1px_10px] shadow-bronze border-t-2 rounded-full text-center w-full font-semibold font-inter border-forge-white p-4 uppercase'>
                        AGENDAR AULA EXPERIMENTAL
                    </Link>
                    <p className='font-inter text-silver underline text-center'>
                        Sem experiência? Sem problema. Você começa do seu nível.
                    </p>
                </article>

            </article>
        </section>
    )
}