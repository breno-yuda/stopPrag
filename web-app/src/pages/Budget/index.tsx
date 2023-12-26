import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as zod from 'zod';

import { Input, Select, Textarea, Button, DatePicker } from '../../components';
import { federativeUnitsBrazil } from '../../constants';

const budgetFormValidationSchema = zod.object({
  address: zod.string().min(1, 'O endereço é obrigatório.'), // Logradouro -
  budgetCoast: zod.string().min(1, 'O custo do serviço é obrigatório.'), // Custo do serviço -
  budgetDate: zod.string().min(1, 'A data do orçamento é obrigatória.'), // Data do orçamento -
  budgetDescription: zod
    .string()
    .min(1, 'A descrição do serviço é obrigatória.'), // Descrição do orçamento -
  budgetExpirationDate: zod
    .string()
    .min(1, 'A data de validade do orçamento é obrigatória.'), // Data de validade do orçamento -
  budgetNumber: zod.string().min(1, 'O número da ordem é obrigatório.'), // Número do orçamento -
  budgetPaymentMethod: zod
    .string()
    .min(1, 'O método de pagamento é obrigatório.'), // Método de pagamento do orçamento -
  cellphone: zod.string().min(1, 'O telefone é obrigatório.'), // Celular -
  city: zod.string().min(1, 'A cidade é obrigatória.'), // Cidade -
  complement: zod.string().optional(), // Complemento -
  cpf: zod.string().min(1, 'O CPF é obrigatório.'), // CPF -
  email: zod.string().email('O e-mail deve ser válido.'), // E-mail -
  federativeUnit: zod.string().min(1, 'o UF é obrigatório.'), // Unidade Federativa (UF) -
  humanVisualization: zod
    .string()
    .min(1, 'A visualização humana é obrigatória.'), // Visualização humana -
  method: zod.string().min(1, 'o método é obrigatório.'), // Método -
  name: zod.string().min(1, 'O nome é obrigatório.'), // Nome -
  neighborhood: zod.string().min(1, 'O bairro é obrigatório.'), // Bairro -
  number: zod.string().min(1, 'O número é obrigatório.'), // Número -
  pestBehavior: zod.string().min(1, 'O comportamento da praga é obrigatório.'), // Comportamento -
  telephone: zod.string().optional(), // Telefone -
  zipCode: zod.string().min(1, 'O CEP é obrigatório.'), // CEP -
});

export type BudgetFormData = zod.infer<typeof budgetFormValidationSchema>;

