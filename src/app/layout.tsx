import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import { NextUIProvider } from './providers/next-ui'
import { cookies } from 'next/headers'
import { PropsWithChildren } from 'react'
import { GlobalTheme, ThemeProvider } from './providers/theme'

export const runtime = 'edge'

const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
    title: "CelesteLove's Portfolio",
    description:
        'All the programming work done by CelesteLove / KernelFreeze / KernelUwU.',
}

export default function RootLayout({ children }: PropsWithChildren<{}>) {
    const cookieStore = cookies()
    const theme = cookieStore.get('theme')?.value as GlobalTheme | undefined

    return (
        <html lang='en'>
            <body className={ubuntu.className}>
                <NextUIProvider>
                    <ThemeProvider initialTheme={theme}>
                        {children}
                    </ThemeProvider>
                </NextUIProvider>
            </body>
        </html>
    )
}
