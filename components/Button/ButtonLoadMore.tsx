import React from "react";
import styles from './Button.module.scss';

type Props = {
    onClick?: any
    loading?: boolean
    className?: any
    title: any
}

const ButtonLoadMore = ({onClick, loading, className, title}: Props) => {
    const handleClick = () => {
        if(onClick) {
            onClick();
        }
    }

    return (
        <div className={`${styles.buttonLoadMore} ${className}`}>
          <button onClick={() => handleClick()}>
            <div/>
            {
                loading ?
                "Loading ..."
                :
                title
            }
          </button>
        </div>
    )
}
export default ButtonLoadMore;