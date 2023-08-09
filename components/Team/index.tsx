import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Team.module.scss";
import { TransparentButton } from "../TransparentButton";
import { GrayDividerFooter } from "../GrayDividerFooter";
import { GrayDivider } from "../GrayDivider";



export const Team = ({ teamMembers }) => {


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.mainHeader}>Team</h1>
                <p className={styles.description}>Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio <br /> mattis.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <TransparentButton text="Join the team" />
            </div>
            <GrayDividerFooter />

            <div className={styles.grid}>
                {teamMembers[0].team_members.map((member) => (
                    <>
                        <div className={styles.gridItem}>
                            <img src={member.team_member_image} alt={member.name} width={200} height={200} />
                            <h3 className={styles.name}>{member.team_member_name}</h3>
                            <p className={styles.position}>{member.team_member_role}</p>
                        </div>
                    </>
                ))}
            </div>
            <GrayDividerFooter />

        </div>
    );
}