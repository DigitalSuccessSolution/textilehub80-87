import React from 'react';

const Section = ({
  id,
  children,
  className = '',
  containerClass = '',
  bgVariant = 'transparent',
}) => {
  const bgStyles = {
    transparent: 'bg-transparent',
    muted: 'bg-muted',
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-slate-100',
  };

  return (
    <section id={id} className={`py-12 md:py-16 ${bgStyles[bgVariant]} ${className}`}>
      <div className={`container-custom ${containerClass}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
