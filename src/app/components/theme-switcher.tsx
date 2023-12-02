'use client'

import { GlobalTheme, ThemeContext } from '@/app/providers/theme'
import { useContext } from 'react'
import { IoMoonOutline } from 'react-icons/io5'
import { MdLightMode } from 'react-icons/md'

export function ThemeSwitcher() {
    const { theme, setTheme } = useContext(ThemeContext)

    const switchToDark = () => setTheme(GlobalTheme.Dark)
    const switchToLight = () => setTheme(GlobalTheme.Light)

    switch (theme) {
        case GlobalTheme.Dark: {
            return (
                <div
                    onClick={switchToLight}
                    className='cursor-pointer text-white'
                    role='button'
                    aria-label='Toggle Light Mode'
                    tabIndex={0}
                >
                    <MdLightMode aria-hidden size={20} />
                </div>
            )
        }
        default: {
            return (
                <div
                    onClick={switchToDark}
                    className='cursor-pointer'
                    role='button'
                    aria-label='Toggle Dark Mode'
                    tabIndex={0}
                >
                    <IoMoonOutline aria-hidden size={20} />
                </div>
            )
        }
    }
}
