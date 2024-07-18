import { useEffect, useRef } from 'react';
import anime from 'animejs';

function AnimeJs() {
    const ref = useRef(null);

    useEffect(() => {
        anime({
            targets: ref.current,
            translateX: 250,
            duration: 2000,
            easing: 'easeInOutQuad'
        });
    }, []);

    return (
        <div ref={ref}>
            Hello, world! Nizhnekamsk s Nami!
        </div>
    );
}

export default AnimeJs;