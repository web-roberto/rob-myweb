'use client';
import React from 'react';
import styled from 'styled-components';
import Header from '../components-react/Banner/Header';
import ProfComponent from '../components-react/Banner/ProfComponent';
import Clients from '../components-react/Clients/Clients';
import Footer from '../components-react/Footer/Footer';
import Projects from '../components-react/Projects/Projects';
import Services from '../components-react/Service/Services';
import HomeLayout from '../components-react/HomeLayout';

function App(props) {
  //console.error('-----------App------props-', props);

  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>

      <Services />
      {/* <LightColor> */}
      {/* <Projects toLanding={props.toLanding} /> */}
      <HomeLayout toLanding={props.toLanding} />
      {/* </LightColor> */}
      <Clients />
      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  //height: 100vh;
  height: 65vh;

  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
