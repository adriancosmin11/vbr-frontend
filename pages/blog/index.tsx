import React from 'react';
import styles from '../../styles/BlogPage.module.scss';
import Image from 'next/image';
import { GrayDivider } from '../../components/GrayDivider';
import { BlackButton } from '../../components/BlackButton';

import axios from 'axios';
import { StyleRegistry } from 'styled-jsx';






// export async function getServerSideProps() {
//     const [teamMembersRes, partnersRes] = await Promise.all([

//         axios.get("http://localhost/api/sectumsempra/team/"),
//         axios.get("http://localhost/api/sectumsempra/partners"),



//     ]);
//     const [teamMembers, partners] = await Promise.all([
//         teamMembersRes.data,
//         partnersRes.data

//     ]);
//     return {
//         props: {
//             teamMembers,
//             partners
//         }
//     }
// }



export default function BlogPage() {
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
                            <a href='/' className={styles.filterText}>News</a>
                            <a href='/' className={styles.filterText}>Blockchain</a>
                            <a href='/' className={styles.filterText}>Tech</a>
                            <a href='/' className={styles.filterText}>Industry</a>
                            <a href='/' className={styles.filterText}>Crypto</a>
                            <a href='/' className={styles.filterText}>IT</a>
                            <a href='/' className={styles.filterText}>Team</a>
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
