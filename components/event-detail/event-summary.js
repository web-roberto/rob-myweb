import classes from './event-summary.module.css';

function EventSummary(props) {
  const { title,description } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </section>
  );
}

export default EventSummary;