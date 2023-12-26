export const InputSearch = () => {
  return (
    <div className='relative'>
      <div className='rtl:inset-r-0 pointer-events-none absolute inset-y-0 left-0 flex items-center ps-3 rtl:right-0'>
        <svg
          className='h-5 w-5 text-gray-500'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
            fillRule='evenodd'
            clipRule='evenodd'
          />
        </svg>
      </div>

      <input
        type='text'
        id='table-search'
        className='block w-80 rounded-lg border-0 border-gray-300 p-2 ps-10 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600'
        placeholder='Procurar por...'
      />
    </div>
  );
};
