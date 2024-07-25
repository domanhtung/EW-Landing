import React from "react";
import styles from './Loading.module.scss';

const Loading = () => {
    return (
        <div className={styles.centerLoading}>
            <div className={styles.wave} />
            <div className={styles.wave} />
            <div className={styles.wave} />
            <div className={styles.wave} />
            <div className={styles.wave} />
            <div className={styles.wave} />
            <div className={styles.wave} />
            <div className={styles.wave} />
            <div className={styles.wave} />
            <div className={styles.wave} />
        </div>
    )
}

export default Loading;