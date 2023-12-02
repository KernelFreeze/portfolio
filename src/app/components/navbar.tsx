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
} from '@nextui-org/react'
import { Comfortaa } from 'next/font/google'
import { Logo } from './logo'
import { ThemeSwitcher } from './theme-switcher'
import Link from './link'
import { GlobalTheme, ThemeContext } from '../providers/theme'

const comfortaa = Comfortaa({ weight: 'variable', subsets: ['latin'] })

interface MenuItem {
    id: string
    link: string
    prefetch?: boolean
    displayName: string
}

interface NavbarProps {
    pageId: string
}

export default function Navbar({ pageId }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const { theme } = useContext(ThemeContext)

    const menuItems: MenuItem[] = [
        {
            id: 'minecraft',
            link: '/minecraft',
            prefetch: true,
            displayName: 'Minecraft',
        },
        {
            id: 'open_source',
            link: '/open_source',
            prefetch: true,
            displayName: 'Open Source',
        },
        {
            id: 'games',
            link: '/games',
            prefetch: true,
            displayName: 'Game Development',
        },
    ]

    return (
        <NextNavbar
            className={comfortaa.className}
            onMenuOpenChange={setIsMenuOpen}
            classNames={{
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
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className='sm:hidden'
                />
                <NavbarBrand>
                    <Link
                        prefetch={true}
                        className='text-foreground inline-block'
                        href='/'
                    >
                        <Logo className='mr-2 inline' />
                        <p className='font-bold text-inherit inline'>
                            CelesteLove Portfolio
                        </p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className='hidden sm:flex gap-4' justify='center'>
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
                                size='lg'
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
                    >
                        Contact
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu
                className={theme === GlobalTheme.Dark ? 'dark' : 'light'}
            >
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
