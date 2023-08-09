import React, { ButtonHTMLAttributes } from "react";
import styles from "../../styles/WhiteButton.module.scss";
import Link from "next/link";


interface WhiteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string,
    to?: string
}


export const WhiteButton: React.FC<WhiteButtonProps> = ({ text, to, ...props }) => {

    if (to) {
        <Link href={to} className={styles.button}>
            {text}
        </Link>
    }

    return (
        <button className={styles.button} {...props}>
            {text}
        </button>
    );
}

