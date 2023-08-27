import { Content } from "@/components/ui/Content"
import { LinkText } from "@/components/ui/LinkText"
import { Part } from "@/components/ui/Part"
import { Section } from "@/components/ui/Section"
import { SetInline } from "@/components/ui/SetInline"
import { Title } from "@/components/ui/Title"
import { NextPage } from "next"

const Works: NextPage = () => (
    <SetInline>
        <Title>Works</Title>
        <Part>blog</Part>
        <Content>
            フロントエンドは Next.js, tailwind CSS に移行中
            <Section>使った技術(フロントエンド)</Section>
            <ul>
                <li>React - TypeScript</li>
                <li>Chakra Ui</li>
            </ul>
            <Section>使った技術(バックエンド)</Section>
            <ul>
                <li>DRF(Django REST Framework) - Python</li>
            </ul>
            <Section>リンク</Section>
            <ul>
                <li>
                    <LinkText href="https://blog.n-ha.cf">Site</LinkText>
                </li>
            </ul>
        </Content>
        <Part>stady</Part>
        <Content>
            一問一答サイト
            <br />
            中学の時にvbsで作成。
            <br />
            高校に入ってから Django でwebアプリケーション化。
            機能を詰めすぎて重くなりすぎたため閉鎖。
            <br />
            (データベース周りの実装が原因となってる気がするが、スパゲッティすぎて改善断念。以降コードの書き方には気をつけるように。)
            <br />
            その後、機能を絞って Streamlit で実装
            <Section>使った技術(vbs)</Section>
            <ul>
                <li>vbs(Visual Basic Script)</li>
            </ul>
            <Section>使った技術(web)</Section>
            <ul>
                <li>Django - Python</li>
            </ul>
            <Section>使った技術(Streamlit)</Section>
            <ul>
                <li>Streamlit - Python</li>
            </ul>
            <Section>リンク</Section>
            <ul>
                <li>
                    <LinkText href="https://github.com/N-ha-1050/stady-streamlit">
                        GitHub(Streamlit)
                    </LinkText>
                </li>
                <li>
                    <LinkText href="https://n-ha-1050-stady-streamlit-app-d3fadh.streamlit.app/?id=12KDmbV30rRmnFBWVaVrx9-K3a_m8N3r4igng-HZJc4Y">
                        Site(Streamlit)
                    </LinkText>
                </li>
                <li>
                    <LinkText href="https://github.com/N-ha-1050/stady-vbs">
                        GitHub(vbs)
                    </LinkText>
                </li>
            </ul>
        </Content>
        {/* <Part>div-game</Part>
        <p className="m-8"></p>
        <Part>海戦ゲーム</Part>
        <p className="m-8"></p>
        <Part>word2vec</Part>
        <p className="m-8"></p> */}
        <Part>Herbs</Part>
        <Content>
            ハーブの栽培記録
            <br />
            中学3年の時に作ったハーブ観察記録。
            <br />
            初めての作品。
            <br />
            夏の自由課題で提出。
            <Section>使った技術</Section>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <Section>リンク</Section>
            <ul>
                <li>
                    <LinkText href="https://github.com/N-ha-1050/Herbs">
                        GitHub
                    </LinkText>
                </li>
                <li>
                    <LinkText href="https://herbs.n-ha.cf">Site</LinkText>
                </li>
            </ul>
        </Content>
        <Part>go_home_time</Part>
        <Content>
            中学の時に作った下校時間までの時間を表示し、時間になったら音楽を再生するプログラム
            <Section>使った技術</Section>
            <ul>
                <li>HSP(Hot Soup Processor)</li>
            </ul>
        </Content>
    </SetInline>
)

export default Works
