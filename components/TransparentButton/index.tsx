import React from "react";
import styles from "../../styles/TransparentButton.module.scss";
import Image from "next/image";


interface TransparentButtonProps {
    text: string,
}


export const TransparentButton: React.FC<TransparentButtonProps> = ({ text }) => {
    return (
        <div className={styles.button}>
            <a href="/" >{text}</a>
            <Image src="/arrow-right-white.svg" alt="" width={15} height={13} className={styles.arrow} />
        </div>
    );
}

