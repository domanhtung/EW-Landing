import React, { useRef, useState } from "react";
import styles from './Button.module.scss';

type Props = {
    value: any
    onClick: any
    options: any
}

const SelectLightBlue = ({ value, onClick, options }: Props) => {
    const selectRef = useRef<any>();
    const [showOption, setShowOption] = useState(false);

    const onMouseDown = () => {
        selectRef.current.style.display = 'flex';
        setShowOption(true);
    }

    const onMouseLeave = () => {
        selectRef.current.style.display = 'none';
        setShowOption(false);
    }

    const handleClick = (value: any) => {
        if(onClick) {
            onClick(value);
            selectRef.current.style.display = 'none';
            setShowOption(false);
        }
    }

    return (
        <div data-role="button-light-blue" className={styles.buttonLightBlue}>
            <div className={styles.border}/>
            <div className={styles.border}/>
            <div className={styles.border}/>
            <div className={styles.border}/>
            <div onMouseDown={() => onMouseDown()} onMouseLeave={() => onMouseLeave()} className={`${styles.child} ${styles.selectChild}`}>
                {
                    !showOption ?
                    <ArrowDown />
                    :
                    <ArrowRight />
                }
                <div className={styles.currenOption}>
                    {value}
                </div>
                <div ref={selectRef} className={styles.option}>
                    {
                        options.map((option: any, index: number) => {
                            return (
                                <div onClick={() => handleClick(option.value)} key={index}>{option.title}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const ArrowDown = () => {
    return (
        <svg className={styles.arrowSelect} width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.149879 1.02773L0.901328 0.27633C1.00146 0.175989 1.1168 0.125977 1.2472 0.125977C1.37729 0.125977 1.49258 0.175989 1.59271 0.27633L7.49992 6.18322L13.4069 0.276488C13.507 0.176147 13.6223 0.126134 13.7526 0.126134C13.8829 0.126134 13.9982 0.176147 14.0983 0.276488L14.8496 1.02794C14.95 1.12807 15 1.24336 15 1.37366C15 1.50385 14.9498 1.61914 14.8496 1.71927L7.84564 8.72343C7.74551 8.82362 7.63016 8.87368 7.49992 8.87368C7.36968 8.87368 7.25454 8.82362 7.15447 8.72343L0.149879 1.71927C0.0497484 1.61909 0 1.50379 0 1.37366C0 1.24336 0.0497484 1.12807 0.149879 1.02773Z" fill="#F2C94C"/>
        </svg>
    )
}

const ArrowRight = () => {
    return (
        <svg className={styles.arrowSelect} width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.02797 14.8501L0.276574 14.0987C0.176233 13.9985 0.126221 13.8832 0.126221 13.7528C0.126221 13.6227 0.176233 13.5074 0.276574 13.4073L6.18347 7.50008L0.276732 1.59313C0.176391 1.49295 0.126379 1.37766 0.126379 1.24742C0.126379 1.11712 0.176391 1.00183 0.276732 0.901698L1.02818 0.150353C1.12831 0.0500125 1.2436 0 1.3739 0C1.50409 0 1.61938 0.0501704 1.71951 0.150353L8.72368 7.15436C8.82386 7.25449 8.87393 7.36984 8.87393 7.50008C8.87393 7.63032 8.82386 7.74546 8.72368 7.84553L1.71951 14.8501C1.61933 14.9503 1.50404 15 1.3739 15C1.2436 15 1.12831 14.9503 1.02797 14.8501Z" fill="#F2C94C"/>
        </svg>
    )
}

export default SelectLightBlue;