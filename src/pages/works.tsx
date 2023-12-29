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
        <Part>Blog</Part>
        <Content>
            フロントエンドは Next.js + tailwind CSS に移行中。
            <Section>使った技術(フロントエンド)</Section>
            <List>
                <>React - TypeScript</>
                <>Chakra Ui</>
            </List>
            <Section>使った技術(バックエンド)</Section>
            <List>
                <>DRF(Django REST Framework) - Python</>
            </List>
            <Section>リンク</Section>
            <List>
                <LinkText href="https://blog.n-ha.cf">Site</LinkText>
            </List>
        </Content>
        <Part>Portfolio</Part>
        <Content>
            このサイト。ポートフォリオ。
            <Section>使った技術</Section>
            <List>
                <>Next.js - TypeScript</>
                <>Tailwind CSS</>
            </List>
            <Section>リンク</Section>
            <List>
                <LinkText href="https://portfolio.n-ha.cf">Site</LinkText>
                <LinkText href="https://github.com/N-ha-1050/portfolio">
                    GitHub
                </LinkText>
            </List>
        </Content>
        <Part>Stady</Part>
        <Content>
            一問一答ができるアプリ。
            <Dict>
                <>vbs</>
                <>中学の時に、英単語の暗記用に作成。</>
                <>Django</>
                <>
                    高校に入ってから、他の教科でも使いたいと思い Django
                    の勉強も兼ねてWebアプリケーション化。
                    機能を詰めすぎて重くなりすぎたため閉鎖。
                    <br />
                    (データベース周りの実装が原因となってる気がするが、スパゲッティすぎて改善断念。以降コードの書き方には気をつけるように。)
                </>
                <>Streamlit</>
                <>
                    Webアプリケーション版を閉じたので、機能を絞って Streamlit
                    で実装し直した。
                </>
            </Dict>
            <Section>使った技術(vbs)</Section>
            <List>
                <>vbs(Visual Basic Script)</>
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
        {/* <Part>div-game</Part>
        <p className="m-8"></p>
        <Part>海戦ゲーム</Part>
        <p className="m-8"></p>
        <Part>word2vec</Part>
        <p className="m-8"></p> */}
        <Part>Herbs</Part>
        <Content>
            ハーブの栽培記録。
            <br />
            中学3年の時に作ったハーブ観察記録。
            <br />
            初めての作品で、夏の自由課題で提出。
            <Section>使った技術</Section>
            <List>
                <>HTML</>
                <>CSS</>
            </List>
            <Section>リンク</Section>
            <List>
                <LinkText href="https://github.com/N-ha-1050/Herbs">
                    GitHub
                </LinkText>
                <LinkText href="https://herbs.n-ha.cf">Site</LinkText>
            </List>
        </Content>
        <Part>go_home_time</Part>
        <Content>
            中学の時に作った下校時間までの時間を表示し、時間になったら音楽を再生するプログラム。
            <Section>使った技術</Section>
            <List>
                <>HSP(Hot Soup Processor)</>
            </List>
        </Content>
    </SetInline>
)

export default Works
