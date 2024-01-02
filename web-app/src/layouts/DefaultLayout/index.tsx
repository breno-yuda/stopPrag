import {
  Outlet,
  //  useLocation
} from 'react-router-dom';

import { Footer, Header } from '../../components';

export const DefaultLayout = () => {
  // const location = useLocation();

  // const isHomeScreen =
  //   location.pathname === '/' || location.pathname === '/not-found';

  return (
    <div className='flex min-h-screen flex-col'>
      {/* {!isHomeScreen && <Header />} */}
      <Header />

      <Outlet />

      {/* {!isHomeScreen && <Footer />} */}
      <Footer />
    </div>
  );
};
