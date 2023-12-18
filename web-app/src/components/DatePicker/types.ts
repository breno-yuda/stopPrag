import { InputHTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form';

import { BudgetFormData } from '../../pages/Budget';

export interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number;
  label?: string;
  containerClassName?: string;
  errors: FieldErrors<BudgetFormData>;
  name: keyof BudgetFormData;
}

export interface DatePickerContainerProps {
  value: InputHTMLAttributes<HTMLInputElement>['value'];
  width?: number;
}
