import {tv, VariantProps} from 'tailwind-variants'

const container = tv({
    base: 'container mx-auto px-8 sm:px-4 md:px-32',
    variants: {
        rounded: {
            xl: 'rounded-xl',
        },
        relative: {
            true: 'relative',
        },
    }
},{
    responsiveVariants: true
})

type ContainerVariants = VariantProps<typeof container>
interface ContainerProps extends ContainerVariants {
    children?: React.ReactNode
    className?: string
}

export default function Container(prop: ContainerProps) {
    return (
        <div className={`${container(prop)} ${prop.className}`}>
            {prop.children}
        </div>
    )
}