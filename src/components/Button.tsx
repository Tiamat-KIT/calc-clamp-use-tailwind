"use client";
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
    base: 'px-4 py-2 bg-blue-500 text-white rounded',
    variants: {
        theme: {
            primary: 'bg-blue-500 text-white',
            secondary: 'bg-gray-500 text-white',
            warning: 'bg-yellow-500 text-white',
            danger: 'bg-red-500 text-white',
        },
        size: {
            calc: 'h-[calc(3vh+1.25rem)] w-[calc(25vw+2rem)]',
        },
        "screen-position": {
            "right-bottom": 'fixed right-5 bottom-5',
        },
        rounded: {
            true: 'rounded-3xl ',
        },
        /* focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2', */
    }
},
{
    responsiveVariants: true
})
type ButtonVariants = VariantProps<typeof button>

interface ButtonProps extends ButtonVariants {
    children?: React.ReactNode
    onClick?: () => void

}
export default function Button(plop: ButtonProps = {
    theme: {
        initial: 'primary',
        sm: 'secondary',
        md: 'warning',
        lg: 'danger',
    }
}) {
    return <button onClick={plop.onClick} className={button(plop)}>{plop.children}</button>
}