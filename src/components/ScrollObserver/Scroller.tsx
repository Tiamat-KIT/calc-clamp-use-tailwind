export default function ScrollObserver({children,snaptype}:{children: React.ReactNode,snaptype?: "mandatory" | "proximity"}) {
    return (
        <div className="w-full h-screen overflow-y-auto overflow-x-hidden" style={{
            scrollSnapType: `y ${snaptype}`,
        }}>
            {children}
        </div>
    )
}