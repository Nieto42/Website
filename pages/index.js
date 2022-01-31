import Layout from "../components/Layout";
import HeroSection from "../components/Herosection";
import Media from "../components/Media";
import Services from "../components/Services";
import Skill from "../components/Skill";
import Projet from "../components/Projet";
import Feedback from "../components/Feedback";

export default function Home() {
  return (
    <Layout page="Agence web marketing SLM">
      <HeroSection></HeroSection>
      <Media></Media>
      <Services></Services>
      <Skill></Skill>
      <Projet></Projet>
      <Feedback></Feedback>
    </Layout>
  );
}
