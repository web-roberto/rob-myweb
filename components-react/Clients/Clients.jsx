import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Slide } from 'react-awesome-reveal';

let clients = [
  {
    name: 'Lyle Kauffman',
    position: 'Online seller',
    img_url: 'https://untitledui.com/images/avatars/transparent/lyle-kauffman',
    stars: 3,
    disc: `This software is a game changer! The features are incredibly rich and cater to all the needs of users. The interface is intuitive, and navigating through the different sections is a breeze. Whether you're a novice or an experienced user, this software will meet your needs.`,
  },
  {
    name: 'Zahra Christensen',
    position: 'Shop Manager',
    img_url:
      'https://untitledui.com/images/avatars/transparent/zahra-christensen',
    stars: 4,
    disc: `I’ve been using this software for a while, and the performance is absolutely seamless. The speed and responsiveness are top-notch, and I haven’t encountered any lags or glitches. The overall experience feels polished and well thought out.`,
  },
  {
    name: 'Liam Hood',
    position: 'warehouse manager',
    img_url: 'https://untitledui.com/images/avatars/transparent/liam-hood',
    stars: 5,
    disc: `One of the standout aspects of this software is its security features. It gives me peace of mind knowing my data is safe. I’ve never experienced any crashes, and the stability is impressive. You can tell that a lot of care went into the development process.`,
  },
  {
    name: 'Elisa Nishikawa',
    position: 'multi-store owner',
    img_url:
      'https://untitledui.com/images/avatars/transparent/elisa-nishikawa',
    stars: 5,
    disc: `The design of the software is sleek, modern, and incredibly user-centric. The functionality is spot on, with every tool and feature serving a clear purpose. It’s clear that the developers have listened to user feedback and iterated on the product accordingly.`,
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = '';
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="client">
      <Slide direction="left">
        <span className="green">testimonials</span>
        <h1>what clients say</h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: '';
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #01be96;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #01be96;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
