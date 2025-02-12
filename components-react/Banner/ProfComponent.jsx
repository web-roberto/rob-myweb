import React from 'react';
import styled from 'styled-components';
import { SiLeetcode } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { BsMicrosoftTeams } from 'react-icons/bs';

import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            <span className="green">Hello I'am</span>
          </h4>
          <h1 className="green">Roberto Alonso</h1>
          <h3>
            <br />
            <span style={{ fontSize: '1.5rem' }}>
              Senior Fullstack Developer MERN + SQL
            </span>
          </h3>
          <p>
            A Senior developer mastering MongoDB (+ Mongoose). <br />
            React & state management Toolkit (RTK), Redux, Context, React Query.{' '}
            <br />
            I manage many packages Express-friendly like GraphQl, also API Rest.
            Next 15,14,13 Server and Client Side Rendering.
            <br />I master CSS, SASS, Styled Components (like this web) Tailwind
            (+ DaisyUI), MUI ... <br />I master SQL databases (+ Sequalize).
          </p>
          <button>
            Let's talk &nbsp;
            <FaWhatsapp /> &nbsp; whatsapp:
            <span>&nbsp; +34 670922255</span>
          </button>

          <button>
            Send me an email: &nbsp;
            <span>roberto.alonso.javascript@gmail.com</span>
          </button>

          <button>
            Let's connect &nbsp; <BsMicrosoftTeams /> &nbsp; Teams: &nbsp;
            <span>r.alonsoperez@edu.gva.es</span>
          </button>
          <Download>
            <a
              className="btn"
              href="cvroberto.pdf"
              target="_blank"
              rel="noopener"
            >
              DOWNLOAD MY CV
            </a>
          </Download>
          <Social>
            <p>Browse my Github repositories and my Leetcode:</p>
            <div className="social-icons">
              <span>
                <a
                  href="https://github.com/web-roberto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/roberto-alonso-gandia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a
                  href="https://leetcode.com/u/RobertoAlonso/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLeetcode />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <Image
            src="/bannerUser.jpeg"
            priority={true}
            alt="profile"
            width={160}
            height={160}
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  line-height: 1.3rem;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2.3rem;
    font-family: 'Secular One', sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
    font-size: 1rem;
  }
  span {
    color: lightblue;
    font-size: 1rem;
  }

  button {
    padding: 0.5rem 2rem;
    margin-top: 1rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    display: flex;
    direction: row;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0px 10px 10px #01be9551);
    span {
      color: chartreuse;
    }
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 10rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 8rem;
    }

    @media (max-width: 660px) {
      width: 7rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;

const Download = styled.div`
  margin-top: -3rem;
  text-align: right;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  gap: 1rem;
  font-weight: bold;

  a:link {
    text-decoration: none;
    color: #408a9f;
    font-size: 1.3rem;
  }
  a:visited {
    text-decoration: none;
    color: #408a9f;
  }
  a:hover {
    text-decoration: none;
    color: #408a9f;
    transform: scale(1.1);
    transition: all 400ms ease-in-out;
  }
  a:active {
    text-decoration: none;
  }
`;
