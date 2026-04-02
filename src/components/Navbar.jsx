/**
 * Navbar Component
 * Responsive navigation bar with semantic HTML and keyboard accessibility.
 */
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "Features", href: "features" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="px-5 shadow-b shadow-xs sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md" role="banner">
      <nav className="container mx-auto flex items-center justify-between py-5" aria-label="Main navigation">
        {/* Logo / Brand */}
        <h1 className="font-semibold text-2xl font-heading text-h4 text-primary focus-ring rounded-sm">
          DesignKit
        </h1>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                smooth={true} duration={500} offset={-70}
                to={link.href}
                className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-sm px-1 py-0.5"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Button className={"bg-primary font-semibold text-base py-2 px-5"} size="lg">
              Get Started
            </Button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </nav>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t">
          <ul className="container mx-auto flex flex-col gap-2 py-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  smooth={true} duration={500} offset={-70}
                  className="block py-2 px-3 rounded-md text-body text-body font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
                <Button className={"bg-primary font-semibold text-base py-2 w-full"} size="lg">
                    Get Started
                </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
