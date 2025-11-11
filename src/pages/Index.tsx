import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TechnologySection from "@/components/TechnologySection";
import WhyIndiaSection from "@/components/WhyIndiaSection";
import TrustSection from "@/components/TrustSection";
import HiringProcessSection from "@/components/HiringProcessSection";
import UserGuideSection from "@/components/UserGuideSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <TechnologySection />
        <WhyIndiaSection />
        <TrustSection />
        <HiringProcessSection />
        <UserGuideSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
