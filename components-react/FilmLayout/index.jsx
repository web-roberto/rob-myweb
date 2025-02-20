import React from 'react';
import {
  AddButton,
  Container,
  Controls,
  Description,
  GroupWatchButton,
  ImageTitle,
  PlayButton,
  SubTitle,
  TrailerButton,
} from './styles';

function FilmLayout({ movie }) {
  if (!movie) return;

  return (
    <Container
      style={{
        backgroundImage: `url(${movie.backgroundImg})`,
        opacity: '0.8',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <ImageTitle>
        <img src={movie.titleImg} alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>{movie.subTitle}</SubTitle>
      <Description>{movie.description}</Description>
    </Container>
  );
}

export default FilmLayout;
