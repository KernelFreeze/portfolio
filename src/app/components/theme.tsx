'use server'

import { cookies } from 'next/headers'
import { GlobalTheme, ThemeProvider } from '@/app/providers/theme'
import { PropsWithChildren } from 'react'

export function ThemeRoot({ children }: PropsWithChildren<{}>) {
    const cookieStore = cookies()
    const theme = cookieStore.get('theme')?.value as GlobalTheme | undefined

    return <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
}
