import React, { useState } from "react";
import styles from "../../styles/Navbar.module.scss";
import Image from "next/image";

export const Navbar = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <Image src="/logo.png" alt="" width={25} height={32} />
                        <a href="/">VBR Labs</a>
                    </div>
                    
                    <a href="/about-us">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/">Portfolio</a>
                    <a href="/">Products</a>
                    <a href="/">Blog</a>
                    <a href="/">Academy</a>

                </div>
                <div className={styles.right}>
                    <div className={styles.button}>
                        <a href="/">Contact</a>
                    </div>

                </div>
            </div>
        </div>
    );
}