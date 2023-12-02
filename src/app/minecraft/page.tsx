import Navbar from '@/app/components/navbar'
import { ThemeProvider } from '@/app/providers/theme'

export const runtime = 'edge'

export default function Page() {
    return (
        <ThemeProvider>
            <main>
                <Navbar pageId='minecraft' />

                <div className='flex min-h-screen flex-col items-center justify-between p-24'>
                    <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
                        <p>
                            Get started by editing&nbsp;
                            <code className='font-mono font-bold'>
                                src/app/page.tsx
                            </code>
                        </p>
                    </div>
                </div>
            </main>
        </ThemeProvider>
    )
}
