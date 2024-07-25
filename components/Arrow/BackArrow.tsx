import React from "react";

type Props = {
    className?: any
    onClick?: any
}

const BackArrow = ({className}: Props) => {
    return (
        <svg className={className} width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 10.15H5.13L12.69 2.59001L10.8 0.700012L0 11.5L10.8 22.3L12.69 20.41L5.13 12.85H27V10.15Z" fill="#F2F2F2"/>
        </svg>
    )
}
export default BackArrow;