import React, { ChangeEvent } from "react";
import styles from "../../styles/ContactForm.module.scss"
import Image from "next/image";
import { BlackButton } from "../BlackButton";
import { WhiteButton } from "../WhiteButton";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";


interface ContactData {
    full_name: string;
    email: string;
    message: string;
}


export const ContactForm = () => {


    const { useState } = React;

    const [contactData, setContactData] = useState<ContactData>({
        full_name: '',
        email: '',
        message: ''
    })

    const { isLoading, isError, isSuccess, mutate, error, isIdle } = useMutation({
        mutationFn: async (data: ContactData) => {
            const res = await axios.post('/api/contact/', data);

            if (res.status !== 201) {
                throw Error(res.data);
            }

            return res.data
        },
    });


    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setContactData(prevState => {
            prevState[name] = value;
            return prevState;
        })
    }

    const handleSend = () => {
        mutate(contactData);
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.headerText}>Tell us how can we help you</h1>
                </div>
                <div className={styles.divider}></div>

                <div className={styles.inputBox}>
                    <label htmlFor="full_name" className={styles.inputType}>Full name</label>
                    <input type="text" id="full_name" name="full_name" onChange={handleInputChange} className={styles.input} ></input>
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="email" className={styles.inputType}>Email</label>
                    <input type="text" id="email" name="email" onChange={handleInputChange} className={styles.input}></input>
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="message" className={styles.inputType}>Message</label>
                    <textarea rows={4} id="message" name="message" onChange={handleInputChange} className={styles.input}></textarea>
                </div>
                <div className={styles.row}>
                    <p className={styles.paragraph}>You can also email us at contact@vbrlabs.io</p>
                    {isLoading && <p className={styles.paragraph}>Loading...</p>}
                    {isError && <p className={styles.paragraph}>Something went wrong</p>}
                    {isIdle && <WhiteButton text="Send message" onClick={handleSend} />}
                    {isSuccess && <p className={styles.paragraph}>Your message has been sent</p>}
                </div>


            </div>

        </div>
    );
}