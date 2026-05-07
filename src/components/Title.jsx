import { motion } from "framer-motion";

const divVariants = {
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
export default function TitleComp({ title, description }) {
    return(
        <motion.div
            variants={divVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
        >
            <h2 id="features-heading" className="mx-auto text-4xl font-bold max-w-3xl font-heading text-h1 mb-3">
            {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            {description}
            </p>
        </motion.div>
    )
}