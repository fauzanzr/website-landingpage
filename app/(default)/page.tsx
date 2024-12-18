export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Workflows_2 from "@/components/workflows_2";
import Features from "@/components/main_issues";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Our_Position from "@/components/our_position";
import Roadmap from "@/components/roadmap";
import Our_Value from "@/components/our_value";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Workflows_2 />
      <Our_Position />
      <Features />
      <Roadmap />
      <Our_Value />
      {/* <Cta /> */}
    </>
  );
}
