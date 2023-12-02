import React from 'react'
import {
    Navbar as NextNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from '@nextui-org/react'
import { Comfortaa } from 'next/font/google'
import { Logo } from './logo'
import { ThemeSwitcher } from './theme-switcher'

const comfortaa = Comfortaa({ weight: 'variable', subsets: ['latin'] })

export default function Navbar() {
    return (
        <NextNavbar className={comfortaa.className}>
            <NavbarBrand>
                <Link color='foreground' href='/'>
                    <Logo className='mr-2' />
                    <p className='font-bold text-inherit'>
                        CelesteLove Portfolio
                    </p>
                </Link>
            </NavbarBrand>
            <NavbarContent className='hidden sm:flex gap-4' justify='center'>
                <NavbarItem>
                    <Link color='foreground' href='/minecraft'>
                        Minecraft
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current='page' href='/opensource'>
                        Open Source
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color='foreground' href='/games'>
                        Game Development
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>
                <NavbarItem>
                    <Button
                        as={Link}
                        color='secondary'
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
        </NextNavbar>
    )
}
