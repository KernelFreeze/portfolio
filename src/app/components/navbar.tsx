'use client'

import React, { useContext } from 'react'
import {
    Navbar as NextNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    cn,
} from "@heroui/react"
import { Comfortaa } from 'next/font/google'
import { Logo } from './logo'
import Link from './link'
import { IoMdContact } from 'react-icons/io'
import { useEffect, useState } from 'react'

const comfortaa = Comfortaa({ weight: 'variable', subsets: ['latin'] })

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset)
        }

        window.addEventListener('scroll', updatePosition)

        updatePosition()

        return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    return scrollPosition
}

interface MenuItem {
    id: string
    link: string
    prefetch?: boolean
    isExternal?: boolean
    displayName: string
}

interface NavbarProps {
    pageId: string
}

export default function Navbar({ pageId }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const scrollPosition = useScrollPosition()

    const menuItems: MenuItem[] = [
        {
            id: 'minecraft',
            link: '/minecraft',
            prefetch: true,
            displayName: 'Minecraft Work',
        },
        {
            id: 'open_source',
            link: '/open_source',
            prefetch: true,
            displayName: 'Open Source Work',
        },
        {
            id: 'github',
            link: 'https://github.com/KernelFreeze',
            prefetch: false,
            displayName: 'GitHub',
            isExternal: true,
        },
    ]

    return (
        <NextNavbar
            shouldHideOnScroll
            isBlurred={false}
            className={comfortaa.className}
            onMenuOpenChange={setIsMenuOpen}
            classNames={{
                base: cn(scrollPosition > 0 ? 'shadow' : 'bg-transparent'),
                item: [
                    'flex',
                    'relative',
                    'h-full',
                    'items-center',
                    "data-[active=true]:after:content-['']",
                    'data-[active=true]:after:absolute',
                    'data-[active=true]:after:bottom-0',
                    'data-[active=true]:after:left-0',
                    'data-[active=true]:after:right-0',
                    'data-[active=true]:after:h-[2px]',
                    'data-[active=true]:after:rounded-[2px]',
                    'data-[active=true]:after:bg-primary',
                ],
            }}
        >
            <NavbarContent>
                <NavbarItem>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        className='lg:hidden'
                    />
                </NavbarItem>
                <NavbarItem>
                    <NavbarBrand>
                        <Link
                            prefetch={true}
                            className='text-foreground inline-block'
                            href='/'
                        >
                            <Logo aria-hidden className='mr-2 inline' />
                            <p className='font-bold text-inherit inline'>
                                CelesteLove Portfolio
                            </p>
                        </Link>
                    </NavbarBrand>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className='hidden lg:flex gap-4' justify='center'>
                {menuItems.map(item => {
                    const isActive = item.id === pageId
                    return (
                        <NavbarItem key={item.id} isActive={isActive}>
                            <Link
                                prefetch={item.prefetch}
                                color={isActive ? 'primary' : 'foreground'}
                                className='w-full'
                                aria-current={isActive}
                                href={item.link}
                                showAnchorIcon={item.isExternal}
                                isExternal={item.isExternal}
                            >
                                {item.displayName}
                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>
            <NavbarContent justify='end'>
                <NavbarItem>
                    <Button
                        as={Link}
                        prefetch={true}
                        className='hidden sm:flex text-secondary'
                        href='/contact'
                        variant='flat'
                        startContent={<IoMdContact size={24} />}
                    >
                        Contact
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map(item => {
                    const isActive = item.id === pageId
                    return (
                        <NavbarMenuItem key={item.id} isActive={isActive}>
                            <Link
                                prefetch={item.prefetch}
                                color={isActive ? 'primary' : 'foreground'}
                                className='w-full'
                                href={item.link}
                                size='lg'
                                aria-current={isActive}
                                showAnchorIcon={item.isExternal}
                                isExternal={item.isExternal}
                            >
                                {item.displayName}
                            </Link>
                        </NavbarMenuItem>
                    )
                })}
            </NavbarMenu>
        </NextNavbar>
    )
}
