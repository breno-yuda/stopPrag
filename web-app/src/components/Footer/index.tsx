import { NavLink } from 'react-router-dom';

import logo from '../../assets/cabecalho_selos.jpg';

export const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-7xl p-6 md:px-8'>
        <div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-12'>
          <div className='flex items-center justify-center sm:col-span-12 md:col-span-12 lg:col-span-12'>
            <img
              src={logo}
              className='h-auto w-full sm:w-4/5 md:w-4/5 lg:w-3/5'
              alt='Stop Prag'
            />
          </div>
        </div>

        <hr className='my-4 border-gray-200 sm:mx-auto' />

        <span className='block text-sm text-gray-500 sm:text-center'>
          © 2024 <NavLink to='https://www.stopprag.com.br/'>Stop Prag</NavLink>
          . Todos os direitos reservados. Desenvolvido por{' '}
          <NavLink to='https://yuda.com.br/'>Yuda Solutions</NavLink>
        </span>
      </div>
    </footer>
  );
};
