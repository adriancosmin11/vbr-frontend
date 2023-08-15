import React, { useState } from "react";
import styles from "../../styles/Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <Image src="/logo.png" alt="" width={25} height={32} />
                        <Link href="/">VBR Labs</Link>
                    </div>
                    
                
                    <div className={styles.links}>
                    <Link href="/about-us">About Us</Link>
                    <Link href="/services">Services</Link>
                    {/* <a href="/">Portfolio</a> */}
                    {/* <a href="/">Products</a> */}
                    <Link href="/blog">Blog</Link>
                    {/* <a href="/">Academy</a> */}
                    </div>

                </div>
                <div className={styles.right}>
                    <Link href="contact" className={styles.button}>
                        <span>Contact</span>
                    </Link>

                </div>
            </div>
        </div>
    );
}