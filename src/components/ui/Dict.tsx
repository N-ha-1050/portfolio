import { Children, ReactNode } from "react"

export const Dict = ({ children }: { children: ReactNode }) => (
    <div className="m-auto grid w-fit gap-2 md:grid-cols-2 md:items-center md:gap-4">
        {Children.map(children, (child, index) => (
            <p
                key={index}
                className={
                    index % 2
                        ? "mb-4 md:mb-0"
                        : "justify-self-center font-bold text-blue-800 md:border-b-2 md:border-blue-800 md:text-black"
                }
            >
                {child}
            </p>
        ))}
    </div>
)
