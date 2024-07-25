import React from "react";
import styles from './Button.module.scss';
import { handleOpen } from "./handle-open";

const telegram = '../../assets/images/Home/Body/icon_twitter.png';

const ButtonHelp = () => {
    return (
        <div className={styles.buttonHelp} onClick={() => handleOpen()} >
            <span />
            <span />
            <div>
                <h5>Need help?</h5>
                <img src={telegram} alt="" />
                <h6>Join us now!</h6>
            </div>
        </div>
    )
}
export default ButtonHelp;