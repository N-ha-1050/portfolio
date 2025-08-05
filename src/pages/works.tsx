import { Content } from "@/components/ui/Content"
import { Dict } from "@/components/ui/Dict"
import { LinkText } from "@/components/ui/LinkText"
import { List } from "@/components/ui/List"
import { Part } from "@/components/ui/Part"
import { Section } from "@/components/ui/Section"
import { SetInline } from "@/components/ui/SetInline"
import { Title } from "@/components/ui/Title"
import { NextPage } from "next"

const Works: NextPage = () => (
    <SetInline>
        <Title>Works</Title>
        <Part>Portfolio</Part>
        <Content>
            このサイト。ポートフォリオ。
            <Section>使った技術</Section>
            <List>
                <>Next.js Page Router - TypeScript</>
                <>Tailwind CSS</>
            </List>
            <Section>リンク</Section>
            <List>
                {/* <LinkText href="https://portfolio.n-ha.cf">Site</LinkText> */}
                {/* <LinkText href="https://portfolio-five-kohl-78.vercel.app/">Site</LinkText> */}
                <LinkText href="https://portfolio.n-ha.jp">Site</LinkText>
                <LinkText href="https://github.com/N-ha-1050/portfolio">
                    GitHub
                </LinkText>
            </List>
        </Content>
        <Part>Blog</Part>
        <Content>
            個人ブログ。何度か技術スタックを見直していて、はじめは React SPA +
            CSS + Django REST Framework で作り、 Next.js Page Router + Chakra UI
            + Fast API に移行した後、現在の構成になった。
            今は自分用のメモと化している。
            <Section>使った技術(フロントエンド)</Section>
            <List>
                <>Next.js App Router - TypeScript</>
                <>Tailwind CSS</>
            </List>
            <Section>使った技術(バックエンド)</Section>
            <List>
                <>Next.js App Router - TypeScript</>
                <>Prisma</>
                <>PostgreSQL</>
            </List>
            <Section>リンク</Section>
            <List>
                {/* <LinkText href="https://blog.n-ha.cf">Site</LinkText> */}
                {/* <LinkText href="https://blog-front-lake.vercel.app/">Site (バックエンド停止中)</LinkText> */}
                <LinkText href="https://blog.n-ha.jp">Site</LinkText>
            </List>
        </Content>
        <Part>Stady</Part>
        <Content>
            一問一答ができるアプリ。
            <Dict>
                <>vbs</>
                <>中学の時に英単語の暗記用に作成。</>
                <>Django</>
                <>
                    高校に入ってから他の教科でも使いたいと思い Django
                    の勉強も兼ねてWebアプリケーション化。
                    機能を詰めすぎて重くなったため閉鎖。
                </>
                <>Streamlit</>
                <>
                    Webアプリケーション版を閉じたので、機能を絞って Streamlit
                    で作り直した。
                </>
            </Dict>
            <Section>使った技術(vbs)</Section>
            <List>
                <>vbs(VBScript)</>
            </List>
            <Section>使った技術(web)</Section>
            <List>
                <>Django - Python</>
            </List>
            <Section>使った技術(Streamlit)</Section>
            <List>
                <>Streamlit - Python</>
            </List>
            <Section>リンク</Section>
            <List>
                <LinkText href="https://github.com/N-ha-1050/stady-streamlit">
                    GitHub(Streamlit)
                </LinkText>
                <LinkText href="https://n-ha-1050-stady-streamlit-app-d3fadh.streamlit.app/?id=12KDmbV30rRmnFBWVaVrx9-K3a_m8N3r4igng-HZJc4Y">
                    Site(Streamlit)
                </LinkText>
                <LinkText href="https://github.com/N-ha-1050/stady-vbs">
                    GitHub(vbs)
                </LinkText>
            </List>
        </Content>
        {/* <Part>Herbs</Part>
        <Content>
            ハーブの栽培記録。
            <br />
            中学3年の時に作ったハーブ観察記録。
            <br />
            初めての作品で、夏の自由課題で提出。
            <Section>使った技術</Section>
            <List>
                <>HTML/CSS</>
            </List>
            <Section>リンク</Section>
            <List>
                <LinkText href="https://github.com/N-ha-1050/Herbs">
                    GitHub
                </LinkText>
                <LinkText href="https://n-ha-1050.github.io/Herbs/">
                    Site
                </LinkText>
            </List>
        </Content> */}
        {/* <Part>go_home_time</Part>
        <Content>
            中学の時に作った。下校時間までの時間を表示し、時間になったら音楽を再生するプログラム。
            <Section>使った技術</Section>
            <List>
                <>HSP(Hot Soup Processor)</>
            </List>
        </Content> */}
    </SetInline>
)

export default Works
