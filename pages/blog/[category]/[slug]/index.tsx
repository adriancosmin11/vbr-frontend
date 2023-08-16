import axios from 'axios'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import styles from '../../../../styles/ArticlePage.module.scss';
import Image from 'next/image';

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
    post?: BlogPost,
    error?: string
}> = async ({ params: { slug } }) => {

    const postRes = await axios.get(`http://localhost:8000/api/academy/articles/${slug}`)

    if (postRes.status !== 200) {
        return {
            props: {
                error: 'Could not fetch posts'
            }
        }
    }

    const post = postRes.data

    return {
        props: {
            post
        }
    }
}

export default function BlogPost({ error, post }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    if (error) {
        return (
            <div>{error}</div>
        )
    }

    return (

        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.bigCard}>
                    <Image src={post.article_image} className={styles.thumbnail} alt='' width={1330} height={659} />
                    <div className={styles.content}>
                        <h1 className={styles.colorText}>{post.article_tag.map(tag => tag.tag_name).join(' ')}</h1>
                        <h2 className={styles.title}>{post.article_title}</h2>
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: post.article_description }} />
                        {/* <div className={styles.rowCard}>
                            <Image src="/cipri.png" alt='' width={40} height={40} />
                            <h3 className={styles.name}>Ciprian Sutu</h3>
                            <h4 className={styles.date}>Jun 29, 2023</h4>
                        </div> */}
                    </div>
                </div>

            </div>

        </div >
    )
}