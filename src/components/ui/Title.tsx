import { ReactNode } from "react"

export const Title = ({ children }: { children: ReactNode }) => (
    <h1 className="mb-4 text-4xl font-bold">{children}</h1>
)
