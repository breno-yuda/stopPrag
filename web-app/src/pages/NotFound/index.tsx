import { useNavigate } from 'react-router-dom';

import { Button } from '../../components';

export const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className='flex min-h-screen items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-primary-600'>404</p>

        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Página não encontrada
        </h1>

        <p className='mt-6 text-base leading-7 text-gray-600'>
          Lamentamos, mas não conseguimos encontrar a página que procura.
        </p>

        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Button
            buttonStyle='primary'
            type='button'
            onClick={goBack}
            text='Voltar'
          />
        </div>
      </div>
    </main>
  );
};
