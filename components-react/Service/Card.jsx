import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
  const { Icon, disc, title, level } = props;
  return (
    <Container>
      <span className="green">
        <Icon />
      </span>
      <h1>{title}</h1>
      <h2>{level}</h2>
      <p>{disc}</p>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  height:100%;
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 1rem;
  text-align: center;
  span {
    font-size: 3rem;
  }

  h1 {
    font-size: 1.2rem;
    padding-bottom: 0.3rem;
  }

  h2 {
    font-size: 1 rem;
    padding-bottom: 0%.5;
    color:lightblue
  }

  p {
    font-size: 0.8rem;
  }
`;
