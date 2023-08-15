import React from 'react';
import styles from '../../../styles/BlogPage.module.scss';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'



export const getServerSideProps: GetServerSideProps<{
    posts?: {
        title: string
    }[],
    error?: string,
    category: string | string[]
}> = async ({ params: { category } }) => {

   // const postsRes = await axios.get(`http://localhost/api/blog/${category}`)

    //if (postsRes.status !== 200) {
        return {
            props: {
                error: 'Could not fetch posts',
                category
            }
        }
    //}

    const posts = postsRes.data

    return {
        props: {
            posts,
            category
        }
    }
}

export default function BlogCategory({ error, posts, category }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    //if (error) {
    //    return (
    //        <div>{error}</div>
    //    )
    //}

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <h1 className={styles.header}>Blog</h1>
                </div>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <div className={styles.filterHeader}>
                            <h2 className={styles.filterHeaderText}>Category</h2>
                        </div>
                        <div className={styles.filterWrap}>
                            <Link href='/blog/news' className={`${styles.filterText}  ${category === 'news' ? styles.active : ''}`}>News</Link>
                            <Link href='/blog/blockchain' className={`${styles.filterText}  ${category === 'blockchain' ? styles.active : ''}`}>Blockchain</Link>
                            <Link href='/blog/tech' className={`${styles.filterText}  ${category === 'tech' ? styles.active : ''}`}>Tech</Link>
                            <Link href='/blog/industry' className={`${styles.filterText}  ${category === 'industry' ? styles.active : ''}`}>Industry</Link>
                            <Link href='/blog/crypto' className={`${styles.filterText}  ${category === 'crypto' ? styles.active : ''}`}>Crypto</Link>
                            <Link href='/blog/it' className={`${styles.filterText}  ${category === 'it' ? styles.active : ''}`}>IT</Link>
                            <Link href='/blog/team' className={`${styles.filterText}  ${category === 'team' ? styles.active : ''}`}>Team</Link>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.row}>
                            <div className={styles.bigCard}>
                                <Image src="/bigcardphoto.png" alt='' width={1330} height={659} />
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
                        <div className={styles.row}>
                            <div className={styles.grid}>
                                <div className={styles.blogCard}>
                                    <Image src="/postphoto.png" alt='' width={573} height={445} />
                                    <h1 className={styles.colorText}>Team</h1>
                                    <h2 className={styles.title}>How we build our products</h2>
                                    <p className={styles.description}>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                    <div className={styles.rowCard}>
                                        <Image src="/cipri.png" alt='' width={40} height={40} />
                                        <h3 className={styles.name}>Ciprian Sutu</h3>
                                        <h4 className={styles.date}>Jun 29, 2023</h4>
                                    </div>
                                </div>
                                <div className={styles.blogCard}>
                                    <Image src="/postphoto2.png" alt='' width={550} height={275} />
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
                </div>
            </div>
        </div>
    )
}