import { Helmet } from 'react-helmet';

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className='flex mt-40 justify-center items-center'>
        <div className='mt-5 flex items-center'>
          <span className='text-2xl'>404 | </span>
          <span className='text-base ml-2'>Page not found</span>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
