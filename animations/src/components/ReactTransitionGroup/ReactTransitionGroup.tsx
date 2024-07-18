import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './ReactTransitionGroup.module.css';

function ReactTransitionGroup() {
    const [inProp, setInProp] = React.useState(false);

    return (
        <div>
            <CSSTransition
                in={inProp}
                timeout={200}
                classNames={{
                    enter: styles['fade-enter'],
                    enterActive: styles['fade-enter-active'],
                    exit: styles['fade-exit'],
                    exitActive: styles['fade-exit-active'],
                }}
                unmountOnExit
            >
                <div className={styles.fade}>Hello, world!</div>
            </CSSTransition>
            <button onClick={() => setInProp(!inProp)}>
                Toggle
            </button>
        </div>
    );
}

export default ReactTransitionGroup;