'use client'
import Typewriter from 'typewriter-effect'

export function TypeWriter() {
    return (
        <Typewriter
            options={{
                strings: [
                    'Software Developer',
                    'Minecraft Modder',
                    'Game Developer',
                    'Freelancer',
                    'Open Source Contributor',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}
