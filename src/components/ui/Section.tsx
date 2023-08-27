import { ReactNode } from "react"

export const Section = ({
    children,
    text,
}: {
    children: ReactNode
    text?: string
}) => (
    <>
        <h3 className="my-4 text-xl font-bold">{children}</h3>
        {text && <p>{text}</p>}
    </>
)
