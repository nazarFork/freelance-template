import React from 'react';
import NavbarMenu from './layout/NavbarMenu';
import { Grid } from '@mui/material';
import StandardLeft from './view/hero-standard/StandardLeft';
import StandardRight from './view/hero-standard/StandardRight';
import FeatureLeft from './view/features/FeatureLeft';
import FeatureRight from './view/features/FeatureRight';
import Knowledge from './view/knowledge/Knowledge';
import { AssignmentIndOutlined, BusinessCenter, CampaignOutlined, Checkroom } from '@mui/icons-material';
import Steps from './view/steps/Steps';
import Resources from './view/resources/Resources';
import resourceimg from './img/resource.PNG';
import Reviews from './view/reviews/Reviews';
import woman from './img/woman.png';
import man from './img/man.png';
import Elevate from './view/elevate/Elevate';
import Pricing from './view/Pricing/Pricing';
import Author from './view/author/Author';
import Footer from './layout/Footer';

export default function App() {

  const know_data = [
    { startIcon: <BusinessCenter fontSize='100' />, title: 'Expert Guidance', description: 'Navigate the digital landscape with expert strategies for a successful freelancing career.' },
    { startIcon: <Checkroom />, title: 'Financial Intelligence', description: 'Master financial strategies for stable income and long-term prosperity.' },
    { startIcon: <Checkroom />, title: 'Balanced Living', description: 'Practical tips for a fulfilling work-life balance, ensuring well-being in the freelancing journey.' },
  ];

  const step_data = [
    { startIcon: <Checkroom fontSize='large' />, title: 'Discover Your Profitable Niche', description: 'Identify and specialize in the services that showcase your unique skills and strengths, ensuring they resonate with market demand.' },
    { startIcon: <CampaignOutlined />, title: 'Craft Your Impactful Online Presence', description: 'Build a professional website or portfolio to showcase your work, making a lasting and compelling impression on potential clients.' },
    { startIcon: <AssignmentIndOutlined />, title: 'Set SMART Goals', description: 'Define clear short-term and long-term objectives using the SMART criteria, guiding your freelancing journey with measurable and achievable targets.' },
    { startIcon: <Checkroom />, title: 'Network Strategically and Authentically', description: 'Connect with freelancers and potential clients both online and offline, leveraging networking opportunities for career growth and collaboration.' },
  ];

  const resource_data = [
    { img: resourceimg, heading: 'Digital Proficiency', description: 'Master essential skills for success in the digital freelance world' },
    { img: resourceimg, heading: 'Financial Wisdom', description: 'Learn to set fair rates, negotiate contracts, and achieve stability' },
    { img: resourceimg, heading: 'Time Management', description: 'Discover strategies for efficient time management and project delivery' },
  ];

  const reviews_data = [
    { stars: '5', heading: '“Highly recommend”', description: 'I chose the this book randomly and loved the flexibility! It allowed me to focus on exactly what I needed for my learning goals. Highly recommend!', img: woman, name: 'Laila Bahar', major: 'Graphic Designer' },
    { stars: '5', heading: '“Fantastic experience”', description: 'The customized approach made learning enjoyable. I appreciated the tailored content that suited my pace and interests. Fantastic experience!', img: man, name: 'Alex Thompson', major: 'Front End Developer' },
    { stars: '5', heading: '“A great initiative”', description: 'As a beginner, I found it incredibly user-friendly. The options made it easy to navigate and choose the right learning path for me. A great initiative!', img: woman, name: 'Laila Bahar', major: 'SEO Specialist' },
  ];

  return (
    <>
      <Grid item style={{ borderBottom: '1px solid #EFF0F6', padding: '0 100px' }}>
        <NavbarMenu />
      </Grid>
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <StandardLeft />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <StandardRight />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <FeatureLeft />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <FeatureRight />
        </Grid>
      </Grid>
      <Grid item>
        <Knowledge data={know_data} />
        <Steps data={step_data} />
        <Resources data={resource_data} />
        <Reviews data={reviews_data} />
        <Elevate />
        <Pricing />
        <Author />
        <Footer />
      </Grid>
    </>
  );
}
