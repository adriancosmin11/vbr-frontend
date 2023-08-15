import React from 'react';
import styles from '../../styles/AboutUsPage.module.scss';
import Image from 'next/image';
import { BlackButton } from '../../components/BlackButton';
import { Team } from '../../components/Team';
import axios from 'axios';
import { OurCustomers } from '../../components/OurCustomers';

export async function getServerSideProps() {
    const [teamMembersRes, partnersRes] = await Promise.all([
        axios.get("http://localhost:8000/api/sectumsempra/team/"),
        axios.get("http://localhost:8000/api/sectumsempra/partners"),
    ]);
    const [teamMembers, partners] = await Promise.all([
        teamMembersRes.data,
        partnersRes.data

    ]);
    return {
        props: {
            teamMembers,
            partners
        }
    }
}



export default function AboutUsPage({ teamMembers, partners }) {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.backgroundImage}>
                    <Image src="/backgroundaboutus.png" alt='' width={1920} height={1} />
                </div>
                <div className={styles.head}>
                    <div className={styles.row}>
                        <BlackButton text='Discover our method' />
                    </div>
                    <div className={styles.row}>
                        <h1 className={styles.header}>We unlock opportunities for businesses<br /> through <span className={styles.colorText}>solid products and knowledge.</span></h1>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.description}>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br /> vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <Team teamMembers={teamMembers} />
            </div>
            <div className={styles.container}>
                <OurCustomers partners={partners} />
            </div>


        </div>
    )
}
