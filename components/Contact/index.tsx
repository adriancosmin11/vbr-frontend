import React from "react";
import styles from "../../styles/Contact.module.scss"
import Image from "next/image";
import { BlackButton } from "../BlackButton";


export const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.card}>
                    <div className={styles.head}>
                        <Image src="/mail.png" alt="mail-icon" width={36} height={36} />
                        <h1 className={styles.header}>Ask for offer.</h1>
                    </div>
                    <div className={styles.cardBody}>
                        <p className={styles.description}>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    </div>
                    <div className={styles.buttonWrap}>
                        <BlackButton text="Ask for offer" />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.head}>
                        <Image src="/message-circle.png" alt="mail-icon" width={36} height={36} />
                        <h1 className={styles.header}>Contact us.</h1>
                    </div>
                    <div className={styles.cardBody}>
                        <p className={styles.description}>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    </div>
                    <div className={styles.buttonWrap}>
                        <BlackButton text="Contact us" />
                    </div>
                </div>
            </div>



        </div>
    );
}