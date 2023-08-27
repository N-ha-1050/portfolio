import { Part } from "@/components/ui/Part"
import { Section } from "@/components/ui/Section"
import { SetInline } from "@/components/ui/SetInline"
import { Title } from "@/components/ui/Title"
import { NextPage } from "next"

const Skills: NextPage = () => (
    <SetInline>
        <Title>Skills</Title>
        <Part>Python</Part>
        <div className="m-8">
            <Section>競技プログラミング</Section>
            現在の競プロメイン言語に使用。
            <br />
            AtCoder を高校2年のときに始めて、現在の色は緑。
            <Section>Django</Section>
            高校1年のときからいくつかのWebアプリケーションの個人開発に使用。
            <br />
            現在は、 Django REST Framework を使った開発がメイン(フロントエンドは
            Next.js )。
            <br />
            認証を実装するライブラリは、 OAuth2 + JWT + Cookie
            を使うことが多い。
            <Section>データサイエンス・AI</Section>
            高校2年のときに、Django
            のWebアプリケーションで集めたデータを上手く使えないかと思ったことと、同時期に
            Word2Vec を触ったことをきっかけに興味を持った。
            <br />
            大学で本格的に学びたい(データサイエンス学部在籍)。
            <br />
            現在は、Signate や Kaggle のコンペに参加しながら勉強中。メインに
            LightGBM を使用。
            <Section>その他</Section>
            Python
            自体は中学3年のときに初めて触り、高校に入ってから本格的に使い始めた。
            <br />
            tkinter, Pygame を使ったゲーム開発や Streamlit を使ったWeb開発、
            Discord Bot を作ったこともある。
        </div>
        <Part>TypeScript</Part>
        <div className="m-8">
            現在は、 Next.js での開発がメイン。
            <br />
            高校2年のときに始めて触り、 Chakra UI を使ってきたが、 Tailwind CSS
            も勉強中。
            <br />
            このサイトの開発言語。
        </div>
        <Part>その他の言語</Part>
        <div className="m-8">
            <Section>C++, Rust</Section>
            競技プログラミングに使ったことがある、 C++ は初期の頃に使用、 Rust
            は勉強中(なお、現在のメインは Python )<Section>Go</Section>
            競技プログラミングのために少し勉強し、その後Webのバックエンド開発に使用
            <Section>Ruby, C</Section>
            高校のときに受けた高大連携の講義で使用
            <Section>Visual Basic</Section>
            vbs は中学の時に初めてプログラミングをした言語、その後 VBA や VB.NET
            も少し
            <Section>Hot Soup Processor</Section>
            これも中学の時に使ってた、主にデスクトップアプリ
        </div>
    </SetInline>
)

export default Skills
