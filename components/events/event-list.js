import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList(props) {
  console.log('---------------------------- En EventList', { props });
  console.log('---------------------------- En EventList', props.items);

  let items;
  if (!props?.items) {
    return;
  }
  items = props.items;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event._id}
          id={event._id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
          technologies={event.technologies}
          url={event.url}
          urlgithub={event.urlgithub}
          description={event.description}
        />
      ))}
    </ul>
  );
}

export default EventList;
