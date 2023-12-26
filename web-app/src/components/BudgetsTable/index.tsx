import { Dialog, Transition } from '@headlessui/react';
import {
  TrashIcon,
  PencilIcon,
  ArrowDownTrayIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import { Fragment, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TableData {
  id: number;
  name: string;
  budgetCoast: string;
  email: string;
  budgetDate: string;
}

const tableData: TableData[] = [
  {
    id: 1,
    name: 'Kory',
    budgetCoast: '$656.32',
    email: 'kbalfour0@google.es',
    budgetDate: '9/6/2023',
  },
  {
    id: 2,
    name: 'Helaina',
    budgetCoast: '$698.60',
    email: 'hchallender1@yahoo.co.jp',
    budgetDate: '5/12/2023',
  },
  {
    id: 3,
    name: 'Giacomo',
    budgetCoast: '$330.46',
    email: 'gknell2@imgur.com',
    budgetDate: '12/17/2023',
  },
  {
    id: 4,
    name: 'Christophorus',
    budgetCoast: '$234.97',
    email: 'ccleevely3@vk.com',
    budgetDate: '6/10/2023',
  },
  {
    id: 5,
    name: 'Sergeant',
    budgetCoast: '$817.23',
    email: 'sskillicorn4@telegraph.co.uk',
    budgetDate: '11/25/2023',
  },
  {
    id: 6,
    name: 'Stephen',
    budgetCoast: '$674.03',
    email: 'slandrieu5@ibm.com',
    budgetDate: '6/1/2023',
  },
  {
    id: 7,
    name: 'Dominique',
    budgetCoast: '$642.91',
    email: 'dalexandrou6@cornell.edu',
    budgetDate: '5/17/2023',
  },
  {
    id: 8,
    name: 'Paulette',
    budgetCoast: '$868.39',
    email: 'pmcneillie7@spiegel.de',
    budgetDate: '7/31/2023',
  },
  {
    id: 9,
    name: 'Colby',
    budgetCoast: '$377.06',
    email: 'cvarcoe8@storify.com',
    budgetDate: '3/28/2023',
  },
  {
    id: 10,
    name: 'Rafaela',
    budgetCoast: '$606.92',
    email: 'redgeller9@issuu.com',
    budgetDate: '10/23/2023',
  },
  {
    id: 11,
    name: 'Cherie',
    budgetCoast: '$944.56',
    email: 'clethbridgea@booking.com',
    budgetDate: '7/23/2023',
  },
  {
    id: 12,
    name: 'Cassondra',
    budgetCoast: '$327.83',
    email: 'cdunstonb@house.gov',
    budgetDate: '12/6/2023',
  },
  {
    id: 13,
    name: 'Hartley',
    budgetCoast: '$165.16',
    email: 'hnettingc@marriott.com',
    budgetDate: '9/24/2023',
  },
  {
    id: 14,
    name: 'Marrilee',
    budgetCoast: '$561.27',
    email: 'mweymand@shinystat.com',
    budgetDate: '2/12/2023',
  },
  {
    id: 15,
    name: 'Raddy',
    budgetCoast: '$512.99',
    email: 'rfielde@ucoz.com',
    budgetDate: '1/13/2023',
  },
  {
    id: 16,
    name: 'Laurence',
    budgetCoast: '$957.56',
    email: 'lgarlandf@timesonline.co.uk',
    budgetDate: '5/27/2023',
  },
  {
    id: 17,
    name: 'Walther',
    budgetCoast: '$900.74',
    email: 'wjedrzejczakg@purevolume.com',
    budgetDate: '12/4/2023',
  },
  {
    id: 18,
    name: 'Mufinella',
    budgetCoast: '$186.26',
    email: 'mpendallh@studiopress.com',
    budgetDate: '8/22/2023',
  },
  {
    id: 19,
    name: 'Maureene',
    budgetCoast: '$348.98',
    email: 'mconnichiei@studiopress.com',
    budgetDate: '2/19/2023',
  },
  {
    id: 20,
    name: 'Elsa',
    budgetCoast: '$283.30',
    email: 'ewiggj@virginia.edu',
    budgetDate: '11/8/2023',
  },
];

export const BudgetsTable = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedBudgetId, setSelectedBudgetId] = useState<null | number>(null);

  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  const closeDeleteBudgetModal = () => {
    setOpen(false);
    setSelectedBudgetId(null);
  };

  const deleteBudget = (budgetId: number) => {
    setOpen(true);
    setSelectedBudgetId(budgetId);
  };

  const editBudget = (budgetId: number) => {
    navigate(`/budget/${budgetId}`);
  };

  const downloadBudget = (budgetId: number) => {
    console.log('Baixar orçamento ' + budgetId);
  };

  return (
    <>
      <table className='w-full text-left text-sm text-gray-500 rtl:text-right'>
        <thead className='bg-gray-50 text-xs uppercase text-gray-700'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Nome cliente
            </th>

            <th scope='col' className='px-6 py-3'>
              Data do orçamento
            </th>

            <th scope='col' className='px-6 py-3'>
              E-mail
            </th>

            <th scope='col' className='px-6 py-3'>
              Custo do serviço
            </th>

            <th scope='col' className='px-6 py-3' />
          </tr>
        </thead>

        <tbody>
          {tableData.map(item => {
            return (
              <tr className='border-b bg-white hover:bg-gray-50' key={item.id}>
                <th
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'
                >
                  {item.name}
                </th>

                <td className='px-6 py-4'>{item.budgetDate}</td>

                <td className='px-6 py-4'>{item.email}</td>

                <td className='px-6 py-4'>{item.budgetCoast}</td>

                <td className='px-6 py-4'>
                  <div className='flex content-center	justify-start gap-8'>
                    <TrashIcon
                      className='h-5 w-5 cursor-pointer text-gray-500 hover:text-blue-500'
                      aria-hidden='true'
                      title='Deletar orçamento'
                      onClick={() => deleteBudget(item.id)}
                    />

                    <PencilIcon
                      className='h-5 w-5 cursor-pointer text-gray-500 hover:text-blue-500'
                      aria-hidden='true'
                      title='Editar orçamento'
                      onClick={() => editBudget(item.id)}
                    />

                    <ArrowDownTrayIcon
                      className='h-5 w-5 cursor-pointer text-gray-500 hover:text-blue-500'
                      aria-hidden='true'
                      title='Baixar orçamento'
                      onClick={() => downloadBudget(item.id)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className='flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800'>
        <div className='animate-pulse rounded-full bg-blue-200 px-3 py-1 text-center text-xs font-medium leading-none text-blue-800 dark:bg-blue-900 dark:text-blue-200'>
          loading...
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                  <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                    <div className='sm:flex sm:items-start'>
                      <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                        <ExclamationTriangleIcon
                          className='h-6 w-6 text-red-600'
                          aria-hidden='true'
                        />
                      </div>

                      <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                        <Dialog.Title
                          as='h3'
                          className='text-base font-semibold leading-6 text-gray-900'
                        >
                          Deseja realmente apagar esse orçamento?
                        </Dialog.Title>

                        <div className='mt-2'>
                          <p className='text-sm text-gray-500'>
                            Todos os seus dados serão removidos permanentemente.
                            Esse a ação não pode ser desfeita.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                    <button
                      type='button'
                      className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
                      onClick={() => {
                        console.log(selectedBudgetId);
                        closeDeleteBudgetModal();
                      }}
                    >
                      Apagar
                    </button>

                    <button
                      type='button'
                      className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                      onClick={closeDeleteBudgetModal}
                      ref={cancelButtonRef}
                    >
                      Cancelar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
