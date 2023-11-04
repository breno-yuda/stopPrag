'use client';

export default function SignIn() {
  return (
    <section>
      <div className='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
        {/* <Link href='#' className='mb-6 flex items-center'>
          <Image
            className='h-10 w-auto'
            src='/logo.jpg'
            alt='Stop Prag'
            width={387}
            height={99}
          />
        </Link> */}

        <div className='w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0'>
          <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
              Faça login em sua conta
            </h1>

            <form className='space-y-4 md:space-y-6'>
              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-medium text-gray-900'
                >
                  E-mail
                </label>

                <input
                  type='email'
                  name='email'
                  id='email'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 sm:text-sm'
                  placeholder='you@example.com'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='mb-2 block text-sm font-medium text-gray-900'
                >
                  Senha
                </label>

                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 sm:text-sm'
                  required
                />
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex h-5 items-center'>
                    <input
                      id='remember'
                      aria-describedby='remember'
                      type='checkbox'
                      className='focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300'
                    />
                  </div>

                  <div className='ml-3 text-sm'>
                    <label htmlFor='remember' className='text-gray-500'>
                      Lembrar de mim
                    </label>
                  </div>
                </div>
              </div>

              <button
                type='submit'
                className='w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300'
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
