import { forwardRef } from 'react'
import { LinkIcon } from '@nextui-org/shared-icons'
import { linkAnchorClasses } from '@nextui-org/theme'

import { LinkProps as UIProps, useLink } from '@nextui-org/react'
import { default as NextLink, LinkProps as NextProps } from 'next/link'

const Link = forwardRef<HTMLAnchorElement, UIProps & NextProps>(
    (props, ref) => {
        const {
            children,
            showAnchorIcon,
            anchorIcon = <LinkIcon className={linkAnchorClasses} />,
            getLinkProps,
        } = useLink({
            ...props,
            ref,
        })

        return (
            // @ts-expect-error getLinkProps type is missing href
            <NextLink {...getLinkProps()}>
                <>
                    {children}
                    {showAnchorIcon && anchorIcon}
                </>
            </NextLink>
        )
    }
)

Link.displayName = 'CelesteLink'
export default Link
