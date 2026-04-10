import { LinkText } from "@/components/ui/LinkText"
import { SetCenter } from "@/components/ui/SetCenter"
import { Title } from "@/components/ui/Title"
import { NextPage } from "next"
import Link from "next/link"

const Contact: NextPage = () => (
    <SetCenter>
        <Title>Contact</Title>
        <p>
            連絡は、メールまたはX(Twitter)からお願いします。
            <br />
            メール: contact at n-ha.jp
            <br />
            X(Twitter):{" "}
            <LinkText href="https://x.com/N_ha_1050">
                N_ha (@N_ha_1050)
            </LinkText>
        </p>
    </SetCenter>
)

export default Contact
