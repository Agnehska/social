/* eslint-disable react/prop-types */
import { useState } from 'react';
import './DropArea.css';

// const DropArea = ({ onDrop }) => {
const DropArea = ({ onDrop, status, index }) => {
    const [showDrop, setShowDrop] = useState(false);

    return (
        <section
            onDragEnter={() => setShowDrop(true)}
            onDragLeave={() => setShowDrop(false)}
            onDrop={() => {
                // onDrop();
                onDrop(status, index);
                setShowDrop(false);
            }}
            onDragOver={(e) => e.preventDefault()}
            className={showDrop ? 'drop_area' : 'hide_drop'}
        >
            Drop Here!
        </section>
    )
}

export default DropArea;