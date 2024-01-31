import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Payment() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <section className='fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-coolGray-800 bg-opacity-80 overflow-y-auto'>
        <div className='max-w-lg w-full m-auto p-8 bg-white rounded-md'>
          <div className='p-7 mb-8 bg-coolGray-50 rounded-md'>
            <img
              className='mx-auto h-48 object-cover'
              src='flex-ui-assets/images/dashboard/forms/card2.png'
              alt=''
            />
          </div>
          <p className='mb-2 text-2xl font-semibold text-coolGray-900'>
            Update payment method
          </p>
          <p className='mb-6 text-sm font-medium text-coolGray-500'>
            Update your credit card details
          </p>
          <div className='flex flex-wrap -m-3 mb-2'>
            <div className='w-full md:flex-1 p-3'>
              <p className='mb-1.5 font-medium text-base text-coolGray-800'>
                Name on card
              </p>
              <input
                className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                type='text'
                placeholder='John Doe'
              />
            </div>
            <div className='w-full md:w-28 p-3'>
              <p className='mb-1.5 font-medium text-base text-coolGray-800'>
                Expiry
              </p>
              <input
                className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                type='text'
                placeholder='06/24'
              />
            </div>
          </div>
          <div className='flex flex-wrap -m-3 mb-6'>
            <div className='w-full md:flex-1 p-3'>
              <p className='mb-1.5 font-medium text-base text-coolGray-800'>
                Card Number
              </p>
              <div className='flex items-center focus-within:border-green-500 overflow-hidden border border-coolGray-200 rounded-lg shadow-input'>
                <div className='flex-shrink-0 pl-3.5 pr-2'>
                  <img
                    src='flex-ui-assets/images/dashboard/forms/card.png'
                    alt=''
                  />
                </div>
                <input
                  className='w-full pr-4 py-2.5 text-base text-coolGray-900 font-normal outline-none'
                  type='text'
                  placeholder='1234 4321 1234 4321'
                />
              </div>
            </div>
            <div className='w-full md:w-28 p-3'>
              <p className='mb-1.5 font-medium text-base text-coolGray-800'>
                CVV
              </p>
              <input
                className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                type='password'
                placeholder='CVV'
              />
            </div>
          </div>
          <div className='flex flex-wrap justify-end -m-2'>
            <div className='w-full md:w-1/2 p-2'>
              <button className='flex flex-wrap justify-center w-full px-4 py-2.5 bg-white font-medium text-base text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-button'>
                <p>Cancel</p>
              </button>
            </div>
            <div className='w-full md:w-1/2 p-2'>
              <button className='flex flex-wrap justify-center w-full px-4 py-2.5 bg-green-500 hover:bg-green-600 font-medium text-base text-white border border-green-500 rounded-md shadow-button'>
                <p>Confirm</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

