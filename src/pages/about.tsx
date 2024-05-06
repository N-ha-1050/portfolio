import { Content } from "@/components/ui/Content"
import { Dict } from "@/components/ui/Dict"
import { Part } from "@/components/ui/Part"
import { Section } from "@/components/ui/Section"
import { SetInline } from "@/components/ui/SetInline"
import { Title } from "@/components/ui/Title"
import { NextPage } from "next"

const About: NextPage = () => (
    <SetInline>
        <Title>About</Title>
        <Part>自己紹介</Part>
        <Content>
            <Section text="2004年7月23日生">
                <ruby className="mr-4 text-xl font-bold">
                    長野悠歩<rt>ながのはるほ</rt>
                </ruby>
            </Section>
            横浜市立大学データサイエンス学部、 Python 好きです。
            <br />
            Python を中心に幅広くプログラミングに取り組んでいます。
            <br />
            最近は、 Python を使った機械学習と Next.js を使ったWeb開発を勉強中。
        </Content>
        <Part>経歴</Part>
        <Content>
            <Dict>
                <>2023年3月</>
                <>桐光学園高等学校 卒業</>
                <>2023年4月</>
                <>横浜市立大学 入学</>
            </Dict>
        </Content>
        <Part>資格</Part>
        <Content>
            <Dict>
                <>2023年7月</>
                <>TOEIC L&R 645点</>
                <>2023年12月</>
                <>普通自動車第一種免許</>
                <>2024年3月</>
                <>乙種第4類危険物取扱者免状</>
            </Dict>
        </Content>
    </SetInline>
)

export default About
