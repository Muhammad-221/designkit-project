/**
 * FeatureCard Component
 * Accessible card with icon, title, and description.
 * Uses semantic markup and design system tokens.
 */

export default function FeatureCard ({ icon: Icon, title, description, className }){
  return (
    <article className="hover:shadow-md group rounded-lg border bg-card p-6 shadow-card transition-all hover:-translate-y-1">
      {/* Icon container */}
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
        aria-hidden="true"
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-heading text-card-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </article>
  );
};


