import React from "react";
import styles from "../../styles/ProjectsCounter.module.scss"
import { GrayDivider } from "../GrayDivider";

export const ProjectsCounter = ({projects}: {
    projects: {
        web_p: number,
        mobile_p: number,
        blockchain_p: number
    }
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>


                <div className={styles.counter}>
                    <div className={styles.description}>
                        Web projects.

                    </div>
                    <div className={styles.number}>
                        {projects.web_p}

                    </div>

                </div>
                <div className={styles.counter}>

                    <div className={styles.description}>
                        Mobile projects.

                    </div>
                    <div className={styles.number}>
                    {projects.mobile_p}

                    </div>
                </div>
                <div className={styles.counter}>

                    <div className={styles.description}>
                        Blockchain projects.

                    </div>
                    <div className={styles.number}>
                    {projects.blockchain_p}

                    </div>
                </div>
                <div className={styles.counter}>

                    <div className={styles.description}>
                        Happy clients

                    </div>
                    <div className={styles.number}>
                        250+

                    </div>
                </div>

            </div>
            <GrayDivider />
        </div>
    );
}