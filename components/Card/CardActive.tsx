import React from "react";
import styles from './Card.module.scss';

type Props = {
    children?: any
    type?: any
    onClick?: any
    className?: any
    disabled?: boolean
}

const CardActive = ({ children, type, onClick, className, disabled }: Props) => {
    const handleClick = () => {
        if(onClick && !disabled) {
            onClick();
        }
    }
    return (
        <div
            onClick={() => handleClick()}
            className={`
                ${styles.card} ${styles["card" + type]} ${className ? className : ''}
            `}
            data-role={`card-active-${type}`}
        >
            <div className={styles.border}/>
            <div className={styles.border}/>
            <div className={styles.border}/>
            <div className={styles.border}/>
            <div className={styles.child}>
                {children}
            </div>
        </div>
    )
}

export default CardActive;