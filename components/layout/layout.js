import { Fragment, useContext, useState } from 'react';

import MainHeader from './main-header';
import Notification from '../ui/notification';
import NotificationContext from '../../store/notification-context';
import LandingPage from '../../pages/landing';
import App from '../../pages/index-react';

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;
  const [landing, setLanding] = useState(true);
  const aTrue = () => {
    setLanding(false);
  };
  return (
    <Fragment>
      {/* {landing && <LandingPage aTrue={aTrue} />} */}
      {landing && <App aTrue={aTrue} />}

      {!landing && <MainHeader />}
      {!landing && <main>{props.children}</main>}
      {!landing && activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
