import { Section } from "@/components/ui/Section"
import { SetInline } from "@/components/ui/SetInline"
import { Title } from "@/components/ui/Title"
import { NextPage } from "next"

const Skills: NextPage = () => (
    <SetInline>
        <Title>Skills</Title>
        <Section>Python</Section>
        <p className="m-4">
            <span className="my-4 block text-xl font-bold">
                競技プログラミング
            </span>
            現在の競プロメイン言語に使用。
            <br />
            AtCoder を高校2年のときに始めて、現在の色は緑。
            <span className="my-4 block text-xl font-bold">Django</span>
            高校1年のときからいくつかのWebアプリケーションの個人開発に使用。
            <br />
            現在は、 Django REST Framework を使った開発がメイン(フロントエンドは
            Next.js )。
            <br />
            認証を実装するライブラリは、 OAuth2 + JWT + Cookie
            を使うことが多い。
            <span className="my-4 block text-xl font-bold">
                データサイエンス・AI
            </span>
            高校2年のときに、Django
            のWebアプリケーションで集めたデータを上手く使えないかと思ったことと、同時期に
            Word2Vec を触ったことをきっかけに興味を持った。
            <br />
            大学で本格的に学びたい(データサイエンス学部在籍)。
            <br />
            現在は、Signate や Kaggle のコンペに参加しながら勉強中。メインに
            LightGBM を使用。
            <span className="my-4 block text-xl font-bold">その他</span>
            Python
            自体は中学3年のときに初めて触り、高校に入ってから本格的に使い始めた。
            <br />
            tkinter, Pygame を使ったゲーム開発や Streamlit を使ったWeb開発、
            Discord Bot を作ったこともある。
        </p>
        <Section>TypeScript</Section>
        <p className="m-4">
            現在は、 Next.js での開発がメイン。
            <br />
            高校2年のときに始めて触り、 Chakra UI を使ってきたが、 Tailwind CSS
            も勉強中。
            <br />
            このサイトの開発言語。
        </p>
        <Section>その他の言語</Section>
        <ul className="m-4">
            <li>
                <span className="my-4 block text-xl font-bold">C++, Rust</span>
                競技プログラミングに使ったことがある、 C++ は初期の頃に使用、
                Rust は勉強中(なお、現在のメインは Python )
            </li>
            <li>
                <span className="my-4 block text-xl font-bold">Go</span>
                競技プログラミングのために少し勉強し、その後Webのバックエンド開発に使用
            </li>
            <li>
                <span className="my-4 block text-xl font-bold">Ruby, C</span>
                高校のときに受けた高大連携の講義で使用
            </li>
            <li>
                <span className="my-4 block text-xl font-bold">
                    Visual Basic
                </span>
                vbs は中学の時に初めてプログラミングをした言語、その後 VBA や
                VB.NET も少し
            </li>
            <li>
                <span className="my-4 block text-xl font-bold">
                    Hot Soup Processor
                </span>
                これも中学の時に使ってた、主にデスクトップアプリ
            </li>
        </ul>
    </SetInline>
)

export default Skills
