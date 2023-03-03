import React from 'react';
import HeroSection from '../component/Ui/HeroSection';
import LiveAction from '../component/Ui/Live-action/liveAction';
import SellerSection from '../component/Ui/SellerSection/SellerSection';
import StepSection from '../component/Ui/Step-section/StepSection';
import Trending from '../component/Ui/Trending-section/Trending';

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAction />
      <SellerSection />
      <Trending />
      <StepSection />
    </>
  );
};

export default Home;
