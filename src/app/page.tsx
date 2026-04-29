import Hero from "@/components/landing/hero";
import WhyKayStichs from "@/components/landing/why-kaystichs";
import Testimonial from "@/components/landing/testimonial";
import Footer from "@/components/landing/footer";
import ValueProposition from "@/components/landing/value-preposition";

const Home = () => {
  return (
    <main>
      <Hero />
      <WhyKayStichs />
      <Testimonial />
      <ValueProposition/>
       <Footer/>
    </main>
  );
};

export default Home;
