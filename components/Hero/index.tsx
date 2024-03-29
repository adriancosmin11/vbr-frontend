import React, { useState } from "react";
import styles from "../../styles/Hero.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Powerful for businesses.</h1>
            <h2 className={styles.secondTitle}>Fast for everyone.</h2>
            <p className={styles.description}>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <div className={styles.button}>
              
                    <Link href="/contact/contact-form">Ask for offer</Link>
                    <Image src="/arrow-right.svg" alt="" width={15} height={13} className={styles.arrow} />
                
            </div>

        </div>
    );
}