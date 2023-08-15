import React, { useState } from "react";
import styles from "../../styles/Footer.module.scss";
import Image from "next/image";
import { BlackButton } from "../BlackButton";
import { GrayDividerFooter } from "../GrayDividerFooter";

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.columnOne}>
                    <h1 className={styles.header}>Let's chat</h1>
                    <h2 className={styles.secondHeader}>Sorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <BlackButton to="/contact" text="Contact" />
                </div>
                <div className={styles.columnTwo}>
                    <div className={styles.row}>
                        <div className={styles.grid}>
                            <div className={styles.gridItem}>
                                <h1 className={styles.header}>Content:</h1>
                                <a href="/services" className={styles.page}>Services</a>
                                <a href="/about-us" className={styles.page}>About Us</a>
                                <a href="/blog" className={styles.page}>Blog</a>
                                {/* <a href="/academy" className={styles.page}>Academy</a> */}
                            </div>
                            <div className={styles.gridItem}>
                                <h1 className={styles.header}>Follow us:</h1>
                                <a href="/" className={styles.page}>Instagram</a>
                                <a href="/" className={styles.page}>Twitter</a>
                                <a href="https://www.facebook.com/profile.php?id=100086960532645" className={styles.page}>Facebook</a>
                                <a href="https://www.linkedin.com/company/vbrlabs/mycompany/" className={styles.page}>Linkedin</a>
                            </div>
                            <div className={styles.gridItem}>
                                <h1 className={styles.header}>Resources:</h1>
                                <a href="/" className={styles.page}>Terms and Conditions</a>
                                <a href="/" className={styles.page}>Cookies</a>
                                <a href="/" className={styles.page}>Privacy Policy</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GrayDividerFooter/>
            <div className={styles.row}>
                <div className={styles.logo}>
                    <Image src="/logoFooter.png" alt="" width={25} height={18} />
                    <h1 className={styles.logoText}>VBR Labs</h1>
                </div>
                <div className={styles.copyrightContainer}>
                    <p className={styles.copyright}>© Toate drepturile rezervate - VBR Energy Network - 2023</p>
                </div>
            </div>



        </div>
    );
}