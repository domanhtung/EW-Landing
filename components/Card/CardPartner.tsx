import React from "react";
import styles from './Card.module.scss';

type Props = {
    children?: any
    onClick?: any
}

const CardPartner = ({children, onClick}: Props) => {
    const handleClick = () => {
        if(onClick) {
            onClick();
        }
    }

    return (
        <div className={styles.cardPartner} onClick={() => handleClick()} >
            <span />
            <span />
            <span />
            <span />
            {children}
        </div>
    )
}
export default CardPartner;