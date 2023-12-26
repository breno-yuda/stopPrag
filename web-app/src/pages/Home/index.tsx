import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import * as zod from 'zod';

import logo from '../../assets/logo.jpg';
import { Input } from '../../components';

const loginFormValidationSchema = zod.object({
  email: zod.string().min(1, 'O e-mail é obrigatório.'), // E-mail
  password: zod.string().min(1, 'A senha é obrigatória.'), // Senha
});

export type LoginFormData = zod.infer<typeof loginFormValidationSchema>;

export const Home = () => {
  const navigate = useNavigate();

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    // reset,
    register,
    formState: { errors },
  } = loginForm;

  const handleFinishLogin = (data: LoginFormData) => {
    navigate('/budget');
    console.log(data);
    // reset();
  };

  return (
    <section>
      <div className='mx-auto flex h-screen flex-col items-center justify-center px-6 py-8 lg:py-0'>
        <NavLink to='#' className='mb-6 flex items-center'>
          <img
            className='h-10 w-auto'
            src={logo}
            alt='Stop Prag'
            width={387}
            height={99}
          />
        </NavLink>

        <div className='w-full rounded-lg border border-gray-50 bg-white shadow-md sm:max-w-md md:mt-0 xl:p-0'>
          <div className='p-6 sm:p-8'>
            <form
              className='space-y-4'
              onSubmit={handleSubmit(handleFinishLogin)}
            >
              <div className='grid grid-cols-1 gap-x-4 gap-y-2'>
                <Input
                  label='E-mail'
                  id='email'
                  type='email'
                  errors={errors}
                  placeholder='you@example.com'
                  required
                  {...register('email')}
                />

                <Input
                  label='Senha'
                  id='password'
                  type='password'
                  errors={errors}
                  placeholder='••••••••'
                  required
                  {...register('password')}
                />
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex h-5 items-center'>
                    <input
                      id='remember'
                      aria-describedby='remember'
                      type='checkbox'
                      className='focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 text-primary-600 focus:ring-primary-300'
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
                className='w-full rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
