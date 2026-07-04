import Hero from "@/components/landing/hero";
import WhyKayStichs from "@/components/landing/why-kaystichs";
import LearningPaths from "@/components/landing/learning-paths";
import Testimonial from "@/components/landing/testimonial";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/footer";
import ValueProposition from "@/components/landing/value-preposition";
import QuestPaths from "@/components/landing/quest-paths";

const Home = () => {
  return (
    <main>
      <Hero />
      <QuestPaths />
      <WhyKayStichs />
      <LearningPaths />
      <Testimonial />
      <FAQ />
      <ValueProposition/>
       <Footer/>
    </main>
  );
};

export default Home;
