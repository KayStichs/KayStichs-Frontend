import Hero from "@/components/landing/hero";
import WhyLearnault from "@/components/landing/why-learnault";
import Testimonial from "@/components/landing/testimonial";
import FAQ from "@/components/landing/faq"; // [1] Add the import

const Home = () => {
  return (
    <main>
      <Hero />
      <WhyLearnault />
      <Testimonial />
      <FAQ /> {/* [2] Place it at the bottom */}
    </main>
  );
};

export default Home;