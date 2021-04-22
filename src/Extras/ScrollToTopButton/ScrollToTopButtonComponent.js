import React, { useState } from 'react';
import "./scrollbutton.css";
import { scrollToTop } from "./scrolltop.js";

export const ScrollToTopButtonComponent = () => {
    const [visible, setVisible] = useState(false);

    document.addEventListener("scroll", () => {
        const new_state = window.pageYOffset > 300;
        if(new_state !== visible) {
            setVisible(new_state);
        }
    });

    
    return (
        <>
            { visible && (
                <button 
                    onClick={ scrollToTop }
                    className="scroll-button shadow animate__animated animate__zoomInUp animate__slow"
                    title="Go to top"
                >
                    <i className="fas fa-chevron-up fa-2x"></i>
                </button>
            )}
        </>
    )
}
