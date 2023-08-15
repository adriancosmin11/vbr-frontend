import React from 'react';
import styles from '../../styles/BlogPage.module.scss';
import Image from 'next/image';

import axios from 'axios';
import Link from 'next/link';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

export interface BlogPost {
    id: number;
    article_title: string;
    article_slug: string;
    article_description: string;
    article_meta_description: string;
    article_image: string;
    article_category: ArticleCategory;
    article_tag: any[];
    article_priority: boolean;
}

export interface ArticleCategory {
    id: number;
    category_name: string;
    category_slug: string;
    category_description: string;
    category_image: string;
}



export const getServerSideProps: GetServerSideProps<{
    posts?: BlogPost[],
    error?: string,
    latest?: BlogPost
}> = async () => {

    const postsRes = await axios.get(`http://localhost:8000/api/academy/articles/`)

    if (postsRes.status !== 200) {
        return {
            props: {
                error: 'Could not fetch posts'
            }
        }
    }

    console.log(postsRes.data);


    const posts = postsRes.data

    return {
        props: {
            posts,
            latest: posts.find(post => post.article_priority)
        }
    }
}

export default function BlogPage({ error, posts, latest }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const removeHTMLTags = (str: string) => {
        return str.replace(/<[^>]*>?/gm, '');
    }

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
                            <Link href='/blog/news' className={styles.filterText}>News</Link>
                            <Link href='/blog/blockchain' className={styles.filterText}>Blockchain</Link>
                            <Link href='/blog/tech' className={styles.filterText}>Tech</Link>
                            <Link href='/blog/industry' className={styles.filterText}>Industry</Link>
                            <Link href='/blog/crypto' className={styles.filterText}>Crypto</Link>
                            <Link href='/blog/it' className={styles.filterText}>IT</Link>
                            <Link href='/blog/team' className={styles.filterText}>Team</Link>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.row}>

                            <div className={styles.bigCard}>
                                <Image src={latest.article_image} className={styles.image} alt='' width={1330} height={659} />
                                <h1 className={styles.colorText}>{latest.article_category.category_name}</h1>
                                <h2 className={styles.title}>{latest.article_title}</h2>
                                <p className={styles.description}>{latest.article_meta_description}</p>
                                {/* <div className={styles.rowCard}>
                                    <Image src="/cipri.png" alt='' width={40} height={40} />
                                    <h3 className={styles.name}>Ciprian Sutu</h3>
                                    <h4 className={styles.date}>Jun 29, 2023</h4>
                                </div> */}
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.grid}>
                                {posts.map((post) => (
                                    <Link className={styles.blogCard} href={`/blog/${post.article_category.category_slug}/${post.article_slug}`}>
                                        <Image src={post.article_image} className={styles.image} alt='' width={573} height={445} />
                                        <h1 className={styles.colorText}>{post.article_category.category_name}</h1>
                                        <h2 className={styles.title}>{post.article_title}</h2>
                                        <p className={styles.description}>{post.article_meta_description}</p>
                                        {/* <div className={styles.rowCard}>
                                         <Image src="/cipri.png" alt='' width={40} height={40} />
                                         <h3 className={styles.name}>Ciprian Sutu</h3>
                                         <h4 className={styles.date}>Jun 29, 2023</h4>
                                     </div> */}
                                    </Link>
                                ))}
                                {/* <div className={styles.blogCard}>
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

