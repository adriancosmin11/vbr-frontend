import React from "react";
import Image from "next/image";
import styles from "../../styles/Services.module.scss";
import { Service } from "../Service";

export const Services = () => {
    return (
        <div className={styles.container}>
            <Service title='Web design.' imgPath="/iconWeb.png" description='Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.' />
            <Service title='Web Development.' imgPath="/webDev.png" description='Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.'/>
            <Service title='Mobile development.' imgPath="/mobileDev.png" description='Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.' />
            <Service title='DevOps.' imgPath="/devOps.png" description='Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.' />
            <Service title='Blockchain development.' imgPath="/blockchainDev.png" description='Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent.' />
        </div>
    );
}