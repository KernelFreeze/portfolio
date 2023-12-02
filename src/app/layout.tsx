import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
    title: "CelesteLove's Portfolio",
    description:
        'All the programming work done by CelesteLove / KernelFreeze / KernelUwU.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className={ubuntu.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
