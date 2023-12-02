'use client'

import { NextUIProvider as Provider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export function NextUIProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    return <Provider navigate={router.push}>{children}</Provider>
}
