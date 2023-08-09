import React from "react";
import styles from "../../styles/Projects.module.scss"
import { GrayDivider } from "../GrayDivider";


export const Projects = ({projects}) => {
    console.log({projects})
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.column}>

                    <h2 className={styles.header}>Well established<br /> knowledge.</h2>

                </div>
                <div className={styles.column}>
                    <div className={styles.counter}>
                        <div className={styles.number}>
                            {projects.web_p}

                        </div>
                        <div className={styles.description}>
                            Web projects.

                        </div>
                    </div>
                    <div className={styles.counter}>
                        <div className={styles.number}>
                            {projects.mobile_p}

                        </div>
                        <div className={styles.description}>
                            Mobile projects.

                        </div>
                    </div>
                    <div className={styles.counter}>
                        <div className={styles.number}>
                            {projects.blockchain_p}

                        </div>
                        <div className={styles.description}>
                            Blockchain projects.

                        </div>
                    </div>
                </div>
            </div>
            <GrayDivider />
        </div>
    );
}