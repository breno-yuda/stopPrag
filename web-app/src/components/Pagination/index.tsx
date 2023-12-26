import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

export const Pagination = () => {
  return (
    <nav
      className='flex-column flex flex-wrap items-center justify-between pt-4 md:flex-row'
      aria-label='Table navigation'
    >
      <span className='mb-4 block w-full text-sm font-normal text-gray-500 md:mb-0 md:inline md:w-auto'>
        <span className='font-semibold text-gray-900'>
          {1} a {10}
        </span>{' '}
        de <span className='font-semibold text-gray-900'>{100}</span>
      </span>

      <ul className='inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse'>
        <li>
          <a
            href='#'
            className='ms-0 flex h-8 items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'
          >
            <ChevronDoubleLeftIcon className='h-4 w-4' aria-hidden='true' />
          </a>
        </li>

        <li>
          <a
            href='#'
            aria-current='page'
            className='flex h-8 items-center justify-center border border-gray-300 bg-blue-50 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700'
          >
            1
          </a>
        </li>

        <li>
          <a
            href='#'
            className='flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'
          >
            2
          </a>
        </li>

        <li>
          <a
            href='#'
            className='flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'
          >
            3
          </a>
        </li>

        <li>
          <a
            href='#'
            className='flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'
          >
            <ChevronDoubleRightIcon className='h-4 w-4' aria-hidden='true' />
          </a>
        </li>
      </ul>
    </nav>
  );
};
