import React from 'react';
import styles from '../../styles/ContactPage.module.scss';
import Image from 'next/image';
import { WhiteButton } from '../../components/WhiteButton';
import { GrayDivider } from '../../components/GrayDivider';
import { Contact } from '../../components/Contact';








export default function ContactPage() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.mainHeader}>How can we help you?</h1>
                    <p className={styles.description}>Forem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Nunc vulputate libero et velit interdum.</p>
                </div>
                <Contact />
                <GrayDivider />
               
            </div>


        </div>
    )
}
