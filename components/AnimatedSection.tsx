import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  fullWidth?: boolean;
}

export const AnimatedSection: React.FC<Props> = ({ children, className = "", delay = 0, fullWidth = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.17, 0.55, 0.55, 1], delay }}
      className={`${fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-6'} ${className}`}
    >
      {children}
    </motion.div>
  );
};
