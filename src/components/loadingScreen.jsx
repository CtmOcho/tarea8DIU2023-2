import React, { useEffect, useState } from 'react';
import '../stylesheets/styles.css';
import BeatLoader from "react-spinners/BeatLoader";

const LoadingScreen = () => {
    const [overlayVisible, setOverlayVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOverlayVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures this effect runs once on component mount
    return (
        <div>
            {overlayVisible && <div className="white-overlay"><BeatLoader color="#36d7b7" /></div>}
        </div>
    );
}

export default LoadingScreen;

