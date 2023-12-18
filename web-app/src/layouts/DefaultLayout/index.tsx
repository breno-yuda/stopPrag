import { Outlet, useLocation } from 'react-router-dom';

import { Footer, Header } from '../../components';

export const DefaultLayout = () => {
  const location = useLocation();

  const isHomeScreen = location.pathname !== '/';

  return (
    <div className='flex min-h-screen flex-col'>
      {isHomeScreen && <Header />}

      <Outlet />

      {isHomeScreen && <Footer />}
    </div>
  );
};
