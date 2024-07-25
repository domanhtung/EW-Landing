import React, { useEffect, useRef, useState } from "react";
import styles from './Fade.module.scss';

type Props = {
    children: any
    className?: any
}

const FadeInSection = ({children, className}: Props) => {
    const domRef = useRef<any>();

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
        // In your case there's only one element to observe:     
        if (entries[0].isIntersecting) {
        
            // Not possible to set it back to false like this:
            setVisible(true);
            
            // No need to keep observing:
            observer.unobserve(domRef?.current);
        }
        });
        
        observer.observe(domRef?.current);
        
        // return () => observer.unobserve(domRef?.current);
    }, []);

    return (<section ref={domRef} className={`${styles.fadeSection} ${isVisible ? styles.isVisible : ''} ${className}`}>{children}</section>);
};
export default FadeInSection;