import { NavLink } from 'react-router-dom';

import logo from '../../assets/cabecalho_selos.jpg';

export const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-7xl p-6 md:px-8'>
        {/* <div className='sm:flex sm:items-center sm:justify-around'> */}
        <div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-12'>
          <div className='flex items-center justify-center sm:col-span-12 md:col-span-12 lg:col-span-12'>
            <img
              src={logo}
              className='h-auto w-full sm:w-4/5 md:w-4/5 lg:w-3/5'
              alt='Stop Prag'
            />
          </div>

          <ul className='mb-6 flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 sm:col-span-12 sm:mb-0 md:col-span-12 lg:col-span-12'>
            <li>
              <NavLink
                to='/budget'
                className='me-4 text-sm font-semibold leading-6 text-gray-900 md:me-6'
              >
                Orçamentos
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/repo'
                className='me-4 text-sm font-semibold leading-6 text-gray-900 md:me-6'
              >
                Repositórios
              </NavLink>
            </li>
          </ul>
        </div>

        <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />

        <span className='block text-sm text-gray-500 sm:text-center'>
          © 2024 <NavLink to='https://yuda.com.br/'>Yuda Solutions</NavLink>.
          Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
};
