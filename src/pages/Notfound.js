import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Notfound() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section
        className='relative py-24 md:py-44 lg:py-64 bg-white'
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundPosition: 'center',
        }}
      >
        <div className='relative z-10 container px-4 mx-auto'>
          <div className='max-w-4xl mx-auto text-center'>
            <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium rounded-full shadow-sm'>
              Error 404
            </span>
            <h2 className='mb-4 text-4xl md:text-5xl leading-tight font-bold tracking-tighter'>
              Page not found
            </h2>
            <p className='mb-12 text-lg md:text-xl text-coolGray-500'>
              Something went wrong, so this page is broken.
            </p>
            <div className='flex flex-wrap justify-center'>
              <div className='w-full md:w-auto py-1 md:py-0 md:mr-6'>
                <a
                  className='inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm'
                  href='#'
                >
                  Go back to Homepage
                </a>
              </div>
              <div className='w-full md:w-auto py-1 md:py-0'>
                <a
                  className='inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm'
                  href='#'
                >
                  Try Again
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className='absolute top-0 left-0 w-28 md:w-auto'
          src='flex-ui-assets/elements/wave2-yellow.svg'
          alt=''
        />
        <img
          className='absolute right-6 top-6 w-28 md:w-auto'
          src='flex-ui-assets/elements/dots3-green.svg'
          alt=''
        />
        <img
          className='absolute right-0 bottom-0 w-28 md:w-auto'
          src='flex-ui-assets/elements/wave3-red.svg'
          alt=''
        />
        <img
          className='absolute left-6 bottom-6 w-28 md:w-auto'
          src='flex-ui-assets/elements/dots3-violet.svg'
          alt=''
        />
      </section>
    </React.Fragment>
  );
}

