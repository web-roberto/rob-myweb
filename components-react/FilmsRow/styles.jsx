// import styled from 'styled-components';
// import Slider from 'react-slick';

// export const Container =
//   styled.div`
//   width: 100vw;
//   /* margin-bottom: ${(props) => (props.addMargin) }; */
//   margin-bottom:"15px";
// `;

// export const Content = styled(Slider)`
//   gap: 25px;
//   width: 89%;
//   margin-top: 30px;
//   display: flex;
//   align-items: center;
// `;

// export const Wrapper = styled.div`
//   margin: 0 15px;
//   border: 4px solid;
//   border-radius: 8px;
//   cursor: pointer;
//   position:relative;
//   overflow-x: hidden;
//   min-width: 200px;
//   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
//     rgb(0 0 0 / 73%) 0px 16px 10px;
//   // use for transitions always
//   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
//   &:hover {
//     transform: scale(1.02);
//     border: 4px solid ${(props) => props.theme.white};
//     border-radius: 8px;
//     box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
//     z-index: 1000;
//   }
//   img {
//     width: 100%;
//     height: 100%;
//     // fit the image as much as possible
//     object-fit: cover;
//   }
//   span {
//     position:absolute;
//     top: 5px;
//     left:10px;
//     font-weight:bold;
//     font-size:2.5rem;
//    // color: #03be9f;
//     //color: #2b2b2b;
//     color: whitesmoke
//   }
// `;

import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  width: 100vw;
  /* margin-bottom: ${(props) => (props.addMargin ? '15px' : '0px')}; */
  margin-bottom: '15px';
`;

export const Content = styled(Slider)`
  gap: 25px;
  width: 89%;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  margin: 0 15px;
  border: 4px solid;
  border-radius: 8px;
  cursor: pointer;
  overflow-x: hidden;
  min-width: 200px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px;
  // use for transitions always
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    transform: scale(1.02);
    border: 4px solid ${(props) => props.theme.white};
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
    z-index: 1000;
  }
  img {
    width: 100%;
    height: 100%;
    // fit the image as much as possible
    object-fit: cover;
  }
`;
