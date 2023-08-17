import { SetCenter } from "@/components/ui/SetCenter"
import { Title } from "@/components/ui/Title"
import { NextPage } from "next"
import Link from "next/link"

const Contact: NextPage = () => (
    <SetCenter>
        <Title>Contact</Title>
        <p>連絡は、X(Twitter)からお願いします。</p>
        <Link
            href="https://twitter.com/N_ha_1050"
            className="border-b border-transparent duration-200 hover:border-blue-950 hover:opacity-80"
        >
            N_ha（@N_ha_1050）
        </Link>
    </SetCenter>
)

export default Contact
