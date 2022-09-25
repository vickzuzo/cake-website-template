import React from 'react';
import { Blob1 } from '../../../assets/icons/blobs';
import { AboutUs, Carousel, Header, Products } from '../../../components';

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Products />

      <AboutUs />
    </div>
  );
};

export default HomeScreen;
