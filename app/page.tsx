import { Services } from "@/components/services";
import { CaseStudies } from "@/components/case-studies";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { CTAWithDashedGridLines } from "@/components/cta";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonials />
      <CTAWithDashedGridLines />
    </main>
  );
}
