import React, { useEffect, useRef, useState } from "react";
import styles from './PlanetCloud.module.scss';

const planet = '/assets/images/Home/Body/planet.png';
const planetBrown = '/assets/images/Home/Body/planetBrown.png'
const planetGray = '/assets/images/Home/Body/planetGray.png';
const planetOrange = '/assets/images/Home/Body/planetOrange.png';
const planetRed = '/assets/images/Home/Body/planetRed.png';
const planetBlue = '/assets/images/Home/Body/planetBlue.png';
const cloud = '/assets/images/Home/Body/cloud.png';
const cloudBrown = '/assets/images/Home/Body/cloudBrown.png';
const cloudGray = '/assets/images/Home/Body/cloudGray.png';

const PlanetCloud = () => {
    return (
        <>
            <Section id="banner-planet">
                <img data-role="banner" className={styles.planet} src={planet} alt='' />
            </Section>
            <Section id="banner-cloud">
                <img data-role="banner" className={styles.cloud} src={cloud} alt='' />
            </Section>
            <Section id="story-cloud">
                <img data-role="story" className={styles.cloud} src={cloud} alt='' />
            </Section>
            <Section id="character-cloud">
                <img data-role="character" className={styles.cloud} src={cloudGray} alt='' />
            </Section>
            <Section id="character-planet">
                <img data-role="character" className={styles.planet} src={planetGray} alt='' />
            </Section>
            <Section id="battle-cloud">
                <img data-role="battle" className={styles.cloud} src={cloudBrown} alt='' />
            </Section>
            <Section id="battle-planet">
                <img data-role="battle" className={styles.planet} src={planetBrown} alt='' />
            </Section>
            <Section id="feature-cloud">
                <img data-role="feature" className={styles.cloud} src={cloud} alt='' />
            </Section>
            <Section id="feature-planet">
                <img data-role="feature" className={styles.planet} src={planetBlue} alt='' />
            </Section>
            <Section id="market-cloud">
                <img data-role="market" className={styles.cloud} src={cloud} alt='' />
            </Section>
            <Section id="roadmap-cloud">
                <img data-role="roadmap" className={styles.cloud} src={cloud} alt='' />
            </Section>
            <Section id="social-cloud">
                <img data-role="social" className={styles.cloud} src={cloud} alt='' />
            </Section>
            <Section id="social-planet">
                <img data-role="social" className={styles.planet} src={planetRed} alt='' />
            </Section>
            <Section id="footer-planet">
                <img data-role="footer" className={styles.planet} src={planetOrange} alt='' />
            </Section>
        </>
    )
}

type Props = {
    children: any
    id: any
}

const Section = ({children, id}: Props) => {
    const domRef = useRef<any>();

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        });
        
        observer.observe(domRef.current);
        
        // return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <section data-role={id} ref={domRef} className={`${styles.section} ${isVisible ? '' : styles.invisible}`} >
            {children}
        </section>
    );
};
export default PlanetCloud;