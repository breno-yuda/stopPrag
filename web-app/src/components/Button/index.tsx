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
      'rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600',
    secondary: 'text-sm font-semibold leading-6 text-gray-900',
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
