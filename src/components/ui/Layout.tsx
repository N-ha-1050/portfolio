import { ReactNode } from "react"
import { Header } from "./Header"

const Layout = ({ children }: { children: ReactNode }) => (
    <>
        <Header />
        <div className="bg-blue-50">
            <main className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center py-16">
                {children}
            </main>
        </div>
    </>
)

export default Layout
