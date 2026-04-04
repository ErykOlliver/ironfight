import React from 'react'
import { ImQuotesRight } from 'react-icons/im'

type props = {
    name: string,
    testimonial: string
}

export default function TestimonalsCard({ name, testimonial }: props) {
    return (
        <article className='bg-obsidian border-2 px-4 py-5 shadow-bronze/45 shadow-[0_0_4px] gap-4 rounded-md border-graphite  flex flex-col items-start justify-center'>
            <div className='w-fit h-fit p-1 flex items-center justify-center'>
            <ImQuotesRight className='text-graphite size-10' />
            </div>
            <div className='flex w-full flex-col gap-2 h-fit'>
                <h1 className='italic text-md font-inter text-forge-white'>"{testimonial}"</h1>
                <h2 className='text-silver font-inter text-md'>— @{name}</h2>
            </div>
        </article>
    )
}
