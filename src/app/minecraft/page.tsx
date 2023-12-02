import Navbar from '@/app/components/navbar'
import { ThemeRoot } from '@/app/components/theme'
import { StarParticles } from '../components/particles'

export const runtime = 'edge'

export default function Page() {
    return (
        <ThemeRoot>
            <Navbar pageId='minecraft' />

            <StarParticles />
        </ThemeRoot>
    )
}
