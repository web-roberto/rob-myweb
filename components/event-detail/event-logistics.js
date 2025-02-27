import Image from 'next/image';

import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import CpuIcon from '../icons/cpu-chip';

import classes from './event-logistics.module.css';
import Link from 'next/link';
import CodeIcon from '../icons/code';
import AppIcon from '../icons/app';
import { Blinker } from '../../components-react/HomeLayout/styles';

function EventLogistics(props) {
  const { date, address, image, imageAlt, technologies, url, urlgithub } =
    props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={CpuIcon}>
          <span>Technologies used:</span>
          {/* <span>{technologies}</span> */}
          <span style={{ color: '#18e0d0' }}>
            {technologies && technologies.map((tech) => tech + ', ')}
          </span>
          {console.log(
            '----------------------------------------TECNOLOGIAS-----',
            technologies
          )}{' '}
        </LogisticsItem>
        <Blinker>
          <LogisticsItem icon={AppIcon}>
            Live:&nbsp;
            <Link href={url} target="_blank">
              {url}
            </Link>
          </LogisticsItem>
        </Blinker>
        <LogisticsItem icon={CodeIcon}>
          Code in Github: &nbsp;
          <Link href={urlgithub} target="_blank">
            {urlgithub}
          </Link>
        </LogisticsItem>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
