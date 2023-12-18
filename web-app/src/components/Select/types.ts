import { SelectHTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form';

import { BudgetFormData } from '../../pages/Budget';
interface SelectOptions {
  value: string;
  name: string;
}
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  width?: number;
  label?: string;
  containerClassName?: string;
  options: SelectOptions[];
  errors: FieldErrors<BudgetFormData>;
  name: keyof BudgetFormData;
}

export interface SelectContainerProps {
  value: SelectHTMLAttributes<HTMLSelectElement>['value'];
  width?: number;
}
