import { useState, useEffect, useRef } from 'react';

const useScrollHandling = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const prevScrollPosition = useRef(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollChecking = () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > prevScrollPosition.current) {
            setScrollDirection('down');
        } else if (currentScrollPosition < prevScrollPosition.current) {
            setScrollDirection('up');
        }

        prevScrollPosition.current = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
        setScrollPosition(currentScrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollChecking);

        return () => window.removeEventListener('scroll', scrollChecking);
    }, []);

    return {
        scrollDirection,
        scrollPosition
    };
};

export default useScrollHandling;
