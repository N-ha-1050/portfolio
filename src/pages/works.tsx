import { Section } from "@/components/ui/Section"
import { SetInline } from "@/components/ui/SetInline"
import { Title } from "@/components/ui/Title"
import { NextPage } from "next"
import Link from "next/link"

const Works: NextPage = () => (
    <SetInline>
        <Title>Works</Title>
        <Section>blog</Section>
        <p className="m-8">
            フロントエンドは Next.js, tailwind CSS に移行中
            <br />
            使った技術(フロントエンド): React, Chakra Ui - TypeScript
            <br />
            使った技術(バックエンド): DRF(Django REST Framework) - Python
            <br />
            リンク: <Link href="https://blog.n-ha.cf">Site</Link>
        </p>
        <Section>stady</Section>
        <p className="m-8">
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
            <br />
            使った技術(vbs): vbs(Visual Basic Script)
            <br />
            使った技術(web): Django - Python
            <br />
            使った技術(Streamlit): Streamlit - Python
            <br />
            リンク:{" "}
            <Link href="https://github.com/N-ha-1050/stady-streamlit">
                GitHub(Streamlit)
            </Link>
            ,{" "}
            <Link href="https://n-ha-1050-stady-streamlit-app-d3fadh.streamlit.app/?id=12KDmbV30rRmnFBWVaVrx9-K3a_m8N3r4igng-HZJc4Y">
                Site(Streamlit)
            </Link>
            ,{" "}
            <Link href="https://github.com/N-ha-1050/stady-vbs">
                GitHub(vbs)
            </Link>
        </p>
        {/* <Section>div-game</Section>
        <p className="m-8"></p>
        <Section>海戦ゲーム</Section>
        <p className="m-8"></p>
        <Section>word2vec</Section>
        <p className="m-8"></p> */}
        <Section>Herbs</Section>
        <p className="m-8">
            ハーブの栽培記録
            <br />
            中学3年の時に作ったハーブ観察記録。
            <br />
            初めての作品。
            <br />
            夏の自由課題で提出。
            <br />
            使った技術: HTML, CSS
            <br />
            リンク:{" "}
            <Link
                className="border-b border-transparent duration-200 hover:border-blue-950 hover:opacity-80"
                href="https://github.com/N-ha-1050/Herbs"
            >
                GitHub
            </Link>
            ,{" "}
            <Link
                className="border-b border-transparent duration-200 hover:border-blue-950 hover:opacity-80"
                href="https://herbs.n-ha.cf"
            >
                Site
            </Link>
        </p>
        <Section>go_home_time</Section>
        <p className="m-8">
            中学の時に作った下校時間までの時間を表示し、時間になったら音楽を再生するプログラム
            <br />
            使った技術: HSP(Hot Soup Processor)
        </p>
    </SetInline>
)

export default Works
