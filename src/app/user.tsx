'use client'
import { Card, CardBody, User } from '@nextui-org/react'
import { TypeWriter } from './typewriter'

export function CelesteUser() {
    return (
        <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50'
            shadow='sm'
        >
            <CardBody className='justify-center'>
                <User
                    name='Celeste Peláez'
                    description={<TypeWriter />}
                    avatarProps={{
                        src: '/avatar.jpg',
                        size: 'lg',
                    }}
                    classNames={{
                        base: 'subpixel-antialiased md:antialiased',
                        name: 'text-lg md:text-2xl',
                        description:
                            'md:text-lg min-w-[10rem] md:min-w-[15rem]',
                        wrapper: 'md:ml-2',
                    }}
                />
            </CardBody>
        </Card>
    )
}
