// export async function getAllEvents() {
//   const response = await fetch('https://nextjs-course-c81cc-default-rtdb.firebaseio.com/events.json');
//   const data = await response.json();

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
let fullPath;
if (process.env.URL) {
  fullPath = process.env.URL + '/api/events/';
} else fullPath = '/api/events/';

export async function getAllEvents() {
  // console.log(
  //   '--------@@@@@@@@@@@@@@@@@@@@@@@@--getAllEvents--fullPath:',
  //   fullPath
  // );
  try {
    const result = await fetch(fullPath);
    // console.log(
    //   '---@@@@@@@@@@@@@@@@@@@@@@@@-result del fetch de Eventos',
    //   result
    // );
    if (!result.ok) {
      return console.error('Error fetching events:', result);
    }
    const data = await result.json();

    // console.log(
    //   '------@@@@@@@@@@@@@@@@@@@@@@@@---getAllEvents---data.events',
    //   data?.events
    // );

    return data.events;
  } catch (err) {
    console.error('---error leyendo eventos', { err });
    return [];
  }

  // fetch(fullPath, {})
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log('----------- Eventos leídos de Mongo------:', data?.events);
  //     return data.events;
  //   });
  // return []; //while is being processin the promise
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
