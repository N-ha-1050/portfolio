import NextLink from "next/link"
import { ReactNode } from "react"
export const LinkText = ({
    href,
    children,
}: {
    href: string
    children: ReactNode
}) => (
    <NextLink
        className="border-b border-transparent duration-200 hover:border-blue-950 hover:opacity-80"
        href={href}
    >
        {children}
    </NextLink>
)
