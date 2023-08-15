import React from "react";
import styles from "../../styles/Service.module.scss";
import Image from "next/image";

export const Service = ({ title, description, imgPath }) => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.firstRow}>
                        <div className={styles.icon}>
                            <Image src={imgPath} alt="icon-service" width={20} height={20} />
                        </div>
                        <h1 className={styles.title}>{title}</h1>
                    </div>
                    <div className={styles.secondRow}>
                        <p className={styles.description}>{description}</p>
                    </div>
                </div>
                <div className={styles.column}>
                    <Image src="/arrow-right-gray.svg" alt="" width={33} height={36} className={styles.hiddenArrow} />
                </div>

            </div>

        </div>
    );
}