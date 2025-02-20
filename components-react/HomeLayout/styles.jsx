import styled from 'styled-components';

export const Container = styled.main`
  /* min-height: calc(100vh - 70px); */
  padding: 0 calc(3.5vw - 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background-image: url('/images/home-background.png');
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  h4 {
    font-size: 2.3rem;
    letter-spacing: 0.11px;
    line-height: 1.4;
    text-align: center;
    //color: lightblue;
    color: lightblue;
    margin: 0px;
    padding: 0px;
    position: relative;
    bottom: 0rem;
  }
  h3 {
    font-size: 2rem;
    letter-spacing: 0.11px;
    line-height: 1.4;
    text-align: center;
    color: #01be96;
    margin: 0px;
    padding: 0px;
    position: relative;
    top: 3rem;
  }
`;


export const Blinker = styled.h4`
animation: blinker 1s linear infinite;

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

`