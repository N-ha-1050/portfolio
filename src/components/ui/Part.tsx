import { ReactNode } from "react"

export const Part = ({ children }: { children: ReactNode }) => (
    <h2 className="border-l-8 border-blue-600 pl-2 text-2xl font-bold">
        {children}
    </h2>
)
