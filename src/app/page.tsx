import Navbar from '@/app/components/navbar'
import { Card, CardBody } from '@nextui-org/react'
import Image from 'next/image'
import { PiBroom } from 'react-icons/pi'
import dynamic from 'next/dynamic'
import loveImg from '~/love.png'
import avatarImg from '~/avatar.webp'
import gradientImg from '~/gradients/blue-purple-1.svg'

const DynamicStarParticles = dynamic(() => import('./components/particles'), {
    ssr: false,
})

const DynamicTypewriter = dynamic(() => import('./typewriter'), {
    ssr: false,
})

export default function Page() {
    return (
        <main>
            <Navbar pageId='home' />

            <DynamicStarParticles />

            <section className='flex flex-col gap-2 mt-1 sm:mt-5 min-h-screen bg-[center_right_20%] bg-no-repeat z-[100]'>
                <div className='flex flex-col items-center justify-center h-full w-full mt-10'>
                    <h1 className='tracking-tight inline font-semibold text-[2.1rem] lg:text-5xl'>
                        Hi there!
                    </h1>
                    <div className='inline-block'>
                        <h1 className='tracking-tight inline font-semibold text-[2.5rem] lg:text-6xl'>
                            I&apos;m&nbsp;
                        </h1>
                        <h1 className='tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b'>
                            CelesteLove
                        </h1>
                    </div>

                    <div className='flex flex-col mt-1 md:mt-5 items-center p-8 md:w-6/12'>
                        <Card
                            isBlurred
                            className='border-none bg-default-100/50'
                            shadow='sm'
                        >
                            <CardBody className='justify-center'>
                                <div
                                    tabIndex={-1}
                                    className='inline-flex items-center justify-center gap-2 rounded-small outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 subpixel-antialiased md:antialiased'
                                >
                                    <span
                                        tabIndex={-1}
                                        className='flex relative justify-center items-center box-border overflow-hidden align-middle z-0 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 w-14 h-14 text-small bg-default text-default-foreground rounded-full'
                                    >
                                        <Image
                                            src={avatarImg}
                                            className='object-cover'
                                            alt='Celeste Peláez'
                                            placeholder='blur'
                                            aria-hidden
                                        />
                                    </span>
                                    <div className='inline-flex flex-col items-start md:ml-2'>
                                        <span className='text-inherit text-lg md:text-2xl'>
                                            Celeste Peláez
                                        </span>
                                        <span className='text-tiny text-foreground-400 md:text-lg min-w-[10rem] md:min-w-[15rem]'>
                                            <DynamicTypewriter />
                                        </span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <div className='mt-10 md:mt-20 text-lg md:text-xl flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center'>
                            <div>
                                <h1 className='inline md:block tracking-tight font-extrabold text-3xl lg:text-6xl '>
                                    A little{' '}
                                    <p className='inline-block md:block from-[#5EA2EF] to-[#0072F5] bg-clip-text text-transparent bg-gradient-to-b'>
                                        about me.
                                    </p>
                                </h1>
                                <p className='mt-5 md:mt-10'>
                                    I&apos;m{' '}
                                    <span className='bg-gradient-to-b from-[#1791c9] to-[#6fe5ee] bg-clip-text text-transparent'>
                                        Celeste Pel&aacute;ez
                                    </span>
                                    , a passionate software artisan hailing from
                                    the vibrant landscapes of{' '}
                                    <span className='bg-gradient-to-b from-[#c568b1] to-[#d317aa] bg-clip-text text-transparent'>
                                        &nbsp;Colombia.&nbsp;
                                    </span>
                                    My journey into the world of coding began at
                                    the tender age of 11, fueled by a desire to
                                    unravel the mysteries of technology. Since
                                    those early days, my love for software
                                    development has only intensified, propelling
                                    me into a realm of continuous learning and
                                    innovation.
                                </p>
                            </div>
                            <div className='hidden xl:flex mt-32'>
                                <Image
                                    src={loveImg}
                                    alt='CelesteLove logo'
                                    sizes='16w, 32w, 48w, 64w, 96w, 128w, 256w, 384w, 640w, 750w, 828w, 1080w, 1200w, 1920w, 2048w, 3840w'
                                />
                            </div>
                        </div>
                        <div className='mt-10 md:mt-20'>
                            <h1 className='inline md:block tracking-tight font-extrabold text-3xl lg:text-6xl '>
                                Professional{' '}
                                <p className='inline-block md:block from-[#6FEE8D] to-[#17c964] bg-clip-text text-transparent bg-gradient-to-b'>
                                    Skills.
                                </p>
                            </h1>
                            <div className='mt-5 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8'>
                                <div
                                    className='flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]'
                                    tabIndex={-1}
                                >
                                    <div className='flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0'>
                                        <div className='flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500'>
                                            <MagicWandIcon />
                                        </div>
                                        <p className='text-base font-semibold'>
                                            Programming Languages
                                        </p>
                                    </div>
                                    <div className='relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased'>
                                        <p className='font-normal text-base text-default-500'>
                                            I mostly code in Rust, Java,
                                            Typescript and Python, but I also
                                            know C, C++, Go, Ruby, C#, Lua, PHP,
                                            Kotlin among others.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className='flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]'
                                    tabIndex={-1}
                                >
                                    <div className='flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0'>
                                        <div className='flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500'>
                                            <LightingBoltIcon />
                                        </div>
                                        <p className='text-base font-semibold'>
                                            Team Player
                                        </p>
                                    </div>
                                    <div className='relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased'>
                                        <p className='font-normal text-base text-default-500'>
                                            I can easily integrate myself into a
                                            development team and learn quickly
                                            about a pre-existing code base.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className='flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]'
                                    tabIndex={-1}
                                >
                                    <div className='flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0'>
                                        <div className='flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500'>
                                            <PiBroom size={24} />
                                        </div>
                                        <p className='text-base font-semibold'>
                                            Clean Code
                                        </p>
                                    </div>
                                    <div className='relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased'>
                                        <p className='font-normal text-base text-default-500'>
                                            I love writing clean and readable
                                            source code, always trying to apply
                                            available design patterns. I also
                                            use the most efficient data
                                            structures to every problem to
                                            maintain the required performance
                                            profiles to every application.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className='flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]'
                                    tabIndex={-1}
                                >
                                    <div className='flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0'>
                                        <div className='flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-pink-500'>
                                            <ComputerIcon />
                                        </div>
                                        <p className='text-base font-semibold'>
                                            Code testing
                                        </p>
                                    </div>
                                    <div className='relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased'>
                                        <p className='font-normal text-base text-default-500'>
                                            I write unit tests for every
                                            component coded by me to check that
                                            it&apos;s semantically correct. I
                                            also thoroughly test the application
                                            to make sure it works correctly
                                            before submitting my changes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-screen h-[70em] absolute -top-[20%] sm:-top-[10%] -left-[15%]'>
                    <Image
                        src={gradientImg}
                        alt='Background'
                        aria-hidden
                        priority
                    />
                </div>
            </section>
        </main>
    )
}

