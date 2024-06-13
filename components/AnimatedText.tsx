'use client';

import React, { useEffect } from 'react';
import { SplitText } from '@splittext/react';
import { useSplitText } from '@splittext/react/hooks';
import { useAnimate, useInView } from 'framer-motion';

type AnimatedTextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedText({ children, className = '' }: AnimatedTextProps) {
  const [scrollScope, animate] = useAnimate();
  const isInView = useInView(scrollScope, { margin: '0px 0px -100px 0px' });
  const { scope, getScopedElements } = useSplitText();

  useEffect(() => {
    const { lines } = getScopedElements();
    if (!lines || lines.length === 0) return;

    if (isInView) {
      animate('.str-line', { y: '0%' });
    }
    // else {
    //   animate('.str-line', { y: '120%' });
    // }
  }, [isInView]);

  return (
    <div ref={scrollScope} className="lines">
      <div className="sr-only">{children}</div>
      <SplitText
        aria-hidden
        ref={scope}
        mode={['line']}
        options={{ line: { wrapper: true, wrapperProps: { className } } }}
      >
        {children}
      </SplitText>
    </div>
  );
}
