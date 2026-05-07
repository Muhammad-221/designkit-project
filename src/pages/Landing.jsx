/**
 * Landing Page
 * Main landing page using semantic HTML structure:
 * header > main (hero, features, contact) > footer
 * All styling uses design system tokens — no inline styles.
 */
import { Palette, Accessibility, Code2, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import ContactForm from "@/components/Contact";
import Modal from "@/components/Modal";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import TitleComp from "@/components/Title";

const divVariants = {
  hidden: {
    opacity: 0, 
    y: 20,
  },
  visible: {
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.05
    }
  }
}
/* Feature data */
const features = [
  {
    icon: Palette,
    title: "Design Tokens",
    description:
      "Centralized color, typography, and spacing tokens that keep your UI consistent across every component.",
  },
  {
    icon: Accessibility,
    title: "Accessible by Default",
    description:
      "Semantic HTML, ARIA labels, keyboard navigation, and WCAG-compliant color contrast baked into every element.",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Organized project structure with reusable components, clear separation of concerns, and zero inline styles.",
  },
  {
    icon: Layers,
    title: "Reusable Components",
    description:
      "Button, Input, Card, Modal, and Navbar — all built with variants and proper TypeScript types.",
  },
  {
    icon: Zap,
    title: "Optimized Performance",
    description:
      "Lightweight bundle, lazy-loaded assets, and efficient rendering for fast load times and smooth interactions.",
  },
];

/* Modal data */ 
const modal = [
  { label: "Primary", className: "bg-primary" },
  { label: "Accent", className: "bg-accent" },
  { label: "Success", className: "bg-success" },
  { label: "Destructive", className: "bg-destructive" },
  { label: "Muted", className: "bg-muted" },
  { label: "Secondary", className: "bg-secondary" },
]

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      {/* Navigation */}
      <Navbar/>
      <main id="main-content">
        {/* Hero Section */}
        <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <motion.div
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container mx-auto flex flex-col items-center gap-6 py-24 md:py-32 text-center max-sm:px-12"
          >
            <span className="inline-block rounded-full border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
              React + Vite + Tailwind
            </span>
            <h1 id="hero-heading" className="text-5xl font-extrablack font-heading text-display max-w-3xl">
              Build with a{" "}
              <span className="text-primary">Design System</span> That Scales
            </h1>
            <p className="max-w-xl text-lg text-body-lg text-muted-foreground">
              A fully accessible, token-driven React starter with clean
              architecture, reusable components, and WCAG-compliant contrast.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button className={"bg-primary font-semibold text-base py-5 px-7 hover:bg-primary/90 transition-colors duration-500"} size="lg">
                Explore Features
              </Button>
              <Modal
                trigger={
                  <Button variant="outline" className={"text-sm py-5 px-7 hover:text-white hover:bg-accent transition-colors duration-400"} size="lg">
                    Quick Preview
                  </Button>
                }
                title="Design System Preview"
                description="Here's a quick look at the tokens powering this project."
              >
                <div className="grid grid-cols-2 gap-3">
                  {modal.map((swatch) => (
                    <div key={swatch.label} className="flex items-center gap-3">
                      <div
                        className={`h-8 w-8 rounded-md ${swatch.className}`}
                        role="img"
                        aria-label={`${swatch.label} color swatch`}
                      />
                      <span className="text-sm">{swatch.label}</span>
                    </div>
                  ))}
                </div>
              </Modal>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-28" aria-labelledby="features-heading">
          <div className="container mx-auto">
            <TitleComp
              title="What's Inside"
              description="Everything you need to ship polished, accessible interfaces — no shortcuts."
            />
            <div className="px-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <FeatureCard
                  key={f.title}
                  icon={f.icon}
                  title={f.title}
                  description={f.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-muted/40" aria-labelledby="contact-heading">
          <div className="container mx-auto max-w-lg">
            <TitleComp
              title="Get in Touch"
              description="Have a question or want to collaborate? Drop us a line."
            />
            <div className="max-sm:px-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
