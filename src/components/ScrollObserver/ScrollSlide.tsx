export default function ScrollSlide({children,className,scrollsnap}:{children: React.ReactNode,className?:string,scrollsnap?: "start" | "center" | "end" }) {
    return (
        <div className={`w-full h-screen ${className}`} style={{scrollSnapAlign: `${scrollsnap}`}}>
            {children}
        </div>
    )
}