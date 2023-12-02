import { forwardRef } from '@nextui-org/system'

import { UserProps, AvatarIcon, useAvatar, useUser } from '@nextui-org/react'
import Image from 'next/image'
import { useMemo } from 'react'

export const CustomAvatar = forwardRef((props, ref) => {
    const {
        src,
        icon = <AvatarIcon />,
        alt,
        classNames,
        slots,
        name,
        showFallback,
        fallback: fallbackComponent,
        getInitials,
        getAvatarProps,
        getImageProps,
    } = useAvatar({
        ref,
        ...props,
    })

    const fallback = useMemo(() => {
        if (!showFallback && src) return null

        const ariaLabel = alt || name || 'avatar'

        if (fallbackComponent) {
            return (
                <div
                    aria-label={ariaLabel}
                    className={slots.fallback({ class: classNames?.fallback })}
                    role='img'
                >
                    {fallbackComponent}
                </div>
            )
        }

        return name ? (
            <span
                aria-label={ariaLabel}
                className={slots.name({ class: classNames?.name })}
                role='img'
            >
                {getInitials(name)}
            </span>
        ) : (
            <span
                aria-label={ariaLabel}
                className={slots.icon({ class: classNames?.icon })}
                role='img'
            >
                {icon}
            </span>
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showFallback, src, fallbackComponent, name, classNames])

    return (
        <div {...getAvatarProps()}>
            {src && <Image src={src} {...getImageProps()} alt={alt} />}
            {fallback}
        </div>
    )
})

CustomAvatar.displayName = 'Celeste.Avatar'

export const CustomUser = forwardRef<'div', UserProps>((props, ref) => {
    const {
        Component,
        name,
        slots,
        classNames,
        description,
        avatarProps,
        getUserProps,
    } = useUser({
        ...props,
        ref,
    })

    return (
        <Component {...getUserProps()}>
            <CustomAvatar {...avatarProps} />
            <div className={slots.wrapper({ class: classNames?.wrapper })}>
                <span className={slots.name({ class: classNames?.name })}>
                    {name}
                </span>
                <span
                    className={slots.description({
                        class: classNames?.description,
                    })}
                >
                    {description}
                </span>
            </div>
        </Component>
    )
})

CustomUser.displayName = 'Celeste.User'
