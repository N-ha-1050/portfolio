import { ReactNode } from "react"

export const SetCenter = ({ children }: { children: ReactNode }) => (
    <div className="flex flex-col items-center">{children}</div>
)
