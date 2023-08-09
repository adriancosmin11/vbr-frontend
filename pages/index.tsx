
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import { Projects } from '../components/Projects';
import { AboutUsSection } from '../components/AboutUsSection';
import axios from 'axios';
import { TextGroup } from '../components/TextGroup';
import { GrayDivider } from '../components/GrayDivider';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';

export async function getServerSideProps() {
  const [homeContentRes, partnersRes, servicesRes, aboutRes,blockchainRes,technologiesRes,projectsRes,teamMembersRes,exchangeRes,subscribeRes] = await Promise.all([
  axios.get("http://localhost/api/sectumsempra/home-content/"),
  axios.get("http://localhost/api/sectumsempra/partners/"),
  axios.get("http://localhost/api/sectumsempra/services/"),
  axios.get("http://localhost/api/sectumsempra/about/"),
  axios.get("http://localhost/api/sectumsempra/blockchain/"),
  axios.get("http://localhost/api/sectumsempra/technologies/"),

  axios.get("http://localhost/api/sectumsempra/team/members/"),
  axios.get("http://localhost/api/sectumsempra/team/"),
  axios.get("http://localhost/api/sectumsempra/exchange/"),
  axios.get("http://localhost/api/sectumsempra/subscribe/"),

]);
  const [homeContent, partners, services, about,blockchain,technologies,projects,teamMembers,exchange,subscribe] = await Promise.all([
  homeContentRes.data,
  partnersRes.data,
  servicesRes.data,
  aboutRes.data,
  blockchainRes.data,
  technologiesRes.data,
  projectsRes.data,
  teamMembersRes.data,
  // teamRes.data,
  exchangeRes.data,
  subscribeRes.data,
]);
console.log(projects)
  return {
      props:{
          homeContent,
    partners,
    services,
    about,
    blockchain,
    technologies,
    projects,
    teamMembers,
    // team,
    exchange,
    subscribe,
      }

      

  }




}





export default function Home({
  homeContent,
  partners,
  services,
  about,
  blockchain,
  technologies,
  projects,
  teamMembers,
  exchange,
  subscribe,
  error
}) {
  if (error) {
    return <div>Error fetching data</div>;
  }
  return (
    <div className={styles.main}>
      <Image src="/elipseright.png" alt="" width={600} height={100} className={styles.ElipseOne} />
      <Image src="/elipseleft.png" alt="" width={500} height={100} className={styles.ElipseTwo} />


      <div className={styles.container}>
        <Hero />
        <div className={styles.textDivider}>
          <Image src="/arrow-down.svg" width={15} height={17} alt='' />
          <p className={styles.dividerText}>Forem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <Partners partners={partners}/>
        <Projects projects={projects} />
        <AboutUsSection />
        <GrayDivider />
        <TextGroup mainHeader='Services' secondHeader='We help you to <br/> scale your business.' description='Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
 per inceptos himenaeos.' />
        <Services />
        <GrayDivider />
        <Testimonials />
        <GrayDivider />
       
        

      </div>





    </div>
  )
}
