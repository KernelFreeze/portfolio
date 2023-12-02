'use client'
import React, { useContext, useId } from 'react'
import Particles from 'react-tsparticles'
import { useCallback } from 'react'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'
import { GlobalTheme, ThemeContext } from '../providers/theme'

export function StarParticles() {
    const { theme } = useContext(ThemeContext)
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine)
    }, [])
    const starsId = useId()

    if (theme === GlobalTheme.Light) {
        return
    }

    return (
        <Particles
            init={particlesInit}
            style={{
                position: 'fixed',
                backgroundRepeat: 'no-repeat !important',
                backgroundSize: 'cover !important',
                width: '100%',
                height: '100%',
            }}
            id={starsId}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push',
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            particles_nb: 1,
                        },
                    },
                },
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: true,
                            value_area: 1500,
                        },
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        random: false,
                        speed: 0.05,
                        straight: false,
                    },
                    size: {
                        value: 1,
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.01,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}
