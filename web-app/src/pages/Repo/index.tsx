import { BudgetsTable, Pagination } from '../../components';
import { InputSearch } from '../../components/InputSearch';

export const Repo = () => {
  return (
    <main className='flex-1 bg-white'>
      <div className='mx-auto max-w-7xl p-6 lg:px-8'>
        <div className='flex items-center justify-start pb-4'>
          <label htmlFor='table-search' className='sr-only'>
            Procurar
          </label>

          <InputSearch />
        </div>

        <div className='relative overflow-x-auto sm:rounded-lg'>
          <BudgetsTable />

          <Pagination />
        </div>
      </div>
    </main>
  );
};
