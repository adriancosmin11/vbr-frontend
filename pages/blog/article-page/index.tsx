import React from 'react';
import styles from '../../../styles/ArticlePage.module.scss';
import Image from 'next/image';

import axios from 'axios';
import Link from 'next/link';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'



export const getServerSideProps: GetServerSideProps<{
    posts?: {
        title: string
    }[],
    error?: string
}> = async ({ }) => {

    //const postsRes = await axios.get(`http://localhost/api/blog`)

    //if (postsRes.status !== 200) {
    return {
        props: {
            error: 'Could not fetch posts'
        }
    }
    //}

    const posts = postsRes.data

    return {
        props: {
            posts
        }
    }
}

export default function BlogPage({ error, posts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.bigCard}>
                    <Image src="/bigcardphoto.png" alt='' width={1330} height={659} />
                    <div className={styles.content}>
                        <h1 className={styles.colorText}>Team</h1>
                        <h2 className={styles.title}>How we build our products</h2>
                        <p className={styles.description}>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        <div className={styles.rowCard}>
                            <Image src="/cipri.png" alt='' width={40} height={40} />
                            <h3 className={styles.name}>Ciprian Sutu</h3>
                            <h4 className={styles.date}>Jun 29, 2023</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    )
}

