import Link from 'next/link';

import classes from './button.module.css';

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}  className={classes.btn}>
        {/* <a className={classes.btn}>{props.children}</a> */}
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
