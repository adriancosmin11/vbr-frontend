import React from "react";
import { TextGroup } from "../TextGroup";
import styles from "../../styles/AboutUsSection.module.scss";
import Image from "next/image";
import { BlackButton } from "../BlackButton";

export const AboutUsSection = () => {
    return (
        <div className={styles.container}>
            <TextGroup mainHeader='About us' secondHeader='We are a group <br/> of workers.' description='Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
 per inceptos himenaeos.' />
            <div className={styles.row}>
                <BlackButton to="/about-us" text="See our team members" />
            </div>
            <div className={styles.row}>
                <Image src="/aboutus.png" alt="" width={1600} height={700} />
            </div>
        </div>
    );
}