import Image from 'next/image'
import React from 'react'
import { LuMenu } from 'react-icons/lu'

export default function NavBar() {
    return (
        <>
            <div className='w-[95%] h-fit backdrop-blur-md shadow-xs shadow-black/50 bg-obsidian/55 items-center justify-between flex py-2 rounded-md border-[0.5] border-silver z-1000 px-7.5 fixed top-0 left-1/2 -translate-x-1/2 mt-2'>
                <div className='w-fit h-fit flex gap-3 items-center justify-center'>
                    <Image src={"/logo.svg"} width={35} height={35} alt='Iron Fight Icon' className='' />
                    <h1 className='font-bebas-neue text-lg text-forge-white'>Iron Fight</h1>
                </div>
                <LuMenu className='size-7 text-white'/>
            </div>
        </>
    )
}
