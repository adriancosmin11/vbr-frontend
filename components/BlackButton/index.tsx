import React, { ButtonHTMLAttributes } from "react";
import styles from "../../styles/BlackButton.module.scss";
import Image from "next/image";
import Link from "next/link";


interface BlackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    to?: string
}


export const BlackButton: React.FC<BlackButtonProps> = ({ text, to }) => {

    if (to) {
        return (
            <Link className={styles.button} href={to}>
                <span>{text}</span>
                <Image src="/arrow-right-white.svg" alt="" width={15} height={13} className={styles.arrow} />
            </Link>
        );
    }

    return (
        <button className={styles.button}>
            <span>{text}</span>
            <Image src="/arrow-right-white.svg" alt="" width={15} height={13} className={styles.arrow} />
        </button>
    );
}

