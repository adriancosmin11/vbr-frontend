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
            const res = await axios.post('http://localhost/api/sectumsempra/contact', data);

            if (res.status !== 201) {
                throw Error(res.data);
            }

            return res.data
        },
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
                <div className={styles.input}>
                    <label htmlFor="full_name" className={styles.inputType}>Full name</label>
                    <input type="text" id="full_name" name="full_name" onChange={handleInputChange}></input>
                </div>
                <div className={styles.input}>
                    <label htmlFor="email" className={styles.inputType}>Email</label>
                    <input type="text" id="email" name="email" onChange={handleInputChange}></input>
                </div>
                <div className={styles.input}>
                    <label htmlFor="message" className={styles.inputType}>Message</label>
                    <input type="text" id="message" name="message" onChange={handleInputChange}></input>
                </div>
                <div className={styles.row}>
                    <p className={styles.paragraph}></p>
                    {isLoading ?? <p>Loading...</p>}
                    {isError ?? <p>{JSON.stringify(error)}</p>}
                    {isIdle ?? <WhiteButton text="Send message" onClick={handleSend} />}
                    {isSuccess ?? <p>Your message has been sent</p>}
                </div>
            </div>
        </div>
    );
}