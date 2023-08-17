import { ReactNode } from "react"

export const Section = ({ children }: { children: ReactNode }) => (
    <h2 className="border-l-8 border-blue-600 pl-2 text-2xl">{children}</h2>
)