function ComputerIcon() {
    return (
        <svg
            aria-hidden='true'
            fill='none'
            focusable='false'
            height='24'
            role='presentation'
            viewBox='0 0 24 24'
            width='24'
            className='text-pink-500'
        >
            <path
                d='M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21M10 21.47v-4.52M2 12.95h8M6.74 21.47H10'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
            ></path>
            <path
                d='M22 12.8v5.71c0 2.37-.59 2.96-2.96 2.96h-3.55c-2.37 0-2.96-.59-2.96-2.96V12.8c0-2.37.59-2.96 2.96-2.96h3.55c2.37 0 2.96.59 2.96 2.96Z'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
            ></path>
            <path
                d='M17.244 18.25h.01'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
            ></path>
        </svg>
    )
}

function LightingBoltIcon() {
    return (
        <svg
            aria-hidden='true'
            fill='none'
            focusable='false'
            height='24'
            role='presentation'
            viewBox='0 0 24 24'
            width='24'
            className='text-pink-500'
        >
            <path
                d='M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.5'
            ></path>
        </svg>
    )
}

function MagicWandIcon() {
    return (
        <svg
            aria-hidden='true'
            fill='none'
            focusable='false'
            height='24'
            role='presentation'
            viewBox='0 0 24 24'
            width='24'
            className='text-pink-500'
        >
            <path
                d='M3.5 20.5c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3ZM18.01 8.99l-3-3'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
            ></path>
            <path
                d='M8.5 2.44 10 2l-.44 1.5L10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44ZM4.5 8.44 6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8l1.5.44ZM19.5 13.44 21 13l-.44 1.5L21 16l-1.5-.44L18 16l.44-1.5L18 13l1.5.44Z'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
            ></path>
        </svg>
    )
}
