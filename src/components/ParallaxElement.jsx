import React, { useEffect, useRef, useState } from 'react';

/**
 * ParallaxElement
 * Wrapper component to apply a simple vertical parallax effect to its children.
 * 
 * @param {React.ReactNode} children - Content to animate
 * @param {number} speed - Speed multiplier (0.1 = slow, 0.5 = fast). Negative values reverse direction.
 * @param {string} className - Optional wrapper class
 */
const ParallaxElement = ({ children, speed = 0.2, className = '' }) => {
    const [offset, setOffset] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        let frameId;

        const handleScroll = () => {
            // Only animate if element is somewhat in view or close to top
            // For hero specifically, we start at 0
            const scrollY = window.scrollY;

            // Calculate translation: scrollY * speed
            // If speed is 0.2, scrolling down 100px moves the element 20px down (slower than scroll)
            // rendering it "further away".
            const translation = scrollY * speed;

            // Use requestAnimationFrame for performance
            frameId = requestAnimationFrame(() => {
                setOffset(translation);
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (frameId) cancelAnimationFrame(frameId);
        };
    }, [speed]);

    return (
        <div
            ref={ref}
            className={className}
            style={{ transform: `translateY(${offset}px)`, willChange: 'transform' }}
        >
            {children}
        </div>
    );
};

export default ParallaxElement;
