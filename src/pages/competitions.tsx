import { Content } from "@/components/ui/Content"
import { Dict } from "@/components/ui/Dict"
import { LinkText } from "@/components/ui/LinkText"
import { Part } from "@/components/ui/Part"
import { Section } from "@/components/ui/Section"
import { SetInline } from "@/components/ui/SetInline"
import { Title } from "@/components/ui/Title"
import { NextPage } from "next"
import { Fragment } from "react"

type Competition = {
    name: string
    link: string
    period: string
    result: string
    description?: string
}

// データサイエンスコンペ
const competitions_ds: Competition[] = [
    {
        name: "SIGNATE Student Cup 2023 モデリング部門",
        link: "https://signate.jp/competitions/1051",
        period: "2023年7月~8月",
        result: "38位(全310人・チーム)/Silver",
    },
    {
        name: "Nishika 生鮮野菜の価格予測2023秋",
        link: "https://competition.nishika.com/competitions/yasai_2023autumn/summary",
        period: "2023年9月~11月",
        result: "8位(全84人・チーム中)/Top 10%",
        description: "サークルのチームで参加",
    },
    {
        name: "Nishika 中古マンション価格予測2024春の部",
        link: "https://competition.nishika.com/competitions/mansion_2024spring/summary",
        period: "2024年3月~5月",
        result: "12位(全115人・チーム)/Top 20%",
        description: "サークルのチームで参加",
    },
    {
        name: "SIGNATE Cup",
        link: "https://signate.jp/competitions/1376",
        period: "2024年7月~8月",
        result: "323位(全1671人・チーム)",
    },
]

// 競技プログラミングコンテスト
const competitions_cp: Competition[] = [
    {
        name: "AtCoder",
        link: "https://atcoder.jp",
        period: "2021年3月~",
        result: "Algorithm 水色、Heuristic 緑色",
        description: "AtCoder Beginner Contest などに参加",
    },
    {
        name: "paiza プログラミングスキルチェック",
        link: "https://paiza.jp/challenges",
        period: "2023年6月~",
        result: "paizaランク S",
    },
    {
        name: "PG BATTLE 2023大学＆大学院、高専、専門学校の部",
        link: "https://products.sint.co.jp/pg_battle_2023",
        period: "2023年10月",
        result: "55位(全113チーム)",
        description: "サークルのチームで参加",
    },
]

const competition_categories: {
    category: string
    competitions: Competition[]
}[] = [
    { category: "データサイエンス", competitions: competitions_ds },
    { category: "競技プログラミング", competitions: competitions_cp },
]
const Competitions: NextPage = () => (
    <SetInline>
        <Title>Competitions</Title>
        {competition_categories.map(({ category, competitions }) => (
            <Fragment key={category}>
                <Part>{category}</Part>
                <Content>
                    {competitions.map(
                        ({ name, link, period, result, description }) => (
                            <Fragment key={name}>
                                <Section>{name}</Section>
                                {description && (
                                    <p className="mb-4">{description}</p>
                                )}
                                <div className="text-center">
                                    <LinkText href={link}>
                                        コンテストページ
                                    </LinkText>
                                </div>
                                <Dict>
                                    <>期間</>
                                    <>{period}</>
                                    <>成績</>
                                    <>{result}</>
                                </Dict>
                            </Fragment>
                        ),
                    )}
                </Content>
            </Fragment>
        ))}
    </SetInline>
)

export default Competitions
