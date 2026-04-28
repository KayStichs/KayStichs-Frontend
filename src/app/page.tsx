import Hero from "@/components/landing/hero";
import WhyLearnault from "@/components/landing/why-learnault";
import LearningPaths from "@/components/landing/learning-paths";
import QuestPaths from "@/components/landing/quest-paths";
import Testimonial from "@/components/landing/testimonial";

const Home = () => {
  return (
    <main>
      <Hero />
      <WhyLearnault />
      <LearningPaths />
      <QuestPaths />
      <Testimonial />
    </main>
  );
};

export default Home;
