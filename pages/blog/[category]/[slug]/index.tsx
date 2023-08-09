import axios from 'axios'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'



export const getServerSideProps: GetServerSideProps<{
    post?: {
        title: string
    },
    error?: string
}> = async ({ params: { slug } }) => {

    const postRes = await axios.get(`http://localhost/api/blog/post/${slug}`)

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

export function BlogPost({ error, post }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    if (error) {
        return (
            <div>{error}</div>
        )
    }

    return (
        <div>

            <div>{post.title}</div>

        </div>
    )
}