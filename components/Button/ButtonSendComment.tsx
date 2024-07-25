import React from "react";
import styles from './Button.module.scss';

type Props = {
    onClick?: any
    loading?: boolean
    className?: any
}

const ButtonSendComment = ({onClick, loading, className}: Props) => {
    const handleClick = () => {
        if(onClick) {
            onClick();
        }
    }

    return (
        <div className={`${styles.buttonLoadMore} ${className} ${styles.buttonSend}`}>
          <button onClick={() => handleClick()}>
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4579 1.4829C14.6329 1.40273 14.829 1.54202 14.811 1.73362L13.4305 16.3912C13.4125 16.5828 13.1938 16.683 13.0369 16.5716L1.03328 8.04725C0.876366 7.93582 0.898923 7.69632 1.07388 7.61615L14.4579 1.4829Z" stroke="white" strokeWidth="1.5"/>
            </svg>

            {
                loading ?
                "Loading ..."
                :
                "Send"
            }
          </button>
        </div>
    )
}
export default ButtonSendComment;