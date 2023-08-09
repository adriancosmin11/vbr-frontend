import React from "react";
import styles from "../../styles/BlackButton.module.scss";
import Image from "next/image";


interface BlackButtonProps {
    text: string,
}


export const BlackButton: React.FC<BlackButtonProps> = ({ text }) => {
    return (
        <div className={styles.button}>
            <a href="/" >{text}</a>
            <Image src="/arrow-right-white.svg" alt="" width={15} height={13} className={styles.arrow} />
        </div>
    );
}

