import { ReactNode } from "react"

export const Section = ({
    children,
    text,
}: {
    children: ReactNode
    text?: string
}) => (
    <div className="my-4 flex items-end">
        <h3 className="text-xl font-bold">{children}</h3>
        {text && <p>{text}</p>}
    </div>
)
