import React from "react";
import Image from "next/image";
import styles from "../../styles/Partners.module.scss";

// const partnerImagesUrls = [
//     '/spotify.png',
//     '/webflow.png',
//     '/coinbase.png',
//     '/slack.png',
//     '/dropbox.png',
//     '/zoom.png',
//     '/spotify.png',
//     '/webflow.png',
//     '/coinbase.png',
//     '/slack.png',
//     '/dropbox.png',
//     '/zoom.png',

// ];


export const Partners: React.FC = ({partners}) => {
    return (
        <div className={styles.container}>

            <p className={styles.description}>Powering the world’s best companies.<br />
                From next-gen startups to established enterprises.</p>
            <div className={styles.grid}>
                {partners.map((partner) => (
                    <div className={styles.gridItem}>
                    <img src={partner.partner_image} alt="company-logo" width={140} height={48} />
                    </div>
                    
                ))}


            </div>

        </div>
    );
}