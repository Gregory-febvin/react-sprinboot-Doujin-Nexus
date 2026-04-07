export const LoadingSpinner: React.FC<{ message?: string }> = ({ message = 'Chargement...' }) => (
  <div className='flex items-center justify-center h-96'>
    <div className='text-white text-center'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4'></div>
      <p>{message}</p>
    </div>
  </div>
);

export const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className='text-center text-red-500 p-10'>
    <i className='fa fa-exclamation-circle mr-2'></i>
    {message}
  </div>
);