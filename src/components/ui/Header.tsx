import Link from "next/link"
import { useDisclosure } from "./useDisclosure"
import { MenuContent } from "@/types/MenuContent"

const menuContents: MenuContent[] = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    { text: "Works", to: "/works" },
    { text: "Skills", to: "/skills" },
    { text: "Contact", to: "/contact" },
]

export const Header = () => {
    const { isOpen, onToggle } = useDisclosure(false)
    return (
        <header className="bg-blue-400">
            <nav className="mx-auto max-w-7xl px-4 py-2 md:flex md:items-center md:justify-between">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="rounded-full border-2 border-transparent p-4 text-4xl text-blue-950 duration-200 hover:border-blue-800 hover:opacity-80"
                    >
                        N_ha
                    </Link>
                    <button
                        type="button"
                        className="m-2 rounded p-2 font-bold text-blue-950 duration-200 hover:bg-blue-200 hover:opacity-80 md:hidden"
                        onClick={onToggle}
                    >
                        Menu
                    </button>
                </div>
                <div className={`${isOpen ? "block" : "hidden"} md:block`}>
                    <ul className="flex flex-col items-center divide-y rounded bg-blue-300 p-2 md:flex-row md:divide-none md:bg-transparent">
                        {menuContents.map(({ text, to }) => (
                            <li key={to} className="self-stretch">
                                <Link href={to}>
                                    <p className="m-2 rounded p-2 text-center text-blue-950 duration-200 hover:bg-blue-200 hover:opacity-80">
                                        {text}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
