import { useEffect, useRef } from 'react';
import anime from 'animejs';

function AnimeJs1() {
    const ref = useRef(null);

    useEffect(() => {
        anime({
            targets: '.staggering-axis-grid-demo .el',
            translateX: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
            translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
            rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: 'center', axis: 'x' }),
            delay: anime.stagger(200, { grid: [14, 5], from: 'center' }),
            easing: 'easeInOutQuad'
        });
    }, []);

    return (
        <div ref={ref}>
            Hello, world! Nizhnekamsk s Nami!
        </div>
    );
}

export default AnimeJs1;