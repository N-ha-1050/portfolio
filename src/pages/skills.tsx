import { Content } from "@/components/ui/Content"
import { Part } from "@/components/ui/Part"
import { Section } from "@/components/ui/Section"
import { SetInline } from "@/components/ui/SetInline"
import { Title } from "@/components/ui/Title"
import { NextPage } from "next"

const Skills: NextPage = () => (
    <SetInline>
        <Title>Skills</Title>
        <Part>Python</Part>
        <Content>
            <Section>競技プログラミング</Section>
            現在の競プロメイン言語。
            <br />
            AtCoder を高校2年のときに始めて、現在の色は緑。
            <Section>Django</Section>
            高校1年のときからいくつかのWebアプリケーションの個人開発に使用。
            <br />
            現在は、 Django REST Framework を使った開発がメイン(フロントエンドは
            Next.js )。
            <br />
            認証は、 OAuth2 + JWT + Cookie
            を使うことが多い。(認証周りはこれからもっと勉強したい。)
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
        </Content>
        <Part>TypeScript</Part>
        <Content>
            <Section>React</Section>
            高校2年のときに始めて触った。
            <Section>Next.js</Section>
            現在は、 Next.js での開発がメイン。
            <br />
            Chakra UI を使ってきたが、 Tailwind CSS も勉強中。
            <br />
            このサイトの開発言語。
        </Content>
        <Part>その他の言語</Part>
        <Content>
            <Section>C++, Rust</Section>
            競技プログラミングに使ったことがある。 C++ は初期の頃に使用、 Rust
            は一時期勉強してた。
            <Section>Go</Section>
            競技プログラミングのために少し勉強し、その後Webのバックエンド開発に使用。
            <Section>Ruby, C</Section>
            高校のときに受けた高大連携の講義で使用。
            <Section>Visual Basic</Section>
            vbs は中学の時に初めてプログラミングをした言語。その後 VBA や VB.NET
            も少し。
            <Section>Hot Soup Processor</Section>
            中学の時に簡単なデスクトップアプリをすぐに作るために使用。
        </Content>
    </SetInline>
)

export default Skills
