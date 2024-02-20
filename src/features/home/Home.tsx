import React from 'react';
import We from './sections/We';
import HeroSection from './sections/HeroSection';
import Ages from './sections/Ages';
import ComeOver from './sections/ComeOver';
import LearningEnvironment from './sections/LearningEnvironment';
import HappyKids from './sections/HappyKids';
import QuickActions from './sections/QuickActions';
const Home = () => {
  return (
    <div className='space-y-20'>
      <HeroSection />
      <We />
      <Ages />
      <LearningEnvironment />
      <ComeOver />
      {/* <HappyKids /> */}
      {/* <QuickActions /> */}
    </div>
  );
};

export default Home;
