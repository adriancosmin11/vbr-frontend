import React from 'react';
import styles from '../../../styles/ContactFormPage.module.scss';
import Image from 'next/image';
import { WhiteButton } from '../../../components/WhiteButton';
import {ContactForm} from '../../../components/ContactForm';








export default function ContactFormPage() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.head}>
                        <h1 className={styles.colorHeader}>Contact</h1>
                        <h2 className={styles.secondHeader}>We are here for you 24/7</h2>
                        <p className={styles.description}>Porem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                </div>
                <div className={styles.column}>
                    <ContactForm />
                </div>
            </div>


        </div>
    )
}
