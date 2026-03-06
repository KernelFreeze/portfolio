import './globals.css'

import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import { HeroUIProvider } from './providers/next-ui'
import { PropsWithChildren } from 'react'
import { cn } from "@heroui/react"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
    title: "CelesteLove's Portfolio",
    applicationName: 'CelesteLove',
    authors: [{ name: 'Celeste Peláez', url: 'https://celestelove.dev' }],
    generator: 'CelesteServer',
    keywords: ['KernelFreeze', 'KernelUwU', 'CelesteLove', 'Portfolio'],
    description: cn(
        "Hey, I'm CelesteLove! I'm a developer who loves building cool things",
        "for the web. Check out my portfolio to see what I've been working on —",
        "from websites to apps, I enjoy blending creativity with code and trying",
        "out new tech along the way."
    ),
}

export default function RootLayout({ children }: PropsWithChildren<{}>) {
    return (
        <html className='dark' lang='en'>
            <body className={cn('overflow-x-hidden', ubuntu.className)}>
                <HeroUIProvider>{children}</HeroUIProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
