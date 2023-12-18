import { InputHTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form';

import { BudgetFormData } from '../../pages/Budget';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number;
  label?: string;
  containerClassName?: string;
  errors: FieldErrors<BudgetFormData>;
  name: keyof BudgetFormData;
}

export interface InputContainerProps {
  value: InputHTMLAttributes<HTMLInputElement>['value'];
  width?: number;
}
