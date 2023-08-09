import React from 'react';
import styles from '../../styles/ServicesPage.module.scss';
import Image from 'next/image';
import { WhiteButton } from '../../components/WhiteButton';
import { GrayDivider } from '../../components/GrayDivider';
import { ProjectsCounter } from '../../components/ProjectsCounter';
import { ServicesOffer } from '../../components/ServicesOffer';







export default function ServicesPage() {
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

                <ProjectsCounter />
            
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
                />
            </div>


        </div>
    )
}
