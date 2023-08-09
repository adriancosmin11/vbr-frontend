import React from "react";
import styles from "../../styles/TextGroup.module.scss"




export const TextGroup = ({mainHeader, secondHeader, description}) => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <h1 className={styles.colorHeader}>{mainHeader}</h1>

            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <h2 className={styles.secondHeader} dangerouslySetInnerHTML={{ __html: secondHeader }}/> 
                      
                </div>
                <div className={styles.column}>
                    <p className={styles.description}>{description}</p>
                </div>

            </div>
        </div>
    );
}
