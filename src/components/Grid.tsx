import { tv,VariantProps } from "tailwind-variants";

const grid = tv({
    base: 'grid gap-4 justify-items-center items-center',
    variants: {
        cols: {
            1: 'grid-cols-1',
            2: 'grid-cols-2',
            3: 'grid-cols-3',
            4: 'grid-cols-4',
            5: 'grid-cols-5',
            6: 'grid-cols-6',
            7: 'grid-cols-7',
            8: 'grid-cols-8',
            9: 'grid-cols-9',
            10: 'grid-cols-10',
            11: 'grid-cols-11',
            12: 'grid-cols-12',
        },
        rows: {
            1: 'grid-rows-1',
            2: 'grid-rows-2',
            3: 'grid-rows-3',
            4: 'grid-rows-4',
            5: 'grid-rows-5',
            6: 'grid-rows-6',
            7: 'grid-rows-7',
            8: 'grid-rows-8',
            9: 'grid-rows-9',
            10: 'grid-rows-10',
            11: 'grid-rows-11',
            12: 'grid-rows-12',
        },
    }
});

type GridVariants = VariantProps<typeof grid>
interface GridProps extends GridVariants {
    children?: React.ReactNode
}

export default function Grid(plop: GridProps) {
    return <div className={grid(plop)}>{plop.children}</div>
}