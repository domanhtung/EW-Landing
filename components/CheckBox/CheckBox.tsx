import React, { useState } from "react";
import styles from './CheckBox.module.scss';

type Props = {
    className?: any
    onClick?: any
    value?: any
    checked?: any
}

const CheckBox = ({ className, onClick, value, checked }: Props) => {
    const handleCheck = () => {
        onClick(value)
    }

    const handleClassName = () => {
        return className ? `${styles.checkBox} ${className}` : styles.checkBox;
    }

    return (
        <div data-role={checked ? "checked" : "uncheck"} className={handleClassName()} onClick={() => handleCheck()} />
    )
}
export default CheckBox;