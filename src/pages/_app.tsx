import Layout from "@/components/ui/layout"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

const App = ({ Component, pageProps }: AppProps) => (
    <Layout>
        <Head>
            <title>N_ha`s Portfolio</title>
        </Head>
        <Component {...pageProps} />
    </Layout>
)

export default App
