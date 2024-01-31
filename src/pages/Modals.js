import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Modals() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-coolGray-800 bg-opacity-80 overflow-y-auto'>
          <div className='max-w-lg w-full m-auto p-8 bg-white rounded-md'>
            <div className='flex items-center justify-center w-10 h-10 mb-4 bg-red-100 rounded-md'>
              <svg
                width={16}
                height={16}
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.4734 5.52667C10.4114 5.46418 10.3377 5.41458 10.2564 5.38074C10.1752 5.34689 10.0881 5.32947 10.0001 5.32947C9.91205 5.32947 9.82491 5.34689 9.74367 5.38074C9.66243 5.41458 9.58869 5.46418 9.52672 5.52667L8.00005 7.06L6.47339 5.52667C6.34785 5.40113 6.17759 5.3306 6.00005 5.3306C5.82252 5.3306 5.65226 5.40113 5.52672 5.52667C5.40118 5.6522 5.33066 5.82247 5.33066 6C5.33066 6.17753 5.40118 6.3478 5.52672 6.47333L7.06005 8L5.52672 9.52667C5.46423 9.58864 5.41464 9.66238 5.38079 9.74362C5.34695 9.82485 5.32952 9.91199 5.32952 10C5.32952 10.088 5.34695 10.1751 5.38079 10.2564C5.41464 10.3376 5.46423 10.4114 5.52672 10.4733C5.58869 10.5358 5.66243 10.5854 5.74367 10.6193C5.82491 10.6531 5.91204 10.6705 6.00005 10.6705C6.08806 10.6705 6.1752 10.6531 6.25644 10.6193C6.33768 10.5854 6.41141 10.5358 6.47339 10.4733L8.00005 8.94L9.52672 10.4733C9.58869 10.5358 9.66243 10.5854 9.74367 10.6193C9.82491 10.6531 9.91205 10.6705 10.0001 10.6705C10.0881 10.6705 10.1752 10.6531 10.2564 10.6193C10.3377 10.5854 10.4114 10.5358 10.4734 10.4733C10.5359 10.4114 10.5855 10.3376 10.6193 10.2564C10.6532 10.1751 10.6706 10.088 10.6706 10C10.6706 9.91199 10.6532 9.82485 10.6193 9.74362C10.5855 9.66238 10.5359 9.58864 10.4734 9.52667L8.94005 8L10.4734 6.47333C10.5359 6.41136 10.5855 6.33762 10.6193 6.25638C10.6532 6.17514 10.6706 6.08801 10.6706 6C10.6706 5.91199 10.6532 5.82485 10.6193 5.74361C10.5855 5.66238 10.5359 5.58864 10.4734 5.52667V5.52667ZM12.7134 3.28667C12.0984 2.64993 11.3628 2.14205 10.5494 1.79266C9.73606 1.44326 8.86126 1.25936 7.97606 1.25166C7.09087 1.24397 6.213 1.41265 5.39369 1.74786C4.57438 2.08306 3.83004 2.57808 3.20409 3.20403C2.57814 3.82998 2.08311 4.57433 1.74791 5.39364C1.4127 6.21295 1.24402 7.09081 1.25172 7.97601C1.25941 8.8612 1.44332 9.736 1.79271 10.5494C2.1421 11.3627 2.64998 12.0984 3.28672 12.7133C3.9017 13.3501 4.63733 13.8579 5.45069 14.2073C6.26405 14.5567 7.13885 14.7406 8.02404 14.7483C8.90924 14.756 9.7871 14.5874 10.6064 14.2521C11.4257 13.9169 12.1701 13.4219 12.796 12.796C13.422 12.17 13.917 11.4257 14.2522 10.6064C14.5874 9.78705 14.7561 8.90919 14.7484 8.02399C14.7407 7.1388 14.5568 6.264 14.2074 5.45064C13.858 4.63728 13.3501 3.90165 12.7134 3.28667V3.28667ZM11.7734 11.7733C10.9014 12.6463 9.75375 13.1899 8.52592 13.3115C7.29809 13.4332 6.06606 13.1254 5.03973 12.4405C4.01341 11.7557 3.25629 10.7361 2.89737 9.55566C2.53844 8.37517 2.59992 7.10676 3.07133 5.96652C3.54273 4.82628 4.3949 3.88476 5.48265 3.30237C6.57039 2.71998 7.82642 2.53275 9.03672 2.77258C10.247 3.01241 11.3368 3.66446 12.1202 4.61764C12.9037 5.57082 13.3324 6.76616 13.3334 8C13.3358 8.70086 13.1991 9.39523 12.9313 10.0429C12.6636 10.6906 12.27 11.2788 11.7734 11.7733V11.7733Z'
                  fill='#EF5944'
                />
              </svg>
            </div>
            <h3 className='mb-2 text-2xl font-semibold text-coolGray-900'>
              Delete section?
            </h3>
            <p className='mb-6 font-medium text-sm text-coolGray-500'>
              Are you sure you want to delete this section? This action cannot
              be undone.
            </p>
            <div className='flex flex-wrap justify-end -m-2'>
              <div className='w-full md:w-1/2 p-2'>
                <button className='flex flex-wrap justify-center w-full px-4 py-2.5 bg-white font-medium text-base text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-button'>
                  <p>Cancel</p>
                </button>
              </div>
              <div className='w-full md:w-1/2 p-2'>
                <button className='flex flex-wrap justify-center w-full px-4 py-2.5 bg-coolGray-800 hover:bg-coolGray-900 font-medium text-base text-white border border-coolGray-900 rounded-md shadow-button'>
                  <p>Delete</p>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-coolGray-800 bg-opacity-80 overflow-y-auto'>
          <div className='max-w-lg w-full m-auto p-8 bg-white rounded-md'>
            <div className='flex items-center justify-center w-10 h-10 mb-4 bg-green-100 rounded-md'>
              <svg
                width={16}
                height={16}
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.4733 4.80667C12.4114 4.74418 12.3376 4.69458 12.2564 4.66074C12.1751 4.62689 12.088 4.60947 12 4.60947C11.912 4.60947 11.8249 4.62689 11.7436 4.66074C11.6624 4.69458 11.5886 4.74418 11.5267 4.80667L6.56 9.78L4.47333 7.68667C4.40899 7.62451 4.33302 7.57563 4.24979 7.54283C4.16655 7.51003 4.07767 7.49394 3.98821 7.49549C3.89876 7.49703 3.81049 7.51619 3.72844 7.55185C3.64638 7.58751 3.57216 7.63898 3.51 7.70333C3.44784 7.76768 3.39896 7.84364 3.36616 7.92688C3.33336 8.01011 3.31727 8.099 3.31882 8.18845C3.32037 8.2779 3.33952 8.36618 3.37518 8.44823C3.41084 8.53028 3.46232 8.60451 3.52667 8.66667L6.08667 11.2267C6.14864 11.2892 6.22238 11.3387 6.30362 11.3726C6.38485 11.4064 6.47199 11.4239 6.56 11.4239C6.64801 11.4239 6.73514 11.4064 6.81638 11.3726C6.89762 11.3387 6.97136 11.2892 7.03333 11.2267L12.4733 5.78667C12.541 5.72424 12.595 5.64847 12.6319 5.56414C12.6689 5.4798 12.688 5.38873 12.688 5.29667C12.688 5.2046 12.6689 5.11353 12.6319 5.02919C12.595 4.94486 12.541 4.86909 12.4733 4.80667Z'
                  fill='#2AD168'
                />
              </svg>
            </div>
            <h3 className='mb-2 text-2xl font-semibold text-coolGray-900'>
              Modal success
            </h3>
            <p className='mb-6 font-medium text-sm text-coolGray-500'>
              This section has been published sucessfully.
            </p>
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
      </>
    </React.Fragment>
  );
}

