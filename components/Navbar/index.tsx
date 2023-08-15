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

                    <Link href="/about-us">About Us</Link>
                    <Link href="/services">Services</Link>
                    {/* <Link href="/">Portfolio</Link> */}
                    {/* <Link href="/">Products</Link> */}
                    <Link href="/blog">Blog</Link>
                    {/* <Link href="/">Academy</Link> */}

                </div>
                <div className={styles.right}>
                    <div className={styles.button}>
                        <Link href="/">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}