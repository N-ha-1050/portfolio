import { Section } from "@/components/ui/Section"
import { SetInline } from "@/components/ui/SetInline"
import { Title } from "@/components/ui/Title"
import { NextPage } from "next"

const About: NextPage = () => (
    <SetInline>
        <Title>About</Title>
        <Section>introduce</Section>
        <Section>history</Section>
    </SetInline>
)

export default About
