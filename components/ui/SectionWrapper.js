import React from 'react';
import { cn } from '@/lib/utils';

const SectionWrapper = React.forwardRef(({ className, id, children, bg = 'white', spacing = 'major', ...props }, ref) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50',
  };

  const spacings = {
    major: 'py-24',
    minor: 'py-16',
    none: '',
  };

  return (
    <section
      id={id}
      ref={ref}
      className={cn(backgrounds[bg], spacings[spacing], className)}
      {...props}
    >
      {children}
    </section>
  );
});

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;
