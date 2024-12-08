export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Workflows_2 from "@/components/workflows_2";
import Workflows_3 from "@/components/workflows_3";
import Features from "@/components/main_issues";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Workflows_2 />
      <Workflows_3 />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
