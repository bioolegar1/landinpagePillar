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
import { FAQS } from "@/lib/site-data";
import { SITE_URL } from "@/lib/seo";

// FAQPage: elegível a aparecer como sanfona de perguntas direto no resultado de busca do Google.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

// SoftwareApplication: identifica o Pillar como produto pesquisável, não só uma página de marketing.
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sistema Pillar",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows",
  url: SITE_URL,
  description:
    "Sistema de gestão de obras com apuração de custo, depreciação de patrimônio, financeiro, compras, estoque e contabilidade integrados.",
  publisher: { "@type": "Organization", name: "Inforplace" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
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
