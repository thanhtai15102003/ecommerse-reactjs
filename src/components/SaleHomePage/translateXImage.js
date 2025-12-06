import { useEffect, useState, useRef } from "react";

const useTransLateXImage = () => {
    const [scrollDriction, setScrollDriction] = useState(null);

    const [translateXPosition, setTranslateXPosition] = useState(80);
    const [scrollPostion, setScrollPosition] = useState(0);

    const prevScollPosition = useRef(0);
    const scrollChecking = () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > prevScollPosition.current) {
            setScrollDriction('down');
        } else if (currentScrollPosition < prevScollPosition.current) {
            setScrollDriction('up');
        }

        prevScollPosition.current = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
        setScrollPosition(currentScrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollChecking);

        return () => window.removeEventListener('scroll', scrollChecking);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/immutability
        handkeTranslateX();
    }, [scrollPostion]);

    const handkeTranslateX = () => {
        if (scrollDriction === 'down' && scrollPostion >= 1500) {
            setTranslateXPosition(translateXPosition <= 0 ? 0 : translateXPosition - 1);
        } else if (scrollDriction === 'up') {
            setTranslateXPosition(translateXPosition >= 80 ? 80 : translateXPosition + 1);
        }
    };

    return {
        translateXPosition
    }
};

export default useTransLateXImage;