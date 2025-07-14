import { Services } from "@/components/services";
import { CaseStudies } from "@/components/case-studies";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { CTAWithDashedGridLines } from "@/components/cta";
import { Hero } from "@/components/hero";
import { FeaturedContent } from "@/components/featured-content";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <FeaturedContent />
      <Testimonials />
      <CTAWithDashedGridLines />
    </main>
  );
}
