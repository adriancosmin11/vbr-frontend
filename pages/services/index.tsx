import React from 'react';
import styles from '../../styles/ServicesPage.module.scss';
import Image from 'next/image';
import { WhiteButton } from '../../components/WhiteButton';
import { GrayDivider } from '../../components/GrayDivider';
import { ProjectsCounter } from '../../components/ProjectsCounter';
import { ServicesOffer } from '../../components/ServicesOffer';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import axios from 'axios';

export interface Service {
    id: number;
    technologies: Technology[];
    service_name: string;
    service_description1: string;
    service_description2: string;
    service_description3: string;
    service_image: string;
    service_image2: null;
    service_image3: null;
    service_image_alt: string;
    service_image_caption: string;
    service_icon_name: string;
    service_icon_name2: string;
    service_icon_name3: string;
    service_icon_color: string;
    service_icon_color2: string;
    service_icon_color3: string;
    service_content: string;
    service_content2: string;
    service_content3: string;
    service_button_text: string;
    service_button_link: string;
    service_button_link_target_blank: boolean;
    service_order: number;
}

export interface Technology {
    id: number;
    technology_name: string;
    technology_image: string;
    technology_image_alt: string;
    technology_image_caption: string;
    technology_image_width: string;
    technology_image_margin: string;
    technology_link: string;
    technology_link_target_blank: boolean;
    technology_order: number;
}

interface Projects {
    web_p: number;
    mobile_p: number;
    blockchain_p: number;
}

export const getServerSideProps: GetServerSideProps<{
    services?: Service[],
    projects?:Projects,
    error?: string
}> = async ({ }) => {

    const res = await Promise.all([axios.get(`http://localhost/api/sectumsempra/services/`), axios.get(`http://localhost/api/sectumsempra/team/members/`)])

    if (res.some(result => result.status !== 200)) {
        return {
            props: {
                error: 'Could not fetch data'
            }
        }
    }

    const [servicesRes,projectsRes] = res

    return {
        props: {
            services: servicesRes.data,
            projects: projectsRes.data
        }
    }
}



export default function ServicesPage({ error, services, projects }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    if (error) {
        return (
            <div>
                {error}
            </div>
        )
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.colorHeader}>Services</h1>
                    <h2 className={styles.secondHeader}>We help you to scale <br /> your business</h2>
                    <p className={styles.description}>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</p>
                    <WhiteButton text='Ask for offer' />
                </div>

                <div className={styles.designImage}>
                    <Image src="/designImage.png" alt='' width={1920} height={1080} />
                </div>
                <GrayDivider />

                <div className={styles.textDivider}>
                    <p className={styles.dividerText}>Powering the world’s best companies.</p>
                </div>

                <ProjectsCounter projects={projects}/>
                {services.map(service => (
                    <React.Fragment key={service.id}>
                        <ServicesOffer title={service.service_name}
                            description={service.service_description1}
                            firstCardImg="/pixelperfect.png"
                            secondCardImg="/person-square-heart.png"
                            thirdCardImg="/sparkles-fill.png"
                            cardHeader="Pixel perfect."
                            cardDescription="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
                            secondCardHeader="Continuous delivery, always ready."
                            thirdCardHeader="Secured infrastructure."
                            firstImageWidth="176"
                            secondImageWidth="115"
                            thirdImageWidth="107"
                        />
                    </React.Fragment>
                ))}
                {/* 
                <ServicesOffer title="Web design."
                    description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                    firstCardImg="/pixelperfect.png"
                    secondCardImg="/person-square-heart.png"
                    thirdCardImg="/sparkles-fill.png"
                    cardHeader="Pixel perfect."
                    cardDescription="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
                    secondCardHeader="Continuous delivery, always ready."
                    thirdCardHeader="Secured infrastructure."
                    firstImageWidth="176"
                    secondImageWidth="115"
                    thirdImageWidth="107"
                />
                <ServicesOffer title="Web design."
                    description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                    firstCardImg="/pixelperfect.png"
                    secondCardImg="/person-square-heart.png"
                    thirdCardImg="/sparkles-fill.png"
                    cardHeader="Pixel perfect."
                    cardDescription="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
                    secondCardHeader="Continuous delivery, always ready."
                    thirdCardHeader="Secured infrastructure."
                    firstImageWidth="176"
                    secondImageWidth="115"
                    thirdImageWidth="107"
                />
                <ServicesOffer title="Web design."
                    description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                    firstCardImg="/pixelperfect.png"
                    secondCardImg="/person-square-heart.png"
                    thirdCardImg="/sparkles-fill.png"
                    cardHeader="Pixel perfect."
                    cardDescription="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
                    secondCardHeader="Continuous delivery, always ready."
                    thirdCardHeader="Secured infrastructure."
                    firstImageWidth="176"
                    secondImageWidth="115"
                    thirdImageWidth="107"
                />
                <ServicesOffer title="Web design."
                    description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                    firstCardImg="/pixelperfect.png"
                    secondCardImg="/person-square-heart.png"
                    thirdCardImg="/sparkles-fill.png"
                    cardHeader="Pixel perfect."
                    cardDescription="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
                    secondCardHeader="Continuous delivery, always ready."
                    thirdCardHeader="Secured infrastructure."
                    firstImageWidth="176"
                    secondImageWidth="115"
                    thirdImageWidth="107"
                />
                <ServicesOffer title="Web design."
                    description="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                    firstCardImg="/pixelperfect.png"
                    secondCardImg="/person-square-heart.png"
                    thirdCardImg="/sparkles-fill.png"
                    cardHeader="Pixel perfect."
                    cardDescription="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
                    secondCardHeader="Continuous delivery, always ready."
                    thirdCardHeader="Secured infrastructure."
                    firstImageWidth="176"
                    secondImageWidth="115"
                    thirdImageWidth="107"
                /> */}
            </div>


        </div>
    )
}
