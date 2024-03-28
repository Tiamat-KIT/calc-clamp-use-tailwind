import { VariantProps, tv } from 'tailwind-variants'

const title = tv({
    base: 'text-[calc(3vw+1.5rem)] font-bold',
    variants: {
        center: {
            true: 'text-center',
        },
        gradient: {
            blue: 'bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-cyan-400 to-blue-800',
        },
        color: {
            white: 'text-white',
            black: 'text-black',
        },
    }
})
type TitleVariants = VariantProps<typeof title>

interface TitleProps extends TitleVariants {
    children?: React.ReactNode
    className?: string
}

export default function Title(plop: TitleProps) {
    return <h1 className={`${title(plop)} ${plop.className}`}>{plop.children}</h1>
}