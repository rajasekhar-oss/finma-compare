import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  id?: string;
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

const ServiceCard = ({ id, icon, title, description, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative scroll-mt-24 border-t border-border pt-8"
    >
      <div className="mb-4 text-secondary">{icon}</div>
      <h3 className="font-serif text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-4 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-12" />
    </motion.div>
  );
};

export default ServiceCard;
