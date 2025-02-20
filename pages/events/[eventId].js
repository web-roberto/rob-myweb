import { Fragment } from 'react';
import Head from 'next/head';

import {
  getEventById,
  getFeaturedEvents,
  getAllEvents,
} from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import Comments from '../../components/input/comments';

function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  // console.log(
  //   '---------------------------------------EventDetailPage----event',
  //   event
  // );
  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
        technologies={event.technologies}
        url={event.url}
        urlgithub={event.urlgithub}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event._id} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  //No llamo a al api api/events/1 pq estoy ya en el server.
  //llamo a una función que llama a las operaciones sobre Mongo saltándose la api
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  //const events = await getAllEvents();

  const paths = events.map((event) => ({ params: { eventId: event._id } }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
}

export default EventDetailPage;
