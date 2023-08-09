import React from "react";
import styles from "../../styles/ContactForm.module.scss"
import Image from "next/image";
import { BlackButton } from "../BlackButton";
import { WhiteButton } from "../WhiteButton";


export const ContactForm = () => {
    return (
        <div className={styles.container}>
           <div className={styles.card}>
            <div className={styles.header}>
                <h1 className={styles.headerText}>Tell us how can we help you</h1>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.inputBox}>
                <label htmlFor="name" className={styles.inputType}>Full name</label>
                <input type="text" id="name"  className={styles.input}></input>
                
            </div>
            <div className={styles.inputBox}>
                <label htmlFor="name" className={styles.inputType}>Email</label>
                <input type="text" id="name"  className={styles.input}></input>
            </div>
            <div className={styles.inputBox}>
                <label htmlFor="name" className={styles.inputType}>Message</label>
                <input type="text" id="name"  className={styles.input}></input>
            </div>
            <div className={styles.row}>
                <p className={styles.paragraph}>You can also email us at contact@vbrlabs.io</p>
                <WhiteButton text="Send message"/>
            </div>
           </div>
        </div>
    );
}