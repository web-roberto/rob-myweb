import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Container, Content, Wrapper } from './styles';
import { getAllMovies } from '../../helpers/api-util';
//import { movieList } from '../movieList/movieList';

// //export function FilmsRow({ movieResults, category, addMargin }) {
// function FilmsRow() {
//   const [movies, setMovies] = useState([]);
//   let result;
//   useEffect(() => {
//     const getMovies = async () => {
//       result = await getAllMovies();
//       setMovies(result);
//     };
//     getMovies();
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     responsive: [
//       {
//         breakpoint: 750,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 425,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   if (movies?.length === 0 || !movies) return;
//   //console.log(
//     '----------FilmsRow---------useEffect---getAllMovies-----movies-',
//     movies
//   );
//   const resultat=()=>{
//     movies?.map((movie) => (
//     <div key={movie._id}>
//     <a href={`/movies/${movie._id}`}>
//       <img src={movie.cardImg} alt={movie.title}/>
//       <span>Hola</span>
//     </a>
//   </div>
// ))}

// // //console.log(
// //   '----------FilmsRow---------useEffect---getAllMovies-----resultat-',
// // );

//   return (

//     <Container>
//       <Content {...settings}>
//         {/* {props.movieResults */}
//         {/* {movie.filter((item) => item.type === 'trending') */}
//         {movies?.map((movie) =>
//           {
//           //console.log('------movie----',movie._id);
//           return (
//             <Wrapper key={movie._id}>
//               <Link href={`/movies/${movie._id}`}>
//                 <img src={movie.cardImg} alt={movie.title}/>
//               </Link>
//             </Wrapper>
//           )
//           }
//         )}
//       </Content>
//     </Container>
//   );
// }

// export default FilmsRow;

function FilmsRow() {
  const [movies, setMovies] = useState();
  let result;
  useEffect(() => {
    const getMovies = async () => {
      result = await getAllMovies();
      setMovies(result);
    };
    getMovies();
  }, []);

  //console.log(
  //   '----------FilmsRow---------useEffect---getAllMovies-----movies-',
  //   movies
  // );

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
  if (!movies) return;

  //console.log(
  //   '----------FilmsRow---------useEffect---getAllMovies-----SI HAY movies y a pintar-',
  //   { movies }
  // );
  //?.filter((item) => item.type === 'trending')
  return (
    <Container>
      <Content {...settings}>
        {movies?.map((movie) => (
          <div key={movie._id}>
            <Wrapper>
              {/* {console.log('Movie entero:', movie._id)} */}
              {/* <Link href={`/movies/${movie._id}`} legacyBehavior> */}
                <a>
                  <img src={movie.cardImg} alt={movie.title} />
                </a>
              {/* </Link> */}
            </Wrapper>
          </div>
        ))}
      </Content>
    </Container>

    // <div>
    // <div {...settings}>
    //   {movies?.map((movie) => (
    //       <div key={movie._id}>
    //         {//console.log('Movie entero:', movie._id)}
    //         <arguments href={`/movies/${movie._id}`}>
    //           <img src={movie.cardImg} alt={movie.title} />
    //         </arguments>
    //       </div>
    //     ))}
    // </div>
    // </div>
  );
}

export default FilmsRow;
