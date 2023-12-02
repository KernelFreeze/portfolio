import Navbar from '@/app/components/navbar'
import { ThemeRoot } from '@/app/components/theme'
import dynamic from 'next/dynamic'

const DynamicStarParticles = dynamic(
    () => import('@/app/components/particles'),
    {
        ssr: false,
    }
)

export default function Page() {
    return (
        <ThemeRoot>
            <Navbar pageId='games' />

            <DynamicStarParticles />
        </ThemeRoot>
    )
}
