import Navbar from '@/app/components/navbar'
import { ThemeRoot } from '@/app/components/theme'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const DynamicStarParticles = dynamic(
    () => import('@/app/components/particles'),
    {
        ssr: false,
    }
)

export default function Page() {
    return (
        <ThemeRoot>
            <Navbar pageId='games' />
            <DynamicStarParticles />

            <section className='flex flex-col gap-2 mt-1 sm:mt-5 min-h-screen bg-[center_right_20%] bg-no-repeat z-[100]'>
                <div className='flex flex-col items-center justify-center h-full w-full mt-10'>
                    <h1 className='tracking-tight inline font-semibold text-[2.5rem] lg:text-6xl'>
                        Minecraft projects
                    </h1>
                    <h1 className='tracking-tight inline font-semibold text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]'>
                        I&apos;ve worked on
                    </h1>
                </div>
                <div className='w-screen h-[70em] absolute -top-[20%] sm:-top-[10%] -left-[15%]'>
                    <Image
                        fill
                        src='/gradients/blue-purple-2.svg'
                        alt='Background'
                        aria-hidden
                        priority
                    />
                </div>
            </section>
        </ThemeRoot>
    )
}
