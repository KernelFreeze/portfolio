import './globals.css'

import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import { NextUIProvider } from './providers/next-ui'
import { PropsWithChildren } from 'react'

const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
    title: "CelesteLove's Portfolio",
    applicationName: 'CelesteLove',
    authors: [{ name: 'Celeste Peláez', url: 'https://celestelove.dev' }],
    generator: 'CelesteServer',
    keywords: ['KernelFreeze', 'KernelUwU', 'CelesteLove', 'Portfolio'],
    description: 'All the programming work done by CelesteLove.',
}

export default function RootLayout({ children }: PropsWithChildren<{}>) {
    return (
        <html lang='en'>
            <body className={ubuntu.className}>
                <NextUIProvider>{children}</NextUIProvider>
            </body>
        </html>
    )
}
