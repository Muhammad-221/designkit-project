/**
 * Footer Component
 * Semantic footer with accessible links.
*/
import { NavLink } from "react-router-dom";

export default function Footer (){
  return (
    <footer className="border-t bg-card" role="contentinfo">
      <div className="container px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} DesignKit. Built with accessibility in mind.
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex gap-6" role="list">
            {["Privacy", "Terms", "Accessibility"].map((item) => (
              <li key={item}>
                <NavLink
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors rounded-sm px-1 py-0.5"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};


