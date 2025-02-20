// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
//import { ParsedUrlQuery } from 'querystring';
import React, { useEffect, useState } from 'react';
import FilmLayout from '../../components-react/FilmLayout';
//import { MovieListType } from '../../types/MovieList';
import { getAllMovies, getMovieById } from '../../helpers/api-util';
import { useRouter } from 'next/router';

require('dotenv').config();

export default function MovieInformation(props) {
  console.log(
    '------------------pages/movies/[moviedId].js-----los props de Statis a ppal----props----',
    {props}
  );
  //const movie = props?.movie;
  if (!props?.movie) return;
  const movieRead = props.movie;
  // const [movieRead, setMovieRead] = useState();
  // const router = useRouter();
  // console.log('---------pages/movies/[id].js-----ppal----router-', movrouterie);

  // const movie = router?.query?.id;
  // console.log('---------pages/movies/[id].js-----ppal----props.movie-', movie);
  // useEffect(() => {
  //   const getMovie = async () => {
  //     const movieResult = await getMovieById(movie);
  //     setMovieRead(movieResult);
  //   };
  //   getMovie();
  // }, []);

  if (!movieRead) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  <FilmLayout movie={movieRead} />;
}
//DONE
// export const getStaticProps = async (context) => {
//   const { id } = context.params;
//  const movieResults = await GetOneMovie(id);
//   return {
//     props: {
//       movieResults,
//     },
//     revalidate: 1000,
//   };
// };

// ********************* de Max
export const getStaticProps = async (context) => {
  const id = context.params.id;
  console.log('---------pages/movies/[id].js-----getStaticProps-----id-', id);
  const movie = await getMovieById(id);
  console.log(
    '------------------pages/movies/[id].js-----getStaticProps----movieResults---tras getMovieById-',
    movie
  );
  return {
    props: {
      movie: movie,
    },
    revalidate: 100,
  };
};
// // ********************* de Disney
// // export const getStaticPaths = async () => {
// //   const movieData = await GetAllMovies();
// //   const paths = movieData?.map((movie) => ({
// //     params: { id: String(movie.id) },
// //   }));
// //   return {
// //     paths,
// //     fallback: false,
// //   };
// // };
//****** de Max
export const getStaticPaths = async () => {
  const movies = await getAllMovies();
  console.log(
    '------------------pages/movies/[id].js-----getStaticPaths----movies----',
    movies
  );
  const paths = movies?.map((movie) => ({ params: { id: movie._id } })); // params: { id: String(movie.id) },
  console.log(
    '------------------pages/movies/[moviedId].js-----getStaticPaths----paths----',
    paths
  );
  return {
    paths: paths,
    fallback: 'blocking', //de Disney pq Max es 'blocking'
  };
};
