import Head from 'next/head';

import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';
import NewsletterRegistration from '../components/input/newsletter-registration';

function HomePage(props) {
  //.log('----pages/index.js---------HomePage-----props-----', { props });
  if (!props?.events) return;
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  //console.log('----pages/index.js---------getStaticProps-----featuredEvents-----',{ featuredEvents });
  if (!featuredEvents) return { props: { events: [] } };
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
