import Navbar from '@/app/components/navbar'
import { Card, CardBody } from '@nextui-org/react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import gradientImg from '~/gradients/blue-purple-1.svg'
import avatarImg from '~/avatar.webp'

const DynamicStarParticles = dynamic(
    () => import('@/app/components/particles'),
    {
        ssr: false,
    }
)

export default function Page() {
    return (
        <main>
            <Navbar pageId='contact' />

            <DynamicStarParticles />

            <section className='flex flex-col gap-2 mt-1 sm:mt-5 min-h-screen bg-[center_right_20%] bg-no-repeat z-[100]'>
                <div className='flex flex-col items-center justify-center h-full w-full mt-10'>
                    <h1 className='tracking-tight inline font-semibold text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]'>
                        Contact me
                    </h1>

                    <Card
                        isBlurred
                        className='mt-10 lg:mt-16 border-none bg-default-100/50'
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
                                    />
                                </span>

                                <div className='inline-flex flex-col items-start md:ml-2'>
                                    <span className='text-inherit text-lg md:text-2xl'>
                                        Email
                                    </span>
                                    <span className='text-tiny text-foreground-400 md:text-lg min-w-[10rem] md:min-w-[15rem]'>
                                        celeste@etheryal.net
                                    </span>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </section>
            <div className='w-screen h-[70em] absolute -top-[20%] sm:-top-[10%] -left-[15%] -z-[1]'>
                <Image
                    src={gradientImg}
                    alt='Background'
                    aria-hidden
                    priority
                />
            </div>
        </main>
    )
}
