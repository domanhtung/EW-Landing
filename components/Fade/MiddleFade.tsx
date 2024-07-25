import React, { useEffect, useRef, useState } from "react";
import styles from './Fade.module.scss';

type Props = {
    children: any
    className?: any
}

const MiddleFade = ({children, className}: Props) => {
    const domRef = useRef<any>();

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }, {rootMargin: "-50% 0px -40% 0px"});
        
        observer.observe(domRef?.current);
        
        // return () => observer.unobserve(domRef?.current);
    }, []);

    return (<section ref={domRef} className={`${styles.middleFadeSection} ${isVisible ? styles.isVisible : ''} ${className}`}>{children}</section>);
};
export default MiddleFade;