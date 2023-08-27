import { LinkText } from "@/components/ui/LinkText"
import { SetCenter } from "@/components/ui/SetCenter"
import { Title } from "@/components/ui/Title"
import { SocialLink } from "@/types/SocialLink"
import { NextPage } from "next"

const socialLinks: SocialLink[] = [
    { url: "https://github.com/N-ha-1050", displayName: "GitHub" },
    { url: "https://twitter.com/N_ha_1050", displayName: "X(Twitter)" },
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
                <li key={displayName} className="text-xl">
                    <LinkText href={url}>{displayName}</LinkText>
                </li>
            ))}
        </ul>
    </SetCenter>
)
export default Home
