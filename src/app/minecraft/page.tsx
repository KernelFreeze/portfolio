import Navbar from '@/app/components/navbar'
import { ThemeRoot } from '@/app/components/theme'
import dynamic from 'next/dynamic'

const DynamicStarParticles = dynamic(
    () => import('@/app/components/particles'),
    {
        loading: () => <></>,
    }
)

export default function Page() {
    return (
        <ThemeRoot>
            <Navbar pageId='minecraft' />

            <DynamicStarParticles />
        </ThemeRoot>
    )
}
