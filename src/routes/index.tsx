import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  About,
  Contact,
  Faq,
  FinalCta,
  Footer,
  Portfolio,
  Pricing,
  Process,
  Services,
  Testimonials,
  Tools,
  TrustStrip,
  Why,
} from "@/components/site/Sections";

const title = "The Research Companion | GIS, Scientific Visualization & Research Support";
const description =
  "The Research Companion helps researchers transform GIS data, scientific information and complex research outputs into clear maps, visualizations, scientific figures and interactive web maps.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "The Research Companion",
          description,
          slogan: "Turning Research Data into Clear, Powerful Visuals.",
          areaServed: "Worldwide",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Tools />
        <Portfolio />
        <Process />
        <Why />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
