import React from "react";
import styles from './Button.module.scss';

type Props = {
    children?: any
    isSmall?: boolean
    onClick?: any
    className?: any
}

const ButtonLightBlue = ({children, isSmall, onClick, className}: Props) => {
    const handleButton = () => {
        if(onClick) {
            onClick();
        }
    }
    return (
        <button className={`${styles.buttonLightBlue} ${isSmall ? styles.buttonLightBlueSmall : ""} ${className}`} onClick={() => handleButton()} >
            <div className={styles.border}/>
            <div className={styles.border}/>
            <div className={styles.border}/>
            <div className={styles.border}/>
            <div className={styles.child}>
                {children}
            </div>
        </button>
    )
}

export default ButtonLightBlue;