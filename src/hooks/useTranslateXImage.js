import useScrollHandling from "@/hooks/useScrollHandling"
import { useEffect, useState } from "react"

const useTranslateXImage = () => {
    const { scrollPostion, scrollDriction } = useScrollHandling();
    const [translateXPosition, setTranslateXPosition] = useState(80);
    
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
    };
}
export default useTranslateXImage;