import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.jpg';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <NavLink to='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Stop Prag</span>

            <img
              className='h-10 w-auto'
              src={logo}
              alt='Stop Prag'
              width={387}
              height={99}
            />
          </NavLink>
        </div>

        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Abrir menu principal</span>

            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>

        <div className='hidden lg:flex lg:gap-x-12'>
          <NavLink
            to='/budget'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Orçamentos
          </NavLink>

          <NavLink
            to='/repo'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Repositórios
          </NavLink>
        </div>

        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <NavLink
            to='/'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            Sair <span aria-hidden='true'>&rarr;</span>
          </NavLink>
        </div>
      </nav>

      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />

        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <NavLink to='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Stop Prag</span>

              <img
                className='h-10 w-auto'
                src={logo}
                alt='Stop Prag'
                width={387}
                height={99}
              />
            </NavLink>

            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>

          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <NavLink
                  to='/budget'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Orçamentos
                </NavLink>

                <NavLink
                  to='/repo'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Repositórios
                </NavLink>
              </div>

              <div className='py-6'>
                <NavLink
                  to='/'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Sair
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
