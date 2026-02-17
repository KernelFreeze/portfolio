"use client"
import Navbar from '@/app/components/navbar'
import { Card, CardBody, CardHeader, Divider } from "@heroui/react"
import { PropsWithChildren, ReactNode } from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import permadeathImg from '~/minecraft/permadeath.webp'
import calvalandImg from '~/minecraft/calvaland.jpg'
import tortillaLandImg from '~/minecraft/tortillaland.jpg'
import elitecraftImg from '~/minecraft/elitecraft.jpg'
import squidcraftImg from '~/minecraft/squidcraft.jpg'
import sawImg from '~/minecraft/saw.jpg'
import dedsafioImg from '~/minecraft/dedsafio.jpg'
import laVeladaImg from '~/minecraft/lavelada.webp'
import elHoyoImg from '~/minecraft/elhoyo.jpg'
import eddtImg from '~/minecraft/eddt.jpg'
import uhcImg from '~/minecraft/uhc.webp'
import backroomsImg from '~/minecraft/backrooms.jpg'
import hormigeoImg from '~/minecraft/hormigeo.jpg'
import launcherImg from '~/minecraft/launcher.png'
import gradient1Img from '~/gradients/blue-purple-1.svg'
import gradient2Img from '~/gradients/blue-purple-2.svg'
import gradient3Img from '~/gradients/blue-purple-3.svg'

const DynamicStarParticles = dynamic(
    () => import('@/app/components/particles'),
    {
        ssr: false,
    }
)

