import * as T from './types';

export const Button = ({
  onClick,
  buttonStyle = 'primary',
  type,
  text,
  ...otherProps
}: T.ButtonProps) => {
  const className: Record<T.ButtonStyle, string> = {
    primary:
      'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
    secondary:
      'rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600',
    danger:
      'rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600',
    success:
      'rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600',
    warning: '',
    link: 'text-sm font-semibold leading-6 text-gray-900',
  };

  return (
    <button
      className={className[buttonStyle]}
      type={type}
      onClick={onClick}
      {...otherProps}
    >
      {text}
    </button>
  );
};
