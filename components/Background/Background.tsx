import React from "react";
import styles from './Background.module.scss';

const stars = "/assets/images/Home/Background/Newsbackground.png";
const galaxy = "/assets/images/Home/Background/galaxyBackground.png";

const Background = () => {
    return (
        <div className={styles.background}>
            <img src={stars} alt="" />
            <img src={galaxy} alt="" />
        </div>
    )
}
export default Background;