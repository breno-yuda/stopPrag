import { useState } from 'react';
import { FolderArrowDownIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

import * as T from './types';

import { Button } from '..';

export const FileItem = ({ file }: T.FileItem) => {
  const [isShowing, setIsShowing] = useState(true);

  const handleMouseEnter = () => setIsShowing(false);
  const handleMouseLeave = () => setIsShowing(true);

  return (
    <div
      className='group relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='h-44 overflow-hidden rounded-md bg-gray-200 p-6'>
        {isShowing ? (
          <FolderArrowDownIcon className='h-full w-full' aria-hidden='true' />
        ) : (
          <div
            className='flex h-full w-full flex-col content-center justify-center gap-2'
            aria-hidden='true'
          >
            <Button buttonStyle='primary' type='submit' text='Editar' />

            {/* <NavLink to={file.link}> */}
            <Button buttonStyle='secondary' type='submit' text='Baixar' />
            {/* </NavLink> */}

            <Button buttonStyle='danger' type='submit' text='Excluir' />
          </div>
        )}
      </div>

      <div className='mt-4 flex justify-between'>
        <h3 className='text-sm text-gray-700'>
          <span aria-hidden='true' className='absolute inset-0' />
          {file.clientName}
        </h3>

        <p className='text-sm font-medium text-gray-900'>{file.date}</p>
      </div>
    </div>
  );
};
