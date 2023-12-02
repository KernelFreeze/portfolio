'use client'

import { setCookie } from 'nookies'
import {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useEffect,
    useState,
} from 'react'

export enum GlobalTheme {
    Dark = 'dark',
    Light = 'light',
}

export interface ThemeContextData {
    theme?: GlobalTheme
    setTheme: Dispatch<SetStateAction<GlobalTheme | undefined>>
}

function DarkTheme({ children }: PropsWithChildren<{}>) {
    return (
        <main className='dark bg-[#09060c] text-foreground min-h-screen'>
            {children}
        </main>
    )
}

function LightTheme({ children }: PropsWithChildren<{}>) {
    return (
        <main className='light bg-background text-foreground min-h-screen'>
            {children}
        </main>
    )
}

// @ts-expect-error
export const ThemeContext = createContext<ThemeContextData>(null)

interface ThemeProviderProps {
    initialTheme?: GlobalTheme
}

export function ThemeProvider({
    children,
    initialTheme,
}: PropsWithChildren<ThemeProviderProps>) {
    const [theme, setTheme] = useState(initialTheme)

    useEffect(() => {
        if (!theme && prefersDarkTheme()) {
            setCookie(null, 'theme', 'dark', {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
        }
    }, [theme])

    useEffect(() => {
        if (!theme) {
            return
        }
        setCookie(null, 'theme', theme as string, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
            {theme && theme === GlobalTheme.Light ? (
                <LightTheme>{children}</LightTheme>
            ) : (
                <DarkTheme>{children}</DarkTheme>
            )}
        </ThemeContext.Provider>
    )
}

function prefersDarkTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
}
