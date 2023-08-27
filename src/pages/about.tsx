import { Part } from "@/components/ui/Part"
import { SetInline } from "@/components/ui/SetInline"
import { Title } from "@/components/ui/Title"
import { NextPage } from "next"
import { Fragment } from "react"

const history: { date: string; content: string }[] = [
    { date: "2004年7月23日", content: "誕生" },
    { date: "2023年3月", content: "桐光学園高等学校 卒業" },
    { date: "2023年4月", content: "横浜市立大学 入学" },
]

const About: NextPage = () => (
    <SetInline>
        <Title>About</Title>
        <Part>introduce</Part>
        <p className="m-8">
            <span className="mb-4 block">
                <ruby className="mr-4 text-xl font-bold">
                    長野悠歩<rt>ながのはるほ</rt>
                </ruby>
                2004年7月23日生
            </span>
            横浜市立大学データサイエンス学部1年、 Python 好きです。
            <br />
            Python を中心に幅広くプログラミングに取り組んでいます。
            <br />
            最近は、 Python を使った機械学習と Next.js を使ったWeb開発を勉強中。
        </p>
        <Part>history</Part>
        <div className="m-8 grid md:w-fit md:grid-cols-2 md:gap-4">
            {history.map(({ date, content }) => (
                <Fragment key={date}>
                    <p className="justify-self-center text-blue-800 md:border-b-2 md:border-blue-800 md:text-black">
                        {date}
                    </p>
                    <p className="mb-8 md:mb-0">{content}</p>
                </Fragment>
            ))}
        </div>
    </SetInline>
)

export default About