export const Budget = () => {
  // const navigate = useNavigate();

  const budgetForm = useForm<BudgetFormData>({
    resolver: zodResolver(budgetFormValidationSchema),
    defaultValues: {
      address: '',
      budgetCoast: '',
      budgetDate: '',
      budgetDescription: '',
      budgetExpirationDate: '',
      budgetNumber: '',
      budgetPaymentMethod: '',
      cellphone: '',
      city: '',
      complement: '',
      cpf: '',
      email: '',
      federativeUnit: '',
      humanVisualization: '',
      method: '',
      name: '',
      neighborhood: '',
      number: '',
      pestBehavior: '',
      telephone: '',
      zipCode: '',
    },
  });

  const {
    handleSubmit,
    reset,
    register,
    setValue,
    formState: { errors },
    getValues,
  } = budgetForm;

  const handleFinishInvoice = (data: BudgetFormData) => {
    console.log(data);
    reset();
  };

  const handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const originalValue = event.target.value.replace(/\D/g, '');
    const maskedValue =
      originalValue.length <= 5
        ? originalValue.replace(/(\d{5})/, '$1-')
        : originalValue.replace(/(\d{5})(\d{3})/, '$1-$2');

    setValue('zipCode', maskedValue);
    event.target.value = maskedValue;
  };

  const handleTelephoneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const originalValue = event.target.value.replace(/\D/g, '');
    const maskedValue = originalValue.replace(
      /(\d{2})(\d{4})(\d{4})/,
      '($1) $2-$3'
    );

    setValue('telephone', maskedValue);
    event.target.value = maskedValue;
  };

  const handleCellphoneChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const originalValue = event.target.value.replace(/\D/g, '');
    const maskedValue = originalValue.replace(
      /(\d{2})(\d{1})(\d{4})(\d{4})/,
      '($1) $2 $3-$4'
    );

    setValue('cellphone', maskedValue);
    event.target.value = maskedValue;
  };

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const originalValue = event.target.value.replace(/\D/g, '');
    const maskedValue = originalValue.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );

    setValue('cpf', maskedValue);
    event.target.value = maskedValue;
  };

  const searchForZipCode = async () => {
    const zipCode = getValues('zipCode');

    if (!errors['zipCode'] && zipCode.trim().length === 9) {
      try {
        const { data } = await axios.get<{
          bairro: string;
          cep: string;
          localidade: string;
          logradouro: string;
          uf: string;
          erro?: boolean;
        }>(`https://viacep.com.br/ws/${zipCode}/json/`);

        if (data.erro) {
          toast.error('CEP não encontrado.');
          return;
        }

        setValue('neighborhood', data.bairro);
        setValue('zipCode', data.cep);
        setValue('city', data.localidade);
        setValue('address', data.logradouro);
        setValue('federativeUnit', data.uf);
      } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
      }
    }
  };

  return (
    <main className='bg-white'>
      <div className='mx-auto max-w-7xl p-6 lg:px-8'>
        <form
          className='container mx-auto'
          onSubmit={handleSubmit(handleFinishInvoice)}
        >
          <div className='space-y-12'>
            <div className='border-b border-gray-900/10 pb-6'>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Informações do cliente
              </h2>

              <div className='mt-10 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-12'>
                <Input
                  label='Nome completo'
                  id='name'
                  type='text'
                  containerClassName='sm:col-span-6 md:col-span-6 lg:col-span-6'
                  errors={errors}
                  placeholder='Ex. Fulano de Tal'
                  required
                  {...register('name')}
                />

                <Input
                  label='E-mail'
                  id='email'
                  type='email'
                  containerClassName='sm:col-span-6 md:col-span-6 lg:col-span-6'
                  errors={errors}
                  placeholder='Ex. fulano@mail.com.br'
                  required
                  {...register('email')}
                />

                <Input
                  label='CPF'
                  id='cpf'
                  type='text'
                  containerClassName='sm:col-span-4 md:col-span-4 lg:col-span-4'
                  errors={errors}
                  placeholder='Ex. 999.999.999-99'
                  required
                  {...register('cpf', {
                    onChange: handleCpfChange,
                  })}
                  maxLength={14}
                />

                <Input
                  label='Telefone'
                  id='telephone'
                  type='text'
                  containerClassName='sm:col-span-4 md:col-span-4 lg:col-span-4'
                  errors={errors}
                  placeholder='Ex. (99) 9999-9999'
                  {...register('telephone', {
                    onChange: handleTelephoneChange,
                  })}
                  maxLength={14}
                />

                <Input
                  label='Celular'
                  id='cellphone'
                  type='tel'
                  containerClassName='sm:col-span-4 md:col-span-4 lg:col-span-4'
                  errors={errors}
                  placeholder='Ex. (99) 9 9999-9999'
                  required
                  {...register('cellphone', {
                    onChange: handleCellphoneChange,
                  })}
                  maxLength={15}
                />

                <Input
                  label='CEP'
                  id='zipCode'
                  type='text'
                  containerClassName='sm:col-span-4 md:col-span-4 lg:col-span-2'
                  errors={errors}
                  placeholder='Ex. 99999-999'
                  required
                  {...register('zipCode', {
                    onChange: handleZipCodeChange,
                  })}
                  maxLength={9}
                />

                <div className='mb-5 flex items-end justify-start sm:col-span-4 md:col-span-4 lg:col-span-2'>
                  <Button
                    buttonStyle='primary'
                    type='button'
                    onClick={searchForZipCode}
                    text='Buscar CEP'
                  />
                </div>

                <Input
                  label='Logradouro'
                  id='address'
                  type='text'
                  containerClassName='sm:col-span-12 md:col-span-9 lg:col-span-9'
                  errors={errors}
                  placeholder='Informe o logradouro'
                  required
                  {...register('address')}
                />

                <Input
                  label='Número'
                  id='number'
                  type='text'
                  containerClassName='sm:col-span-6 md:col-span-3 lg:col-span-3'
                  errors={errors}
                  placeholder='Informe o número'
                  required
                  {...register('number')}
                />

                <Input
                  label='Complemento'
                  id='complement'
                  type='text'
                  containerClassName='sm:col-span-6 md:col-span-6 lg:col-span-3'
                  errors={errors}
                  placeholder='Ex. bloco, apartamento, casa e etc'
                  required={false}
                  {...register('complement')}
                />

                <Input
                  label='Bairro'
                  id='neighborhood'
                  type='text'
                  containerClassName='sm:col-span-6 md:col-span-6 lg:col-span-3'
                  errors={errors}
                  placeholder='Informe o bairro'
                  required
                  {...register('neighborhood')}
                />

                <Input
                  label='Cidade'
                  id='city'
                  type='text'
                  containerClassName='sm:col-span-6 md:col-span-6 lg:col-span-3'
                  errors={errors}
                  placeholder='Informe a sua cidade'
                  required
                  {...register('city')}
                />

                <Select
                  label='UF'
                  id='federativeUnit'
                  containerClassName='sm:col-span-6 md:col-span-6 lg:col-span-3'
                  options={federativeUnitsBrazil}
                  errors={errors}
                  placeholder='Informe o estado'
                  required
                  {...register('federativeUnit')}
                />
              </div>
            </div>

            <div className='border-b border-gray-900/10 pb-6'>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Informações da ordem de serviço
              </h2>

              <div className='mt-10 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-12'>
                <Input
                  label='Número da ordem'
                  id='budgetNumber'
                  type='text'
                  containerClassName='sm:col-span-3 md:col-span-3 lg:col-span-3'
                  errors={errors}
                  placeholder='Ex. 00001-2023'
                  required
                  {...register('budgetNumber')}
                />

                <DatePicker
                  label='Data do orçamento'
                  id='budgetDate'
                  containerClassName='sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-3'
                  errors={errors}
                  required
                  {...register('budgetDate')}
                />

                <DatePicker
                  label='Data de validade'
                  id='budgetExpirationDate'
                  containerClassName='sm:col-span-6 md:col-span-6 lg:col-span-3'
                  errors={errors}
                  required
                  {...register('budgetExpirationDate')}
                />

                <Select
                  label='Método de pagamento'
                  id='budgetPaymentMethod'
                  containerClassName='sm:col-span-6 md:col-span-6 lg:col-span-3'
                  options={[
                    { value: 'pix', name: 'PIX' },
                    { value: 'dinheiro', name: 'Dinheiro' },
                    { value: 'cartao-credito', name: 'Cartão de Crédito' },
                    { value: 'cartao-debito', name: 'Cartão de Débito' },
                    { value: 'boleto', name: 'Boleto bancário' },
                    {
                      value: 'transferencia',
                      name: 'Transferência bancário',
                    },
                  ]}
                  errors={errors}
                  placeholder='Informe o método de pagamento'
                  required
                  {...register('budgetPaymentMethod')}
                />

                <Input
                  label='Custo do serviço'
                  id='budgetCoast'
                  type='text'
                  containerClassName='sm:col-span-6 md:col-span-6 lg:col-span-3'
                  errors={errors}
                  placeholder='Informe o custo do serviço'
                  required
                  {...register('budgetCoast')}
                />

                <Textarea
                  label='Descrição do serviço'
                  id='budgetDescription'
                  errors={errors}
                  placeholder='Informe a descrição do serviço'
                  required
                  {...register('budgetDescription')}
                />

                <Input
                  label='Comportamento da praga'
                  id='pestBehavior'
                  type='text'
                  containerClassName='sm:col-span-4'
                  errors={errors}
                  placeholder='Informe o comportamento da praga'
                  required
                  {...register('pestBehavior')}
                />

                <Input
                  label='Visualização humana'
                  id='humanVisualization'
                  type='text'
                  containerClassName='sm:col-span-4'
                  errors={errors}
                  placeholder='Informe a visualização humana'
                  required
                  {...register('humanVisualization')}
                />

                <Input
                  label='Método'
                  id='method'
                  type='text'
                  containerClassName='sm:col-span-4'
                  errors={errors}
                  placeholder='Informe o método'
                  required
                  {...register('method')}
                />
              </div>
            </div>
          </div>

          <div className='mt-6 flex items-center justify-between gap-x-6'>
            <Button
              buttonStyle='secondary'
              type='button'
              onClick={() => reset()}
              text='Limpar'
            />

            <Button buttonStyle='primary' type='submit' text='Salvar' />
          </div>
        </form>
      </div>
    </main>
  );
};
