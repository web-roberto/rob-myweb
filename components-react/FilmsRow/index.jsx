import Link from 'next/link';
import React from 'react';
import { Container, Content, Wrapper } from './styles';

export function FilmsRow({ movieResults, category, addMargin }) {
  console.log(
    '#################FilmsRow##########movieResults###category#addMargin# ',
    movieResults,
    category,
    addMargin
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container addMargin={addMargin}>
      <Content {...settings}>
        {movieResults
          ?.filter((item) => item.type === category)
          ?.map((movie) => (
            <div>
              <Wrapper key={movie.id}>
                {/* <Link href={`/movies/${movie.id}`}> */}
                {/* <Link href={`#`}> */}
                <img src={movie.cardImg} alt={movie.title} />
                <span>Hola</span>
                {/* </Link> */}
              </Wrapper>
            </div>
          ))}
      </Content>
    </Container>
  );
}

export default FilmsRow;
