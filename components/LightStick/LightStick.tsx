import React from "react";
import styles from './LightStick.module.scss';

type Props = {
    position: any
}

const LightStick = ({ position }: Props) => {
    return (
        <div className={`${styles.lightStick} ${styles["lightStick" + position]}`}>
            <div className={styles.lightStickIn}>
                <div data-role="firefly-0"/>
                <div data-role="firefly-1"/>
                <div data-role="firefly-2"/>
                <div data-role="firefly-3"/>
                <div data-role="firefly-4"/>
                <div data-role="firefly-5"/>
                <div data-role="firefly-6"/>
            </div>
        </div>
    )
}

export default LightStick;