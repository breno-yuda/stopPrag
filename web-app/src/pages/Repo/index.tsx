import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { Button, FileItem } from '../../components';

const files = [
  {
    id: 1,
    clientName: 'Basic Tee',
    link: '#',
    date: '$35',
  },
  {
    id: 1,
    clientName: 'Basic Tee',
    link: '#',
    date: '$35',
  },
  {
    id: 1,
    clientName: 'Basic Tee',
    link: '#',
    date: '$35',
  },
  {
    id: 1,
    clientName: 'Basic Tee',
    link: '#',
    date: '$35',
  },
  {
    id: 1,
    clientName: 'Basic Tee',
    link: '#',
    date: '$35',
  },
  {
    id: 1,
    clientName: 'Basic Tee',
    link: '#',
    date: '$35',
  },
  {
    id: 1,
    clientName: 'Basic Tee',
    link: '#',
    date: '$35',
  },
  {
    id: 1,
    clientName: 'Basic Tee',
    link: '#',
    date: '$35',
  },
  {
    id: 1,
    clientName: 'Basic Tee',
    link: '#',
    date: '$35',
  },
  {
    id: 1,
    clientName: 'Basic Tee',
    link: '#',
    date: '$35',
  },
  {
    id: 1,
    clientName: 'Basic Tee',
    link: '#',
    date: '$35',
  },
  {
    id: 1,
    clientName: 'Basic Tee',
    link: '#',
    date: '$35',
  },
];

export const Repo = () => {
  return (
    <main className='flex-1 bg-white'>
      <div className='mx-auto max-w-7xl p-6 lg:px-8'>
        <div className='flex justify-end'>
          <div className='flex w-80 items-center justify-items-center'>
            <div className='relative mr-2 w-full rounded-md shadow-sm'>
              <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3'>
                <MagnifyingGlassIcon
                  className='h-4 w-4 text-gray-500'
                  strokeWidth='2'
                  aria-hidden='true'
                />
              </div>

              <input
                type='text'
                name='search'
                id='search'
                className='block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                placeholder='Procurar...'
              />
            </div>

            <Button buttonStyle='primary' type='submit' text='Procurar' />
          </div>
        </div>

        <div className='mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
          {files.map(file => (
            <FileItem key={file.id} file={file} />
          ))}
        </div>
      </div>
    </main>
  );
};
