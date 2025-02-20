import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
require('dotenv').config();

const Project = (props) => {
  const { img, disc } = props.item;
  //   let fullPath;
  //   if (process.env.URL){
  //     fullPath=process.env.URL + `/public${img}`
  //   } else {fullPath=`${img}`}

  return (
    <Container className="project">
      {/* <img src={img} alt="project" /> */}
      {/* <Image src={img} alt="project" width={480} height={480} /> */}
      {/* <Image src={'/' + img} alt="project" width={250} height={160} /> */}

      <Image src={img} alt="project" width={40} height={40} />
      <div className="disc">
        <h1>Description</h1>
        <p>
          {disc}
          <a href="/">demo</a>
        </p>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 10rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    transition: all 400ms ease-in-out;
    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;
      a {
        margin-left: 0.4rem;
        color: red;
      }
    }
  }

  :hover > img {
    transform: scale(1.3);
  }

  :hover > .disc {
    bottom: 0;
  }
`;
