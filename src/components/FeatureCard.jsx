/**
 * FeatureCard Component
 * Accessible card with icon, title, and description.
 * Uses semantic markup and design system tokens.
 */
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0, 
    scale: 0.8
  },
  visible: {
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3,
      delay: 0.05
    }
  }
}

export default function FeatureCard ({ icon: Icon, title, description }){
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      className="hover:shadow-md group rounded-lg border bg-card p-6 shadow-card transition-all duration-400 hover:-translate-y-1"
    >
      {/* Icon container */}
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-400 group-hover:bg-primary group-hover:text-primary-foreground"
        aria-hidden="true"
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-heading text-card-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.article>
  );
};


