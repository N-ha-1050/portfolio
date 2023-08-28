import { Children, ReactNode } from "react"

export const List = ({ children }: { children: ReactNode }) => (
    <ul className="ml-8 list-disc">
        {Children.map(children, (child) => (
            <li>{child}</li>
        ))}
    </ul>
)
