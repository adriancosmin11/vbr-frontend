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
    article_tag: ArticleTag[];
    article_priority: boolean;
}

export interface ArticleCategory {
    id: number;
    category_name: string;
    category_slug: string;
    category_description: string;
    category_image: string;
}
export interface ArticleTag {
    id: number;
    tag_name: string;
}



export const getServerSideProps: GetServerSideProps<{
    posts?: BlogPost[],
    categories?: ArticleTag[],
    error?: string,
    latest?: BlogPost | null
}> = async ({ }) => {

    const [postsRes, categoryRes] = await Promise.allSettled([
        axios.get(`http://localhost:8000/api/academy/articles`),
        axios.get(`http://localhost:8000/api/academy/tags`),
    ])


    if (postsRes.status !== 'fulfilled' || categoryRes.status !== 'fulfilled') {
        return {
            props: {
                error: 'Could not fetch posts',
            }
        }
    }

    const posts: BlogPost[] = postsRes.value.data;

    const categories = categoryRes.value.data;


    return {
        props: {
            posts,
            categories,
            latest: posts.find(post => post.article_priority) || posts[0] || null
        }
    }
}

export default function BlogPage({ error, posts, latest, categories }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    console.log({ categories });

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
                            {categories.map((_category) => (
                                <Link href={`/blog/${_category.tag_name.toLowerCase()}`} className={`${styles.filterText}`} key={_category.id}>{_category.tag_name}</Link>
                            ))}
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.row}>

                            <Link className={styles.bigCard} href={`/blog/${latest.article_tag[0].tag_name.toLowerCase()}/${latest.article_slug}`}>
                                <Image src={latest.article_image} className={styles.image} alt='' width={1330} height={659} />
                                <h1 className={styles.colorText}>{latest.article_tag.map(tag => tag.tag_name).join(' ')}</h1>
                                <h2 className={styles.title}>{latest.article_title}</h2>
                                <p className={styles.description}>{latest.article_meta_description}</p>
                                {/* <div className={styles.rowCard}>
                                    <Image src="/cipri.png" alt='' width={40} height={40} />
                                    <h3 className={styles.name}>Ciprian Sutu</h3>
                                    <h4 className={styles.date}>Jun 29, 2023</h4>
                                </div> */}
                            </Link>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.grid}>
                                {posts.map((post) => (
                                    <Link className={styles.blogCard} href={`/blog/${post.article_tag[0]?.tag_name.toLowerCase() || 'tag'}/${post.article_slug}`} key={post.id}>
                                        <Image src={post.article_image} className={styles.image} alt='' width={573} height={445} />
                                        <h1 className={styles.colorText}>{post.article_tag.map(tag => tag.tag_name).join(' ')}</h1>
                                        <h2 className={styles.title}>{post.article_title}</h2>
                                        <p className={styles.description}>{post.article_meta_description}</p>
                                        {/* <div className={styles.rowCard}>
                                         <Image src="/cipri.png" alt='' width={40} height={40} />
                                         <h3 className={styles.name}>Ciprian Sutu</h3>
                                         <h4 className={styles.date}>Jun 29, 2023</h4>
                                     </div> */}
                                    </Link>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

