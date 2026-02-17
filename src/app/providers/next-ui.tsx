'use client'

import { HeroUIProvider as Provider } from "@heroui/react"
import { useRouter } from 'next/navigation'

export function HeroUIProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    return <Provider navigate={router.push}>{children}</Provider>
}
