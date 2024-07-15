import { useState, useEffect } from 'react';

interface Position {
    x: number;
    y: number;
}

export const useMousePosition = (): Position => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    useEffect(() => {
        console.log('useMousePosition useEffect');
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return position;
}
