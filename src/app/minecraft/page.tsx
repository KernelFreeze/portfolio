import Navbar from '@/app/components/navbar'
import { ThemeRoot } from '@/app/components/theme'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import permadeathImg from '~/minecraft/permadeath.webp'
import calvalandImg from '~/minecraft/calvaland.jpg'
import tortillaLandImg from '~/minecraft/tortillaland.jpg'
import elitecraftImg from '~/minecraft/elitecraft.jpg'
import squidcraftImg from '~/minecraft/squidcraft.jpg'
import sawImg from '~/minecraft/saw.jpg'
import dedsafioImg from '~/minecraft/dedsafio.jpg'
import laVeladaImg from '~/minecraft/lavelada.jpg'
import elHoyoImg from '~/minecraft/elhoyo.jpg'
import eddtImg from '~/minecraft/eddt.jpg'
import uhcImg from '~/minecraft/uhc.webp'
import backroomsImg from '~/minecraft/backrooms.jpg'
import hormigeoImg from '~/minecraft/hormigeo.jpg'
import launcherImg from '~/minecraft/launcher.png'
import { PropsWithChildren, ReactNode } from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

const DynamicStarParticles = dynamic(
    () => import('@/app/components/particles'),
    {
        ssr: false,
    }
)

export default function Page() {
    return (
        <ThemeRoot>
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
                            ElRichMC and developed by CelesteLove, based on the
                            Mindcrack UHC series. It involves teams or
                            individual players competing in a large map without
                            natural health regeneration. Unique mechanics have
                            been introduced over time, such as the ability to
                            revive dead teammates, or a skin changing system. I
                            was tasked with developing the plugin used in the
                            events that allowed the required custom mechanics.
                        </ProjectCard>
                        <ProjectCard title='Elitecraft' img={elitecraftImg}>
                            Elitecraft was a Minecraft survival SMP server. On
                            it, I worked on developing the infrastructure, but
                            also optimization and performance mods to allow
                            dozens of players to play without lag.
                        </ProjectCard>
                        <ProjectCard title='Permadeath' img={permadeathImg}>
                            Permadeath was an original event developed and
                            hosted by me. The event took place in a normal world
                            of survival without limits in Minecraft version
                            1.15.2. In this event the difficulty is set to
                            Hardcore Difficulty, that is, your death inside the
                            server would be permanent and you would be
                            permanently banned. The difference with other events
                            is that it has a custom gameplay, items, abilities,
                            bosses, and mobs that make the game harder. Each
                            week a new change was implemented in the game until
                            all players died.
                        </ProjectCard>
                        <ProjectCard title='Calvaland' img={calvalandImg}>
                            Calvaland was an SMP server created by TheGrefg in
                            which several Spanish-speaking content creators
                            participated. It contained different mods made by me
                            programmed using FabricMC.
                        </ProjectCard>
                        <ProjectCard title='TortillaLand' img={tortillaLandImg}>
                            TortillaLand was a multiplayer survival series
                            created by AuronPlay in collaboration with Heberon.
                            In it, I had the opportunity to program different
                            mods and high quality content. For example, I
                            developed a mod that allowed to have realistic
                            &ldquo;Samsung&rdquo; phones in the game.
                        </ProjectCard>
                        <ProjectCard
                            title='SquidCraft Games 1 & 2'
                            img={squidcraftImg}
                        >
                            Squidcraft Games is a Minecraft tournament for
                            streamers, which was held in a custom mode inspired
                            by the popular TV series &ldquo;The Squid
                            Game&rdquo;. There were 150 participants who are the
                            platform&apos;s most famous Spanish-speaking
                            creators (including Ibai, Rubius and Auronplay).
                            They competed in various mini-games over five days
                            and were eliminated from the event one by one. In
                            both editions of the project I programmed the mods
                            that add content to the game such as blocks,
                            entities, items, etc, in addition to gameplay mods
                            and mechanics specific to that project. I was also
                            in charge of maintaining the infrastructure and
                            servers so that 200 players could play without lag.
                        </ProjectCard>
                        <ProjectCard title='Saw Minecraft Games' img={sawImg}>
                            Saw Minecraft Games was an adaptation of the popular
                            &ldquo;Saw&rdquo; movie series to Minecraft as a
                            multiplayer story in which content creators could
                            compete to survive the challenge. In this project, I
                            programmed the &ldquo;core&rdquo; mods, as well as
                            multiple mechanics and gameplay with realistic
                            physics such as ropes dragging the player. I was
                            also in charge of maintaining the infrastructure and
                            servers.
                        </ProjectCard>
                        <ProjectCard title='Dedsafio 2' img={dedsafioImg}>
                            Dedsafio was an original Minecraft series, created
                            by ElDed, and inspired by the success of Permadeath
                            by ElRichMC and CelesteLove. It was a survival SMP
                            server in which the difficulty increased daily with
                            challenges created by a magic roulette. Players who
                            died had the chance to be revived by teammates.
                            <br />I had the opportunity to participate in the
                            second edition of this series programming several
                            mechanics and systems in specialized mods, in
                            addition to taking care of the infrastructure and
                            maintenance of the server.
                        </ProjectCard>
                        <ProjectCard
                            title='La Velada del Año'
                            img={laVeladaImg}
                        >
                            &ldquo;La Velada del Año&rdquo; (&ldquo;The Evening
                            of the Year&rdquo; in english) was an event
                            organized by Ibai for TortillaLand. It consisted of
                            a Minecraft replica of the event with the same name
                            in which different &ldquo;fighters&rdquo;
                            participate in a boxing ring. This event used
                            multiple mods that I developed that added all the
                            in-game content.
                        </ProjectCard>
                        <ProjectCard title='El Hoyo' img={elHoyoImg}>
                            El Hoyo was a Minecraft event inspired by the
                            Spanish movie &ldquo;The Platform (2019)&rdquo;. The
                            event is set in a large, tower-style &ldquo;Vertical
                            Self-Management Center.&rdquo; Its residents are fed
                            via a platform which, initially filled with food at
                            the top floor, gradually descends through the
                            tower&apos;s levels, stopping for a fixed amount of
                            time on each. In this event I was in charge of
                            developing the &ldquo;core&rdquo; mods that allowed
                            the addition of items, entities, blocks, etc.
                        </ProjectCard>
                        <ProjectCard title='Hormigeo' img={hormigeoImg}>
                            Hormigeo was a competitive Minecraft event in which
                            different teams formed groups of &ldquo;Ants&rdquo;
                            and tried to be the winners. In this event I was in
                            charge of developing basic mods.
                        </ProjectCard>
                        <ProjectCard title='The Backrooms' img={backroomsImg}>
                            The Backrooms is a Minecraft event based on a
                            fictional concept originating from a creepypasta,
                            which depicts usually busy locations as unnaturally
                            empty. The first level of The Backrooms is a maze of
                            empty office rooms filled with monsters. In this
                            event I was tasked with developing the
                            infrastructure mods that add items, entities, blocks
                            and other core functionality.
                        </ProjectCard>
                        <ProjectCard title='El Dios del todo' img={eddtImg}>
                            &ldquo;El Dios del todo&rdquo; (&ldquo;The God of
                            Everything&rdquo;) is a Minecraft series created by
                            Juan Guarnizo that he starred in. It was an
                            individual project, not a collaborative series with
                            other streamers. Based in the lore of
                            &ldquo;TortillaLand&rdquo; it was a custom adventure
                            developed by us. In it, I programmed important base
                            mods that were used throughout the event.
                        </ProjectCard>
                        <ProjectCard title='Eufonia Launcher' img={launcherImg}>
                            Eufonia Launcher is a Launcher that allows you to
                            access custom Minecraft instances, and automatically
                            manages the download of mods, assets, videos, etc.
                            It also has systems that allow you to upload mods
                            with a simple and intuitive interface. It uses an
                            efficient download system that allows fast and easy
                            downloads.
                        </ProjectCard>
                    </div>
                </div>
            </section>
            <div className='w-screen h-[70em] absolute -bottom-[20%] sm:-bottom-[10%] -right-[15%]'>
                <Image
                    fill
                    src='/gradients/blue-purple-3.svg'
                    alt='Background'
                    aria-hidden
                    priority
                />
            </div>

            <div className='w-screen h-[70em] absolute top-[90em] -left-[15%]'>
                <Image
                    fill
                    src='/gradients/blue-purple-3.svg'
                    alt='Background'
                    aria-hidden
                    priority
                />
            </div>

            <div className='w-screen h-[70em] absolute top-[250em] -right-[15%]'>
                <Image
                    fill
                    src='/gradients/blue-purple-3.svg'
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
                <Image className='rounded-xl' alt='Card background' src={img} />
                <div>{children}</div>
            </CardBody>
        </Card>
    )
}
