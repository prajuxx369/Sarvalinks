import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Vision from "../components/Vision";
import WhyNow from "../components/WhyNow";
import AIEngine from "../components/AIEngine";
import Impact from "../components/Impact";
import Opportunity from "../components/Opportunity";
import Leadership from "../components/Leadership";
import JoinMission from "../components/JoinMission";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-gold selection:text-black overflow-x-hidden">
      <Preloader />
      <Navbar />
      <Hero />
      <Mission />
      <Vision />
      <WhyNow />
      <AIEngine />
      <Impact />
      <Opportunity />
      <Leadership />
      <JoinMission />
      <Footer />
    </main>
  );
}
