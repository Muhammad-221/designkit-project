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
            <div className="container mx-auto flex flex-col items-center gap-6 py-24 md:py-32 text-center max-sm:px-12">
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
                    <Button className={"bg-primary font-semibold text-base py-5 px-7"} size="lg">
                        Explore Features
                    </Button>
                    <Modal
                        trigger={
                            <Button variant="outline" className={"text-sm py-5 px-7 hover:text-white hover:bg-accent"} size="lg">
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
            </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-28" aria-labelledby="features-heading">
          <div className="container mx-auto">
            <div className="text-center mb-14">
              <h2 id="features-heading" className="mx-auto text-4xl font-bold max-w-3xl font-heading text-h1 mb-3">
                What's Inside
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                Everything you need to ship polished, accessible interfaces — no shortcuts.
              </p>
            </div>
            <div className="px-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-muted/40" aria-labelledby="contact-heading">
          <div className="container mx-auto max-w-lg">
            <div className="text-center mb-10">
              <h2 id="contact-heading" className="mx-auto text-4xl font-bold max-w-3xl font-heading text-h1 mb-3">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                Have a question or want to collaborate? Drop us a line.
              </p>
            </div>
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
