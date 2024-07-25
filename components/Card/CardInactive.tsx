import React from "react";
import styles from './Card.module.scss';

type Props = {
    children: any
    type: any
    className: any
}

const CardInactive = ({ children, className, type }: Props) => {
    return (
        <div className={`${styles.cardInactiveAnimate} ${className} ${styles["cardInactive" + type]}`}>
            <div className={styles.border}/>
            <div className={styles.border}/>
            <div className={styles.child}>
                {children}
            </div>
        </div>
    )
}
export default CardInactive;