import { ButtonHTMLAttributes } from 'react';

export type ButtonStyle = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: ButtonStyle;
  text: string;
}
