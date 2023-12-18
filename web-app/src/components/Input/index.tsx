import { ErrorMessage } from '@hookform/error-message';
import { forwardRef } from 'react';

import * as S from './styles';
import * as T from './types';

export const Input = forwardRef(
  (props: T.InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {
      value,
      name,
      id,
      width,
      label,
      containerClassName,
      errors,
      placeholder,
      required,
      ...otherProps
    } = props;

    return (
      <S.InputContainer
        className={containerClassName || 'col-span-full'}
        value={value}
        width={width}
      >
        <label
          className='block text-sm font-medium leading-6 text-gray-900'
          htmlFor={id}
        >
          {label}
          {required && <span className='ml-1 text-xs text-red-600'>*</span>}
        </label>

        <div className='mt-2'>
          <input
            className={`block w-full rounded-md border-0 py-1.5 ${
              errors[name]
                ? 'text-red-600 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6'
                : 'text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            }`}
            name={name}
            id={id}
            value={value}
            ref={ref}
            placeholder={placeholder}
            {...otherProps}
          />
        </div>

        {errors && (
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => {
              return <p className='mt-1 text-xs text-red-600'>{message}</p>;
            }}
          />
        )}
      </S.InputContainer>
    );
  }
);
