import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Card = React.forwardRef(({ className, children, hoverEffect = false, ...props }, ref) => {
  const Component = hoverEffect ? motion.div : 'div';
  
  const hoverProps = hoverEffect ? {
    whileHover: { y: -5, transition: { duration: 0.2 } },
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" }
  } : {};

  return (
    <Component
      ref={ref}
      className={cn(
        "rounded-xl border border-gray-100 bg-white p-6 shadow-sm",
        "transition-shadow duration-300",
        hoverEffect && "hover:shadow-md",
        className
      )}
      {...hoverProps}
      {...props}
    >
      {children}
    </Component>
  );
});

Card.displayName = 'Card';

export default Card;
