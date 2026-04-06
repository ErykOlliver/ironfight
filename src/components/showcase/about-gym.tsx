'use client'

import Image from 'next/image'
import Link from 'next/link'

const photos: { src: string, alt: string }[] = [
    { src: '/gym.png', alt: 'Área de musculação' },
    { src: '/gym2.png', alt: 'Fachada Iron Fight' },
    { src: '/gym3.png', alt: 'Equipamentos' },
]

export default function AboutGym() {
    return (
        <section id='about-gym' className='w-full h-fit flex flex-col gap-4 bg-obsidian items-center justify-center lg:flex-row lg:items-center lg:gap-0 lg:py-20 lg:px-20 lg:max-7xl lg:mx-auto'>

            <div className='w-full lg:w-1/2 lg:pr-12 md:flex flex-col gap-4 hidden'>
                <div className='w-full grid grid-cols-3 h-30 gap-2 items-center justify-center lg:h-72 lg:gap-3'>
                    {photos.map((photo, i) => (
                        <div key={i} className='relative w-full h-full lg:rounded-xl lg:overflow-hidden'>
                            <Image
                                fill
                                quality={100}
                                src={photo.src}
                                alt={photo.alt}
                                className='w-full object-cover rounded-xl'
                                sizes='(min-width: 1024px) 30vw, 80vw'
                            />
                        </div>
                    ))}
                </div>

                <div className='hidden lg:block w-full h-fit'>
                    <p className='text-silver font-inter text-md text-justify'>
                        Aqui, você encontra um espaço pensado para desempenho e evolução.
                        Equipamentos adequados, ambiente organizado e treinos acontecendo todos os dias criam o cenário ideal para quem quer sair do zero ou ir para o próximo nível.
                        Mais do que um lugar para treinar, é um ambiente que mantém você consistente.
                    </p>
                </div>
            </div>

            <div className='w-full lg:w-1/2 lg:pl-12 lg:border-l lg:border-steel/30 flex flex-col gap-4'>

                <header className='w-full gap-4 h-fit items-start px-7.5 pt-10 justify-center flex flex-col lg:px-0 lg:pt-0'>
                    <h1 className='font-bebas-neue text-3xl text-forge-white text-left lg:text-4xl'>
                        treine em um espaço <span className='text-iron-gold'> preparado para sua evolução</span>.
                    </h1>
                    <h2 className='font-inter text-md text-silver text-left'>
                        Estrutura organizada, equipamentos adequados e um ambiente que motiva você a dar o seu melhor em cada treino.
                    </h2>
                    <p className='text-forge-white font-inter font-semibold text-md'>Veja onde sua evolução acontece:</p>
                </header>
                <div className='w-full grid grid-cols-3 h-30 gap-2 px-7.5 md:hidden items-center justify-center lg:h-72 lg:gap-3'>
                    {photos.map((photo, i) => (
                        <div key={i} className='relative w-full h-full lg:rounded-xl lg:overflow-hidden'>
                            <Image
                                fill
                                quality={100}
                                src={photo.src}
                                alt={photo.alt}
                                className='w-full object-cover rounded-xl'
                                sizes='(min-width: 1024px) 30vw, 80vw'
                            />
                        </div>
                    ))}
                </div>

                <div className='lg:hidden w-full px-7.5 h-fit'>
                    <p className='text-silver font-inter text-md text-justify'>
                        Aqui, você encontra um espaço pensado para desempenho e evolução.
                        Equipamentos adequados, ambiente organizado e treinos acontecendo todos os dias criam o cenário ideal para quem quer sair do zero ou ir para o próximo nível.
                        Mais do que um lugar para treinar, é um ambiente que mantém você consistente.
                    </p>
                </div>

                <article className='w-full gap-4 h-fit flex flex-col items-center justify-center px-7.5 lg:px-0'>
                    <h1 className='font-inter text-xl text-forge-white uppercase font-bold text-center lg:text-left lg:w-full'>
                        Agora falta só você <span className='text-iron-gold'> começar</span>.
                    </h1>
                    <h2 className='font-inter text-base text-silver text-center lg:text-left lg:w-full'>
                        Venha conhecer de perto e sinta a diferença no ambiente.
                    </h2>
                    <Link href={'https://wa.link/qd7uoz'} target='_blank' className='bg-iron-gold border-l-2 shadow-[0_1px_10px] shadow-bronze border-t-2 rounded-full text-center w-full font-semibold font-inter border-forge-white p-4 uppercase'>
                        AGENDAR AULA EXPERIMENTAL
                    </Link>
                    <p className='font-inter text-silver underline text-center lg:text-left lg:w-full'>
                        Sem compromisso. Só chegar e treinar.
                    </p>
                </article>

            </div>
        </section>
    )
}