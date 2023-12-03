import Navbar from '@/app/components/navbar'
import { ThemeRoot } from '@/app/components/theme'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { PropsWithChildren, ReactNode } from 'react'
import kernelImg from '~/opensource/kernel.png'
import litecraftImg from '~/opensource/litecraft.png'
import pingImg from '~/opensource/ping.png'
import bedrockProxyImg from '~/opensource/bedrock-proxy.png'
import msaAuthImg from '~/opensource/msa-auth.png'
import { Link } from '@nextui-org/react'

const DynamicStarParticles = dynamic(
    () => import('@/app/components/particles'),
    {
        ssr: false,
    }
)

export default function Page() {
    return (
        <ThemeRoot>
            <Navbar pageId='open_source' />
            <DynamicStarParticles />

            <section className='flex flex-col gap-2 mt-1 sm:mt-5 min-h-screen bg-[center_right_20%] bg-no-repeat z-[100]'>
                <div className='flex flex-col items-center justify-center h-full w-full mt-10'>
                    <h1 className='tracking-tight inline font-semibold text-[2.5rem] lg:text-6xl'>
                        Open Source
                    </h1>
                    <h1 className='tracking-tight inline font-semibold text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]'>
                        projects that I&apos;ve made
                    </h1>
                    <div className='flex flex-col mt-1 md:mt-5 items-center p-8 md:w-6/12'>
                        <ProjectCard title='WebSocketFabric' img={pingImg}>
                            <Link
                                isExternal
                                href='https://github.com/KernelFreeze/WebSocketFabric'
                                showAnchorIcon
                            >
                                WebSocketFabric
                            </Link>{' '}
                            is an open source project that allows using
                            WebSocket as the Minecraft&apos;s transport layer.
                            The advantage of this approach is that you can use
                            web protection services like Cloudflare to protect
                            your server from DDoS attacks while reducing the
                            round-trip-time when sending data packets to the
                            server.
                        </ProjectCard>
                        <ProjectCard
                            title='Bedrock Proxy'
                            img={bedrockProxyImg}
                        >
                            <Link
                                isExternal
                                href='https://github.com/KernelFreeze/BedrockProxy'
                                showAnchorIcon
                            >
                                BedrockProxy
                            </Link>{' '}
                            adds support for the Minecraft Bedrock protocol to
                            Minecraft Java edition servers as well as allowing
                            you to use Xbox Live authentication.
                        </ProjectCard>
                        <ProjectCard
                            title='Minecraft MSA Auth for Rust'
                            img={msaAuthImg}
                        >
                            <Link
                                isExternal
                                href='https://github.com/KernelFreeze/minecraft-msa-auth'
                                showAnchorIcon
                            >
                                Minecraft MSA Auth
                            </Link>{' '}
                            allows you to authenticate into Minecraft online
                            services using a Microsoft Oauth2 token. This is
                            useful for writing custom Minecraft launchers.
                        </ProjectCard>
                        <ProjectCard title='Etheryal Kernel' img={kernelImg}>
                            <Link
                                isExternal
                                href='https://github.com/KernelFreeze/etheryal-kernel'
                                showAnchorIcon
                            >
                                etheryal kernel
                            </Link>{' '}
                            is an open source capability-based operating system
                            <Link
                                href='https://en.wikipedia.org/wiki/Kernel_(operating_system)'
                                isExternal
                                showAnchorIcon
                            >
                                &nbsp;kernel&nbsp;
                            </Link>
                            written in the Rust programming language. The kernel
                            allows implementing a language-based operating
                            system, unlike most historic kernels, etheryal
                            kernel components execute in the same address space
                            (process), which contains software-isolated
                            processes (SIPs). Each SIP has its own data and code
                            layout, and is independent from other SIPs. These
                            SIPs behave like normal processes, but avoid the
                            cost of task-switches. The kernel uses a modular
                            design based on Webassembly System Interface (WASI),
                            containerizing drivers and user-space applications
                            in a safe lightweight sandbox (WASM). Just like{' '}
                            <Link
                                href='https://en.wikipedia.org/wiki/Singularity_(operating_system)'
                                isExternal
                                showAnchorIcon
                            >
                                Singularity
                            </Link>
                            , etheryal internal security uses type safety
                            instead of hardware memory protection.
                        </ProjectCard>
                        <ProjectCard title='Litecraft' img={litecraftImg}>
                            <Link
                                isExternal
                                href='https://github.com/KernelFreeze/Litecraft'
                                showAnchorIcon
                            >
                                Litecraft
                            </Link>{' '}
                            was a clean-room implementation of the Minecraft
                            client written in the Rust programming language. I
                            started programming when I was 14 years old, and a
                            few years later other programmers joined me in its
                            development. This project taught me a lot about
                            software development and good programming practices.
                            I never finished it but it was a great learning
                            experience for me and the contributors who helped
                            me.
                            <br />
                            At that time, version 1.0 of Rust had not yet been
                            released, so it was interesting to see the
                            development of this programming language.
                        </ProjectCard>
                    </div>
                </div>
            </section>
            <div className='w-screen h-[70em] absolute -top-[20%] sm:-top-[10%] -left-[15%]'>
                <Image
                    fill
                    src='/gradients/looper-pattern.svg'
                    alt='Background'
                    aria-hidden
                    priority
                />
            </div>
        </ThemeRoot>
    )
}

interface ProjectCardProps {
    title: string | ReactNode
    img: string | StaticImport
}

function ProjectCard({
    children,
    title,
    img,
}: PropsWithChildren<ProjectCardProps>) {
    return (
        <Card className='mt-10 py-4 w-full'>
            <CardHeader className='pb-6 px-4 flex-col items-start'>
                <h4 className='font-bold text-3xl text-center w-full'>
                    {title}
                </h4>
            </CardHeader>
            <Divider />
            <CardBody className='overflow-visible py-8 w-full grid grid-cols-1 2xl:grid-cols-2 gap-10'>
                <Image
                    className='rounded-xl'
                    alt='Card background'
                    src={img}
                    placeholder='blur'
                />
                <div>{children}</div>
            </CardBody>
        </Card>
    )
}
