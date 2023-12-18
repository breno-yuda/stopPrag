import { TextareaHTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form';

import { BudgetFormData } from '../../pages/Budget';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: number;
  label?: string;
  containerClassName?: string;
  errors: FieldErrors<BudgetFormData>;
  name: keyof BudgetFormData;
}

export interface TextareaContainerProps {
  value: TextareaHTMLAttributes<HTMLTextAreaElement>['value'];
  width?: number;
}
