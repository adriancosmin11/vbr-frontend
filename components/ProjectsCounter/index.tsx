import React from "react";
import styles from "../../styles/ProjectsCounter.module.scss"
import { GrayDivider } from "../GrayDivider";

export const ProjectsCounter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>


                <div className={styles.counter}>
                    <div className={styles.description}>
                        Web projects.

                    </div>
                    <div className={styles.number}>
                        150+

                    </div>

                </div>
                <div className={styles.counter}>

                    <div className={styles.description}>
                        Mobile projects.

                    </div>
                    <div className={styles.number}>
                        50+

                    </div>
                </div>
                <div className={styles.counter}>

                    <div className={styles.description}>
                        Blockchain projects.

                    </div>
                    <div className={styles.number}>
                        10+

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