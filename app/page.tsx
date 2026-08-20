import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import RealProduct from "@/components/RealProduct";
import Comparison from "@/components/Comparison";
import DepreciationLedger from "@/components/DepreciationLedger";
import Features from "@/components/Features";
import DimensionLine from "@/components/DimensionLine";
import Testimonials from "@/components/Testimonials";
import ClientsWall from "@/components/ClientsWall";
import HowItWorks from "@/components/HowItWorks";
import Faq from "@/components/Faq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsappFloatingButton from "@/components/WhatsappFloatingButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <RealProduct />
        <Comparison />
        <DepreciationLedger />
        <Features />
        <DimensionLine label="9 módulos integrados" />
        <Testimonials />
        <ClientsWall />
        <HowItWorks />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
      <WhatsappFloatingButton />
      <MobileStickyBar />
    </>
  );
}
