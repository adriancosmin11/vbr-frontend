import React from "react";
import styles from "../../styles/WhiteButton.module.scss";
import Image from "next/image";


interface WhiteButtonProps {
    text: string,
}


export const WhiteButton: React.FC<WhiteButtonProps> = ({ text }) => {
    return (
        <div className={styles.button}>
            <a href="/" >{text}</a>
        </div>
    );
}

