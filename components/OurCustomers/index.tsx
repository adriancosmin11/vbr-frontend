import React from "react";
import Image from "next/image";
import styles from "../../styles/OurCustomers.module.scss";




export const OurCustomers: React.FC = ({ partners }) => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <h1 className={styles.colorText}>
                    The VBR world
                </h1>
                <h2 className={styles.mainHeader}>Our customers</h2>
                <p className={styles.paragraph}>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>

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