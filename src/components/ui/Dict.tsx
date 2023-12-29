import { Children, ReactNode } from "react"

export const Dict = ({ children }: { children: ReactNode }) => (
    <div className="my-8 grid w-fit gap-2 md:grid-cols-4 md:items-center md:gap-8">
        {Children.map(children, (child, index) => (
            <p
                key={index}
                className={
                    index % 2
                        ? "mb-4 md:col-span-3 md:mb-0"
                        : "justify-self-center font-bold text-blue-800 md:border-b-2 md:border-blue-800 md:text-black"
                }
            >
                {child}
            </p>
        ))}
    </div>
)
