import React from "react";
import styles from "../../styles/ServicesOffer.module.scss";
import Image from "next/image";

export const ServicesOffer = ({ firstImageWidth, secondImageWidth, thirdImageWidth, title, description, firstCardImg, secondCardImg, thirdCardImg, cardHeader, cardDescription, secondCardHeader, thirdCardHeader, }) => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <h1 className={styles.header}>{title}</h1>
                    <h2 className={styles.secondHeader}>{description}</h2>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.card}>
                    <div className={styles.imageWrap}>
                        <img src={firstCardImg} width={firstImageWidth} alt="" />
                    </div>
                    <div className={styles.cardHeader}>{cardHeader}</div>
                    <div className={styles.cardDescription}>{cardDescription}</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.imageWrap}>
                        <img src={secondCardImg} width={secondImageWidth} alt="" />
                    </div>
                    <div className={styles.cardHeader}>{secondCardHeader}</div>
                    <div className={styles.cardDescription}>{cardDescription}</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.imageWrap}>
                        <img src={thirdCardImg} width={thirdImageWidth} alt="" />
                    </div>
                    <div className={styles.cardHeader}>{thirdCardHeader}</div>
                    <div className={styles.cardDescription}>{cardDescription}</div>
                </div>
            </div>
        </div>
    );
}