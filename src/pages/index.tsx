import { SetCenter } from "@/components/ui/SetCenter"
import { Title } from "@/components/ui/Title"
import { SocialLink } from "@/types/SocialLink"
import { NextPage } from "next"
import Link from "next/link"

const socialLinks: SocialLink[] = [
    { url: "https://github.com/N-ha-1050", displayName: "GitHub" },
    { url: "https://twitter.com/N_ha_1050", displayName: "Twitter" },
    { url: "https://atcoder.jp/users/N_ha_1050", displayName: "AtCoder" },
]

const Home: NextPage = () => (
    <SetCenter>
        <Title>N_ha</Title>
        <p className="mb-4 text-center">
            ようこそ!
            <br />
            このサイトは、Web制作の練習用に製作したポートフォリオです。
        </p>
        <ul className="flex gap-4">
            {socialLinks.map(({ displayName, url }) => (
                <li
                    key={displayName}
                    className="border-b border-transparent duration-200 hover:border-blue-950 hover:opacity-80"
                >
                    <Link href={url} className="text-xl">
                        {displayName}
                    </Link>
                </li>
            ))}
        </ul>
    </SetCenter>
)
export default Home
