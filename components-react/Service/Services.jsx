import React from 'react';
import { SiMongodb } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { TbBrandCss3 } from 'react-icons/tb';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMysql } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import { TbBrandReactNative } from 'react-icons/tb';
import { TbBrandTypescript } from 'react-icons/tb';
import { FaCheck } from 'react-icons/fa';

import styled from 'styled-components';
import Card from './Card';
import { Slide, Fade } from 'react-awesome-reveal';

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">skills</span>
        </h4>
        <h1 style={{ color: 'lightblue' }}>What I really master</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={SiMongodb}
            title={`Mongo & Mongoose`}
            level={`Senior Level`}
            disc={`Expert in MongoDB without and with Mongoose`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={FaNode}
            title={'Node & Express'}
            level={`Senior Level`}
            disc={`Using many packages Express-friendly like GraphQl, Stripe, Sockets.io, SendMail,`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={TbBrandCss3}
            title={'CSS'}
            level={`Senior Level`}
            disc={`CSS Expert in Styled Components, Tailwind, SASS`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FaReact}
            title={'React - Senior Level'}
            level={`Senior Level`}
            disc={`Memory management: RTK, Redux, Contrext. Client cache: React Query. SPA Router, Hooks and custom Hooks `}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={TbBrandNextjs}
            title={'Next 15, 14, 13'}
            level={`Senior Level`}
            disc={`I master this React framework for better performance`}
          />
        </Slide>
        {/* <Slide direction="up"> */}

        <Fade
          delay={200} // Wait 1000ms before starting
          duration={4000} // Animation lasts 3 second
          //triggerOnce // Only animate once
          fraction={0.5} // Start animation when element is 50% visible
        >
          <Card
            Icon={SiMysql}
            title={`SQL & Sequalize`}
            level={`Senior Level`}
            disc={`Expert in SQL databases like SQLite, MySQL, PostgreSQL,..`}
          />
        </Fade>
        {/* </Slide> */}
        {/* <Slide direction="up"> */}
        <Fade
          delay={200} // Wait 1000ms before starting
          duration={4000} // Animation lasts 3 second
          //triggerOnce // Only animate once
          fraction={0.5} // Start animation when element is 50% visible
        >
          <Card
            Icon={GrGraphQl}
            title={`REST API & GraphQL`}
            level={`Senior Level`}
            disc={`Expert in Backend APIs for web and mobile clients`}
          />
        </Fade>

        {/* </Slide> */}
        <Slide direction="right">
          <Card
            Icon={TbBrandReactNative}
            title={`React Native`}
            level={`Senior Level`}
            disc={`Let me develop your mobile app with Native Base, Material Kit, React Native Elements`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={TbBrandTypescript}
            title={`Typescript`}
            level={`Senior Level`}
            disc={`A nice way to avoir flaws while developing`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaCheck}
            title={`Testing`}
            level={`Senior Level`}
            disc={`RTL, Jest, Mocha, Chai, Jest-dom`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
