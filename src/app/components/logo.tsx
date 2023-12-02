import { SVGAttributes } from 'react'

interface LogoProps extends SVGAttributes<SVGSVGElement> {
    size?: string | number
}

export function Logo({ size, ...otherProps }: LogoProps) {
    return (
        <svg
            viewBox='0 0 32 32'
            width={size || 25}
            height={size || 25}
            {...otherProps}
        >
            <defs>
                <filter
                    id='a'
                    x='-.161'
                    y='-.2'
                    width='1.322'
                    height='1.41'
                    colorInterpolationFilters='sRGB'
                >
                    <feGaussianBlur stdDeviation='17.52' />
                </filter>
                <filter
                    id='b'
                    x='-.14'
                    y='-.174'
                    width='1.279'
                    height='1.356'
                    colorInterpolationFilters='sRGB'
                >
                    <feGaussianBlur stdDeviation='15.13' />
                </filter>
                <filter
                    id='c'
                    x='-.117'
                    y='-.146'
                    width='1.235'
                    height='1.326'
                    colorInterpolationFilters='sRGB'
                >
                    <feGaussianBlur stdDeviation='12.613' />
                </filter>
                <filter
                    id='d'
                    x='-.052'
                    y='-.065'
                    width='1.104'
                    height='1.136'
                    colorInterpolationFilters='sRGB'
                >
                    <feGaussianBlur stdDeviation='3.153' />
                </filter>
            </defs>
            <g fill='none'>
                <path
                    d='M2394.5 104c-46.993-50.167-114.22-62.327-162.73-23.383-17.764 14.261-33.731 51.053-33.922 76.244-.764 100.59 125.53 168.37 194.56 206.93 55.652-33.69 85.09-50.241 122.55-85.605 36.889-34.825 69.065-87.359 68.594-139.17-.498-54.877-59.962-98.602-115.94-82.001-41.58 12.331-54.524 27.369-73.11 46.98z'
                    filter='url(#a)'
                    stroke='#da007a'
                    strokeWidth='40'
                    transform='translate(-134.06 2.81) scale(.06277)'
                />
                <path
                    d='M2394.5 104c-46.99-50.167-114.22-62.327-162.73-23.383-17.76 14.261-33.73 51.054-33.92 76.244-.76 100.59 125.53 168.37 194.56 206.93 55.65-33.69 85.09-50.24 122.55-85.606 36.89-34.824 69.06-87.359 68.59-139.17-.49-54.877-59.96-98.602-115.94-82-41.58 12.33-54.52 27.368-73.11 46.98z'
                    filter='url(#b)'
                    stroke='#e655a6'
                    strokeWidth='35'
                    transform='translate(-134.06 2.81) scale(.06277)'
                />
                <path
                    d='M2394.5 104c-46.99-50.167-114.22-62.327-162.73-23.383h-.001c-17.763 14.261-33.73 51.054-33.922 76.244v.001c-.763 100.59 125.53 168.37 194.56 206.93 55.65-33.69 85.09-50.242 122.55-85.606 36.89-34.825 69.06-87.359 68.59-139.17-.5-54.877-59.96-98.602-115.94-82.002-41.58 12.332-54.52 27.37-73.11 46.98z'
                    filter='url(#c)'
                    stroke='#f2aad2'
                    strokeWidth='30'
                    transform='translate(-134.06 2.81) scale(.06277)'
                />
                <path
                    d='M2394.5 104c-46.993-50.167-114.22-62.327-162.73-23.383-17.764 14.261-33.731 51.053-33.922 76.244-.764 100.59 125.53 168.37 194.56 206.93 55.652-33.69 85.09-50.241 122.55-85.605 36.889-34.825 69.065-87.359 68.594-139.17-.498-54.877-59.963-98.602-115.94-82.001-41.58 12.331-54.524 27.369-73.11 46.98z'
                    filter='url(#d)'
                    stroke='#fff'
                    strokeWidth='25'
                    transform='translate(-134.06 2.81) scale(.06277)'
                />
            </g>
        </svg>
    )
}
