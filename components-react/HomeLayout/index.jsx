import React from 'react';
//import { MovieListType } from '../../types/MovieList';
import FilmsRow from '../FilmsRow';
import Categories from './Categories';
import SliderBanner from './SliderBanner';
import { Container } from './styles';
import { movieList } from '../movieList/movieList';

export function HomeLayout(props) {
  //console.log('#########################HomeLayout## movieList', movieList);

  return (
    <Container>
      <SliderBanner />
      <h4>Watch my projects as a portfolio</h4>
      <Categories toLanding={props.toLanding} />
      <h3>About your films</h3>

      <FilmsRow movieResults={movieList} category="recommend" addMargin="0px" />
      {/* <h4>Trending</h4>
      <FilmsRow movieResults={movieList} category="trending" addMargin='0px'/>
      <h4>New for You</h4>
      <FilmsRow movieResults={movieList} category="new" addMargin='0px'/>
      <h4>Originals</h4>
      <FilmsRow movieResults={movieList} category="original" addMargin='15px' /> */}
    </Container>
  );
}

export default HomeLayout;
