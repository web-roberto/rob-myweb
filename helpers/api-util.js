// export async function getAllEvents() {
//   const response = await fetch('https://web-roberto-c81cc-default-rtdb.firebaseio.com/events.json');
//   const data = await response.json();

import { movieList } from '../components-react/movieList/movieList';

//   const events = [];

//   for (const key in data) {
//     events.push({
//       id: key,
//       ...data[key]
//     });
//   }

//   return events;
// }

// export async function getFeaturedEvents() {
//   const allEvents = await getAllEvents();
//   return allEvents.filter((event) => event.isFeatured);
// }

// export async function getEventById(id) {
//   const allEvents = await getAllEvents();
//   return allEvents.find((event) => event.id === id);
// }

// export async function getFilteredEvents(dateFilter) {
//   const { year, month } = dateFilter;

//   const allEvents = await getAllEvents();

//   let filteredEvents = allEvents.filter((event) => {
//     const eventDate = new Date(event.date);
//     return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
//   });

//   return filteredEvents;
// }

////ROBERTO
require('dotenv').config();

export async function getAllEvents() {
  let fullPath;
  if (process.env.URL) {
    fullPath = process.env.URL + '/api/events/';
  } else fullPath = '/api/events/';

  try {
    const result = await fetch(fullPath); //GET ALL a api/events
    if (!result.ok) {
      return console.error('Error fetching events:', result);
    }
    const data = await result.json();
    //reordeno por campo ordeded
    const ordered = data.events.sort((a, b) => {
      return a.ordered - b.ordered;
    });
    console.log('######################### array ordenado', { ordered });
    return ordered;
  } catch (err) {
    console.error('---error leyendo eventos', { err });
    return [];
  }
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  console.log('-----------------getFeaturedEvents---getAllEvents--', {
    allEvents,
  });
  if (allEvents) return allEvents.filter((event) => event.isFeatured);
  else return [];
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  if (allEvents) return allEvents.find((event) => event._id === id);
  else return [];
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();
  let filteredEvents;
  if (allEvents) {
    filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
      );
    });
  } else return [];

  return filteredEvents;
}

//**************+ MOVIES ***************************** */
export async function getAllMovies() {
  //fake movieList
  //return movieList;

  let fullPathMovie;
  if (process.env.URL) {
    fullPathMovie = process.env.URL + '/api/movies/';
  } else fullPathMovie = '/api/movies/';
  console.log(
    '-------------------getAllMovies--fullPathMovie--',
    fullPathMovie
  );
  try {
    const result = await fetch(fullPathMovie); //GET ALL a api/movies

    console.log('-------------------getAllMovies--result--', result);
    if (!result.ok) {
      return console.error('Error fetching movies:', result);
    }
    const data = await result.json();
    console.log(
      '----------------------getAllMovies--data--',
      { data },
      data.movies
    );

    //return data.movies;
    return data.movies;
  } catch (err) {
    console.error('---error leyendo movies', { err });
    return [];
  }
}

export async function getMovieById(id) {
  console.log('----------------------getMovieById---id-', id);
  const allMovies = await getAllMovies();
  console.log('------------------getMovieById---allMovies-', allMovies);
  if (!allMovies || allMovies.length === 0) return;
  if (allMovies) return allMovies.find((movie) => movie._id === id);
  else return [];
}
export async function getMovieById2(id) {
  console.log('----------------------getMovieById---id-', id);
  let fullPathMovie;
  if (process.env.URL) {
    fullPathMovie = process.env.URL + '/api/movies/' + id;
  } else fullPathMovie = '/api/movies/' + id;
  console.log(
    '-------------------getMovieById2--fullPathMovie--',
    fullPathMovie
  );
  try {
    const result = await fetch(fullPathMovie); //GET ONE a api/movies/id

    console.log('-------------------getAllMovies--result--', result);
    if (!result.ok) {
      return console.error('Error fetching movies:', result);
    }
    const data = await result.json();
    console.log(
      '----------------------getAllMovies--data--',
      { data },
      data.movies
    );

    //return data.movies;
    return data.movies;
  } catch (err) {
    console.error('---error leyendo movies', { err });
    return [];
  }
}
