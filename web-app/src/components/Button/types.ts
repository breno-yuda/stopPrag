import { ButtonHTMLAttributes } from 'react';

export type ButtonStyle =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'link';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: ButtonStyle;
  text: string;
}
