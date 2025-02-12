import Image from 'next/image';

import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import classes from './event-item.module.css';
import CodeIcon from '../icons/code';
import AppIcon from '../icons/app';
import CpuIcon from '../icons/cpu-chip';
import Link from 'next/link';

function EventItem(props) {
  const { title, image, date, location, id, url, urlgithub, technologies } =
    props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={'/' + image} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.project}>
          <CpuIcon />
          <span className={classes.code} >Technologies used:&nbsp;</span>
          <span>{technologies.map((tech) => tech + ', ')}</span>
        </div>
        <div className={classes.project}>
          <AppIcon />
          <span className={classes.code}> Live:&nbsp;</span>
          <Link href={url} target="_blank">
            {url}
          </Link>
        </div>
        <div className={classes.project}>
          <CodeIcon />
          <span className={classes.code}> Github: &nbsp;</span>
          <Link href={urlgithub} target="_blank">
            {urlgithub}
          </Link>
        </div>

          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            {/* <AddressIcon /> */}
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
