'use client'

import { TiArrowSortedDown } from 'react-icons/ti'

type QuestProps = {
    question: string
    response: string
    isOpen: boolean
    onToggle: () => void
}

export default function Quest({ isOpen, onToggle, question, response }: QuestProps) {
    return (
        <div className={`w-full md:w-4/6 select-none h-fit ${isOpen ? "shadow-[0_0_5px] shadow-bronze": "shadow-none"} transition-all duration-100 rounded-md`}>
            <div
                className={`flex p-3 rounded-md items-center border-[0.5px] bg-obsidian ${isOpen ? 'border-iron-gold' : 'border-silver'} shadow-xs shadow-black/15 justify-between cursor-pointer`}
                onClick={onToggle}
            >
                <p className='font-inter text-forge-white text-sm'>
                    {question}
                </p>
                <div className='w-fit h-fit'>
                    <TiArrowSortedDown
                        size={ 24}
                        className={`transition-transform duration-100 text-iron-gold ${isOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            </div>

            {isOpen && (
                <div className='p-3 border border-iron-gold border-t-0 rounded-b-md'>
                    <p className='font-inter text-silver text-sm '>{response}</p>
                </div>
            )}
        </div>
    )
}