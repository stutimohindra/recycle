import React from 'react';
import StyledContainer from '../components/StyledContainer';
import Header from '../components/Header';
import Contributors from '../components/Contributors';
import ContactForm from '../components/ContactForm';
import PlasticBottles from '../components/PlasticBottleCounter';
import Mission from '../components/Mission';
import Achievements from '../components/Achievements';
import StyledMain from '../components/StyledMain';

const Home = () => {
  return <StyledContainer>
    <Header />
    <StyledMain>
      <Mission heading={'Loren Ipsum'}/>
      <PlasticBottles bottleCounter={100}/>
      <Contributors/>
      <Achievements/>
      <ContactForm />
    </StyledMain>
  </StyledContainer>
}

export default  Home;