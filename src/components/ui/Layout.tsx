import { ReactNode } from "react"
import { Header } from "./Header"

const Layout = ({ children }: { children: ReactNode }) => (
    <>
        <Header />
        <div className="bg-gradient-to-br from-white from-80% to-blue-200">
            <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center py-16">
                {children}
            </main>
        </div>
    </>
)

export default Layout
