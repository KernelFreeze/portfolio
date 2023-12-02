import './globals.css'

import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import { NextUIProvider } from './providers/next-ui'
import { PropsWithChildren } from 'react'
import { cn } from '@nextui-org/react'

const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
    title: "CelesteLove's Portfolio",
    applicationName: 'CelesteLove',
    authors: [{ name: 'Celeste Peláez', url: 'https://celestelove.dev' }],
    generator: 'CelesteServer',
    keywords: ['KernelFreeze', 'KernelUwU', 'CelesteLove', 'Portfolio'],
    description: cn(
        'Explore the digital realm of CelesteLove, a skilled developer with',
        'a passion for crafting innovative and elegant solutions. Dive into a',
        'showcase of her diverse portfolio, featuring web development projects',
        'that blend creativity, functionality, and cutting-edge technology.',
        "From responsive websites to dynamic applications, CelesteLove's portfolio",
        'reflects a commitment to excellence and a love for pushing the boundaries',
        'of digital possibilities. Discover the artistry in code and the transformative',
        "power of technology at CelesteLove's portfolio website."
    ),
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
