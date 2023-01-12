import React, { FC } from 'react';

interface IError {
  error?: string | null;
}

const ErrorMessage: FC<IError> = ({ error }) => {
  return <h3 className='text-2xl mt-10 text-center'>{error}</h3>;
};

export default ErrorMessage;