export default function Page() {
    return (
        <main>
            <Navbar pageId='minecraft' />
            <DynamicStarParticles />

            <section className='flex flex-col gap-2 mt-1 sm:mt-5 min-h-screen bg-[center_right_20%] bg-no-repeat z-[100]'>
                <div className='flex flex-col items-center justify-center h-full w-full mt-10'>
                    <h1 className='tracking-tight inline font-semibold text-[2.5rem] lg:text-6xl'>
                        Minecraft projects
                    </h1>
                    <h1 className='tracking-tight inline font-semibold text-[2.1rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]'>
                        I&apos;ve worked on
                    </h1>

                    <div className='flex flex-col mt-1 md:mt-5 items-center p-8 md:w-6/12'>
                        <ProjectCard title='UHC España' img={uhcImg}>
                            UHC España is a Minecraft event series created by
                            ElRichMC, inspired by the Mindcrack UHC series.
                            Teams or individual players compete across a large
                            map without natural health regeneration. Over time,
                            we introduced unique mechanics like teammate
                            revival and a skin changing system. I developed the
                            plugin that powered all of these custom mechanics.
                        </ProjectCard>
                        <ProjectCard title='Elitecraft' img={elitecraftImg}>
                            Elitecraft was a Minecraft survival SMP server
                            where I handled both the infrastructure and the
                            development of optimization and performance mods,
                            keeping the experience smooth for dozens of
                            simultaneous players.
                        </ProjectCard>
                        <ProjectCard title='Permadeath' img={permadeathImg}>
                            Permadeath was an original event that I developed
                            and hosted. Set in Minecraft 1.15.2 on Hardcore
                            difficulty, dying meant a permanent ban from the
                            server. What set it apart was the fully custom
                            gameplay: unique items, abilities, bosses, and mobs
                            that made survival progressively harder. Every week
                            I introduced new challenges until every last player
                            had fallen.
                        </ProjectCard>
                        <ProjectCard title='Calvaland' img={calvalandImg}>
                            Calvaland was an SMP server created by TheGrefg,
                            featuring several Spanish-speaking content
                            creators. I developed the custom mods for the
                            server using FabricMC.
                        </ProjectCard>
                        <ProjectCard title='TortillaLand' img={tortillaLandImg}>
                            TortillaLand was a multiplayer survival series
                            created by AuronPlay in collaboration with Heberon.
                            I programmed several mods and high-quality content
                            for the series, including a mod that added fully
                            functional, realistic &ldquo;Samsung&rdquo; phones
                            to the game.
                        </ProjectCard>
                        <ProjectCard
                            title='SquidCraft Games 1 & 2'
                            img={squidcraftImg}
                        >
                            Squidcraft Games is a Minecraft tournament for
                            streamers inspired by the TV series &ldquo;The
                            Squid Game&rdquo;. Over five days, 150 of the
                            biggest Spanish-speaking creators (including Ibai,
                            Rubius, and Auronplay) competed in mini-games and
                            were eliminated one by one. Across both editions, I
                            programmed the content mods (blocks, entities,
                            items) as well as the gameplay mechanics, and
                            maintained the infrastructure to keep 200
                            concurrent players lag-free.
                        </ProjectCard>
                        <ProjectCard title='Saw Minecraft Games' img={sawImg}>
                            Saw Minecraft Games adapted the &ldquo;Saw&rdquo;
                            movie franchise into a multiplayer Minecraft
                            experience where content creators competed to
                            survive deadly challenges. I built the core mods
                            along with gameplay mechanics featuring realistic
                            physics, such as ropes that physically drag
                            players. I also managed the infrastructure and
                            servers.
                        </ProjectCard>
                        <ProjectCard title='Dedsafio 2' img={dedsafioImg}>
                            Dedsafio was an original Minecraft series created
                            by ElDed, inspired by the success of Permadeath by
                            ElRichMC and CelesteLove. It was a survival SMP
                            where difficulty escalated daily through challenges
                            spun by a magic roulette, and fallen players could
                            be revived by their teammates.
                            <br />For the second edition, I programmed several
                            mechanics and systems as specialized mods, and
                            handled the server infrastructure and maintenance.
                        </ProjectCard>
                        <ProjectCard
                            title='La Velada del Año'
                            img={laVeladaImg}
                        >
                            &ldquo;La Velada del Año&rdquo; (&ldquo;The
                            Evening of the Year&rdquo;) was an event organized
                            by Ibai for TortillaLand. It recreated the
                            real-life boxing event of the same name inside
                            Minecraft, complete with a boxing ring and
                            fighters. I developed the mods that brought all of
                            the in-game content to life.
                        </ProjectCard>
                        <ProjectCard title='El Hoyo' img={elHoyoImg}>
                            El Hoyo was a Minecraft event inspired by the
                            Spanish film &ldquo;The Platform (2019)&rdquo;. Set
                            inside a towering &ldquo;Vertical Self-Management
                            Center,&rdquo; a food-laden platform descends
                            floor by floor, pausing briefly at each level
                            before moving on. I developed the core mods that
                            powered the custom items, entities, and blocks for
                            the event.
                        </ProjectCard>
                        <ProjectCard title='Hormigeo' img={hormigeoImg}>
                            Hormigeo was a competitive Minecraft event where
                            teams of &ldquo;Ants&rdquo; faced off to claim
                            victory. I developed the foundational mods for the
                            event.
                        </ProjectCard>
                        <ProjectCard title='The Backrooms' img={backroomsImg}>
                            The Backrooms is a Minecraft event based on the
                            creepypasta of the same name, where familiar places
                            feel unsettlingly empty. The first level is a maze
                            of abandoned office rooms crawling with monsters. I
                            developed the infrastructure mods that added the
                            custom items, entities, blocks, and other core
                            functionality.
                        </ProjectCard>
                        <ProjectCard title='El Dios del todo' img={eddtImg}>
                            &ldquo;El Dios del todo&rdquo; (&ldquo;The God of
                            Everything&rdquo;) is a Minecraft series created by
                            and starring Juan Guarnizo. Unlike collaborative
                            SMPs, this was a solo adventure rooted in the lore
                            of &ldquo;TortillaLand.&rdquo; I programmed the
                            core mods that powered the experience throughout.
                        </ProjectCard>
                        <ProjectCard title='Eufonia Launcher' img={launcherImg}>
                            Eufonia Launcher is a custom Minecraft launcher
                            that manages instances, mods, assets, and other
                            resources automatically. It features an intuitive
                            interface for uploading mods and an efficient
                            download system designed for speed and reliability.
                        </ProjectCard>
                    </div>
                </div>
            </section>
            <div className='w-screen h-[70em] absolute -bottom-[20%] sm:-bottom-[10%] -right-[15%] -z-[1]'>
                <Image
                    src={gradient3Img}
                    alt='Background'
                    aria-hidden
                    priority
                />
            </div>

            <div className='w-screen h-[70em] absolute top-[90em] -left-[15%] -z-[1]'>
                <Image
                    src={gradient2Img}
                    alt='Background'
                    aria-hidden
                    priority
                />
            </div>

            <div className='w-screen h-[70em] absolute top-[250em] -right-[15%] -z-[1]'>
                <Image
                    src={gradient1Img}
                    alt='Background'
                    aria-hidden
                    priority
                />
            </div>
        </main>
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
                <h2 className='font-bold text-3xl text-center w-full'>
                    {title}
                </h2>
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
