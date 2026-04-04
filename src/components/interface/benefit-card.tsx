import React from 'react'

type props = {
    icon: React.ReactNode,
    description: string
}

export default function BenefitCard({ icon, description }: props) {
    return (
        <article className='
            w-full items-center rounded-md shadow-[0_0_10px_5px] py-4 px-1 shadow-iron-gold/30
            justify-center bg-carbon border-l-2 border-t-2 border-l-white border-t-white
            border-b-2 border-r-2 border-b-bronze border-r-bronze h-full flex flex-col gap-1.5
            lg:transition-all lg:duration-200 lg:hover:shadow-iron-gold/50 lg:hover:-translate-y-0.5
        '>
            <div className='w-fit h-fit p-1 text-iron-gold'>
                {icon}
            </div>
            <p className='font-inter text-center text-forge-white text-md'>{description}</p>
        </article>
    )
}