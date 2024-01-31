import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Forms() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='bg-coolGray-50 py-4'>
          <div className='container px-4 mx-auto'>
            <div className='p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard'>
              <div className='pb-6 border-b border-coolGray-100'>
                <div className='flex flex-wrap items-center justify-between -m-2'>
                  <div className='w-full md:w-auto p-2'>
                    <h2 className='text-coolGray-900 text-lg font-semibold'>
                      Personal info
                    </h2>
                    <p className='text-xs text-coolGray-500 font-medium'>
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                  <div className='w-full md:w-auto p-2'>
                    <div className='flex flex-wrap justify-between -m-1.5'>
                      <div className='w-full md:w-auto p-1.5'>
                        <button className='flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button'>
                          <p>Cancel</p>
                        </button>
                      </div>
                      <div className='w-full md:w-auto p-1.5'>
                        <button className='flex flex-wrap justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button'>
                          <p>Save</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-6 border-b border-coolGray-100'>
                <div className='w-full md:w-9/12'>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-full md:w-1/3 p-3'>
                      <p className='text-sm text-coolGray-800 font-semibold'>
                        Name
                      </p>
                    </div>
                    <div className='w-full md:w-1/3 p-3'>
                      <input
                        className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                        type='text'
                        placeholder='John'
                      />
                    </div>
                    <div className='w-full md:w-1/3 p-3'>
                      <input
                        className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                        type='text'
                        placeholder='Doe'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-6 border-b border-coolGray-100'>
                <div className='w-full md:w-9/12'>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-full md:w-1/3 p-3'>
                      <p className='text-sm text-coolGray-800 font-semibold'>
                        Email address
                      </p>
                    </div>
                    <div className='w-full md:flex-1 p-3'>
                      <input
                        className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                        type='text'
                        placeholder='johndoe@flex.co'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-6 border-b border-coolGray-100'>
                <div className='w-full md:w-9/12'>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-full md:w-1/3 p-3'>
                      <p className='text-sm text-coolGray-800 font-semibold'>
                        Photo
                      </p>
                      <p className='text-xs text-coolGray-500 font-medium'>
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                    <div className='w-full md:w-auto p-3'>
                      <img
                        src='flex-ui-assets/images/dashboard/forms/avatar.png'
                        alt=''
                      />
                    </div>
                    <div className='w-full md:flex-1 p-3'>
                      <div className='relative flex flex-col items-center justify-center p-6 h-44 text-center text-green-500 focus-within:border-green-500 border border-dashed border-coolGray-200 rounded-lg'>
                        <svg
                          className='mb-1.5'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8.71 7.71L11 5.41V15C11 15.2652 11.1054 15.5196 11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071C12.8946 15.5196 13 15.2652 13 15V5.41L15.29 7.71C15.383 7.80373 15.4936 7.87813 15.6154 7.92889C15.7373 7.97966 15.868 8.0058 16 8.0058C16.132 8.0058 16.2627 7.97966 16.3846 7.92889C16.5064 7.87813 16.617 7.80373 16.71 7.71C16.8037 7.61704 16.8781 7.50644 16.9289 7.38458C16.9797 7.26272 17.0058 7.13202 17.0058 7C17.0058 6.86799 16.9797 6.73729 16.9289 6.61543C16.8781 6.49357 16.8037 6.38297 16.71 6.29L12.71 2.29C12.6149 2.19896 12.5028 2.1276 12.38 2.08C12.1365 1.97999 11.8635 1.97999 11.62 2.08C11.4972 2.1276 11.3851 2.19896 11.29 2.29L7.29 6.29C7.19676 6.38324 7.1228 6.49393 7.07234 6.61575C7.02188 6.73758 6.99591 6.86814 6.99591 7C6.99591 7.13186 7.02188 7.26243 7.07234 7.38425C7.1228 7.50607 7.19676 7.61677 7.29 7.71C7.38324 7.80324 7.49393 7.8772 7.61575 7.92766C7.73757 7.97812 7.86814 8.00409 8 8.00409C8.13186 8.00409 8.26243 7.97812 8.38425 7.92766C8.50607 7.8772 8.61676 7.80324 8.71 7.71ZM21 12C20.7348 12 20.4804 12.1054 20.2929 12.2929C20.1054 12.4804 20 12.7348 20 13V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V13C4 12.7348 3.89464 12.4804 3.70711 12.2929C3.51957 12.1054 3.26522 12 3 12C2.73478 12 2.48043 12.1054 2.29289 12.2929C2.10536 12.4804 2 12.7348 2 13V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7957 22 19V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z'
                            fill='currentColor'
                          />
                        </svg>
                        <p className='mb-1 text-sm text-coolGray-800 font-medium'>
                          <span className='text-green-500'>
                            Click to Upload a file
                          </span>
                          <span>or drag and drop</span>
                        </p>
                        <p className='text-xs text-coolGray-500 font-medium'>
                          PNG, JPG, GIF or up to 10MB
                        </p>
                        <input
                          className='absolute top-0 left-0 w-full h-full opacity-0'
                          type='file'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-6 border-b border-coolGray-100'>
                <div className='w-full md:w-9/12'>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-full md:w-1/3 p-3'>
                      <p className='text-sm text-coolGray-800 font-semibold'>
                        Role
                      </p>
                    </div>
                    <div className='w-full md:flex-1 p-3'>
                      <input
                        className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                        type='text'
                        placeholder='Frontend Developer'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-6 border-b border-coolGray-100'>
                <div className='w-full md:w-9/12'>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-full md:w-1/3 p-3'>
                      <p className='text-sm text-coolGray-800 font-semibold'>
                        Country
                      </p>
                    </div>
                    <div className='w-full md:flex-1 p-3'>
                      <div className='relative'>
                        <svg
                          className='absolute right-4 top-1/2 transform -translate-y-1/2'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M11.3333 6.1133C11.2084 5.98913 11.0395 5.91943 10.8633 5.91943C10.6872 5.91943 10.5182 5.98913 10.3933 6.1133L8.00001 8.47329L5.64001 6.1133C5.5151 5.98913 5.34613 5.91943 5.17001 5.91943C4.99388 5.91943 4.82491 5.98913 4.70001 6.1133C4.63752 6.17527 4.58792 6.249 4.55408 6.33024C4.52023 6.41148 4.50281 6.49862 4.50281 6.58663C4.50281 6.67464 4.52023 6.76177 4.55408 6.84301C4.58792 6.92425 4.63752 6.99799 4.70001 7.05996L7.52667 9.88663C7.58865 9.94911 7.66238 9.99871 7.74362 10.0326C7.82486 10.0664 7.912 10.0838 8.00001 10.0838C8.08801 10.0838 8.17515 10.0664 8.25639 10.0326C8.33763 9.99871 8.41136 9.94911 8.47334 9.88663L11.3333 7.05996C11.3958 6.99799 11.4454 6.92425 11.4793 6.84301C11.5131 6.76177 11.5305 6.67464 11.5305 6.58663C11.5305 6.49862 11.5131 6.41148 11.4793 6.33024C11.4454 6.249 11.3958 6.17527 11.3333 6.1133Z'
                            fill='#8896AB'
                          />
                        </svg>
                        <select className='appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-green-500 rounded-lg shadow-input'>
                          <option>United States</option>
                          <option>Poland</option>
                          <option>France</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-6 border-b border-coolGray-100'>
                <div className='w-full md:w-9/12'>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-full md:w-1/3 p-3'>
                      <p className='text-sm text-coolGray-800 font-semibold'>
                        Timezone
                      </p>
                    </div>
                    <div className='w-full md:flex-1 p-3'>
                      <div className='relative'>
                        <svg
                          className='absolute right-4 top-1/2 transform -translate-y-1/2'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M11.3333 6.1133C11.2084 5.98913 11.0395 5.91943 10.8633 5.91943C10.6872 5.91943 10.5182 5.98913 10.3933 6.1133L8.00001 8.47329L5.64001 6.1133C5.5151 5.98913 5.34613 5.91943 5.17001 5.91943C4.99388 5.91943 4.82491 5.98913 4.70001 6.1133C4.63752 6.17527 4.58792 6.249 4.55408 6.33024C4.52023 6.41148 4.50281 6.49862 4.50281 6.58663C4.50281 6.67464 4.52023 6.76177 4.55408 6.84301C4.58792 6.92425 4.63752 6.99799 4.70001 7.05996L7.52667 9.88663C7.58865 9.94911 7.66238 9.99871 7.74362 10.0326C7.82486 10.0664 7.912 10.0838 8.00001 10.0838C8.08801 10.0838 8.17515 10.0664 8.25639 10.0326C8.33763 9.99871 8.41136 9.94911 8.47334 9.88663L11.3333 7.05996C11.3958 6.99799 11.4454 6.92425 11.4793 6.84301C11.5131 6.76177 11.5305 6.67464 11.5305 6.58663C11.5305 6.49862 11.5131 6.41148 11.4793 6.33024C11.4454 6.249 11.3958 6.17527 11.3333 6.1133Z'
                            fill='#8896AB'
                          />
                        </svg>
                        <select className='appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-green-500 rounded-lg shadow-input'>
                          <option>
                            Central Daylight Time (GMT-5) UTC-08:00
                          </option>
                          <option>
                            Central Daylight Time (GMT-5) UTC-08:00
                          </option>
                          <option>
                            Central Daylight Time (GMT-5) UTC-08:00
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-6 border-b border-coolGray-100'>
                <div className='w-full md:w-9/12'>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-full md:w-1/3 p-3'>
                      <p className='text-sm text-coolGray-800 font-semibold'>
                        Domain
                      </p>
                    </div>
                    <div className='w-full md:flex-1 p-3'>
                      <div className='flex items-center focus-within:border-green-500 overflow-hidden border border-coolGray-200 rounded-lg shadow-input'>
                        <p className='px-4 text-base text-coolGray-500 font-normal'>
                          https://
                        </p>
                        <input
                          className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none border-l'
                          type='text'
                          placeholder='flex.co'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-6 border-b border-coolGray-100'>
                <div className='w-full md:w-9/12'>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-full md:w-1/3 p-3'>
                      <p className='text-sm text-coolGray-800 font-semibold'>
                        Domain
                      </p>
                    </div>
                    <div className='w-full md:flex-1 p-3'>
                      <div className='flex items-center focus-within:border-green-500 overflow-hidden border border-coolGray-200 rounded-lg shadow-input'>
                        <p className='px-4 text-base text-coolGray-500 font-normal'>
                          flex.co/
                        </p>
                        <input
                          className='w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none border-l'
                          type='text'
                          placeholder='johndoe42'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pt-6'>
                <div className='w-full md:w-9/12'>
                  <div className='flex flex-wrap -m-3'>
                    <div className='w-full md:w-1/3 p-3'>
                      <p className='text-sm text-coolGray-800 font-semibold'>
                        Bio
                      </p>
                      <p className='text-xs text-coolGray-500 font-medium'>
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                    <div className='w-full md:flex-1 p-3'>
                      <textarea
                        className='block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input resize-none'
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-coolGray-50 py-4'>
          <div className='container px-4 mx-auto'>
            <div className='p-6 mx-auto bg-white border border-coolGray-100 rounded-md shadow-dashboard'>
              <div className='flex flex-wrap items-center justify-between -m-2 mb-6'>
                <div className='w-auto p-2'>
                  <p className='font-semibold text-lg text-coolGray-900'>
                    Schedule
                  </p>
                </div>
                <div className='w-auto p-2'>
                  <div className='flex flex-wrap -m-2'>
                    <div className='w-auto p-2'>
                      <button className='px-3 py-1 text-xs font-medium text-darkCoolGray-500 bg-darkCoolGray-100 rounded-full'>
                        Today
                      </button>
                    </div>
                    <div className='w-auto p-2'>
                      <button className='px-3 py-1 text-xs font-medium text-darkCoolGray-500 bg-transparent rounded-full'>
                        Tomorrow
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap -m-2'>
                <div className='w-full p-2'>
                  <h3 className='mb-1 font-medium text-lg text-coolGray-900'>
                    Group meeting
                  </h3>
                  <div className='flex flex-wrap items-center pb-4 -m-2'>
                    <div className='w-auto p-2'>
                      <div className='flex flex-wrap items-center'>
                        <div className='w-auto mr-1'>
                          <svg
                            width={16}
                            height={16}
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M7.33333 1.33333C6.01478 1.33333 4.72585 1.72432 3.62952 2.45686C2.5332 3.18941 1.67871 4.2306 1.17413 5.44877C0.669545 6.66695 0.537523 8.00739 0.794758 9.3006C1.05199 10.5938 1.68693 11.7817 2.61928 12.714C3.55163 13.6464 4.73952 14.2813 6.03272 14.5386C7.32593 14.7958 8.66638 14.6638 9.88455 14.1592C11.1027 13.6546 12.1439 12.8001 12.8765 11.7038C13.609 10.6075 14 9.31854 14 8C14 7.12452 13.8276 6.25761 13.4925 5.44877C13.1575 4.63993 12.6664 3.90501 12.0474 3.28595C11.4283 2.66689 10.6934 2.17583 9.88455 1.8408C9.07571 1.50577 8.20881 1.33333 7.33333 1.33333ZM7.33333 13.3333C6.27849 13.3333 5.24735 13.0205 4.37028 12.4345C3.49322 11.8485 2.80964 11.0155 2.40597 10.041C2.0023 9.06643 1.89668 7.99408 2.10247 6.95951C2.30826 5.92495 2.81621 4.97464 3.56209 4.22876C4.30797 3.48288 5.25828 2.97493 6.29284 2.76914C7.32741 2.56335 8.39977 2.66897 9.3743 3.07264C10.3488 3.47631 11.1818 4.15989 11.7678 5.03695C12.3539 5.91402 12.6667 6.94516 12.6667 8C12.6667 9.41448 12.1048 10.771 11.1046 11.7712C10.1044 12.7714 8.74781 13.3333 7.33333 13.3333ZM7.33333 3.99999C7.15652 3.99999 6.98695 4.07023 6.86192 4.19526C6.7369 4.32028 6.66666 4.48985 6.66666 4.66666V7.61333L5.26666 8.42C5.13823 8.49277 5.03759 8.60611 4.98051 8.74225C4.92344 8.87838 4.91316 9.02961 4.95129 9.17222C4.98942 9.31482 5.0738 9.44074 5.1912 9.53022C5.3086 9.61971 5.45238 9.66769 5.59999 9.66666C5.71678 9.66747 5.83172 9.63758 5.93333 9.58L7.66666 8.58L7.72666 8.51999L7.83333 8.43333C7.85939 8.40033 7.88175 8.36455 7.89999 8.32666C7.92172 8.29087 7.9396 8.25288 7.95333 8.21333C7.97146 8.17094 7.98271 8.12593 7.98666 8.08L7.99999 8V4.66666C7.99999 4.48985 7.92976 4.32028 7.80473 4.19526C7.67971 4.07023 7.51014 3.99999 7.33333 3.99999Z'
                              fill='#D5DAE1'
                            />
                          </svg>
                        </div>
                        <div className='w-auto'>
                          <p className='text-xs font-medium text-coolGray-500'>
                            10:00AM
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='w-auto p-2'>
                      <div className='flex flex-wrap items-center'>
                        <div className='w-auto mr-1'>
                          <svg
                            width={16}
                            height={16}
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M12 2.98667C10.9391 1.92581 9.50028 1.32982 7.99999 1.32982C6.4997 1.32982 5.06086 1.92581 3.99999 2.98667C2.93913 4.04754 2.34314 5.48638 2.34314 6.98667C2.34314 8.48696 2.93913 9.92581 3.99999 10.9867L7.51333 14.5067C7.5753 14.5692 7.64904 14.6188 7.73028 14.6526C7.81152 14.6864 7.89865 14.7039 7.98666 14.7039C8.07467 14.7039 8.1618 14.6864 8.24304 14.6526C8.32428 14.6188 8.39802 14.5692 8.45999 14.5067L12 10.9533C13.0564 9.89689 13.6499 8.46404 13.6499 6.97001C13.6499 5.47597 13.0564 4.04312 12 2.98667ZM11.0467 10L7.99999 13.06L4.95333 10C4.35142 9.39755 3.94164 8.63017 3.77579 7.79487C3.60994 6.95956 3.69545 6.09384 4.02153 5.30713C4.34761 4.52042 4.89961 3.84804 5.60775 3.37499C6.31589 2.90194 7.14838 2.64946 7.99999 2.64946C8.8516 2.64946 9.6841 2.90194 10.3922 3.37499C11.1004 3.84804 11.6524 4.52042 11.9785 5.30713C12.3045 6.09384 12.3901 6.95956 12.2242 7.79487C12.0583 8.63017 11.6486 9.39755 11.0467 10ZM5.99999 4.94001C5.4618 5.47985 5.15959 6.21105 5.15959 6.97334C5.15959 7.73563 5.4618 8.46683 5.99999 9.00667C6.39983 9.4072 6.90905 9.68073 7.46376 9.79294C8.01847 9.90516 8.59396 9.85106 9.11804 9.63744C9.64212 9.42382 10.0914 9.06019 10.4096 8.59217C10.7278 8.12415 10.9007 7.57259 10.9067 7.00667C10.9097 6.62881 10.8369 6.25418 10.6926 5.90493C10.5483 5.55568 10.3355 5.23891 10.0667 4.97334C9.80244 4.70306 9.48738 4.4877 9.13961 4.33965C8.79184 4.1916 8.41822 4.11379 8.04026 4.11069C7.6623 4.10759 7.28746 4.17927 6.93731 4.3216C6.58716 4.46393 6.26861 4.67409 5.99999 4.94001ZM9.12666 8.06001C8.87402 8.3165 8.54013 8.47727 8.18208 8.51484C7.82402 8.55241 7.46404 8.46443 7.16366 8.26596C6.86329 8.06748 6.64119 7.77083 6.53533 7.42673C6.42947 7.08262 6.44643 6.71243 6.5833 6.37944C6.72017 6.04645 6.96846 5.77135 7.28572 5.60116C7.60297 5.43098 7.96949 5.37628 8.32262 5.44642C8.67574 5.51656 8.99353 5.70718 9.22167 5.98569C9.4498 6.26421 9.5741 6.61332 9.57333 6.97334C9.56363 7.38485 9.39099 7.77569 9.09333 8.06001H9.12666Z'
                              fill='#D5DAE1'
                            />
                          </svg>
                        </div>
                        <div className='w-auto'>
                          <p className='text-xs font-medium text-coolGray-500'>
                            Remotely
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='border-b border-coolGray-100' />
                </div>
                <div className='w-full p-2'>
                  <h3 className='mb-1 font-medium text-lg text-coolGray-900'>
                    Lunch with CTO
                  </h3>
                  <div className='flex flex-wrap items-center pb-4 -m-2'>
                    <div className='w-auto p-2'>
                      <div className='flex flex-wrap items-center'>
                        <div className='w-auto mr-1'>
                          <svg
                            width={16}
                            height={16}
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M7.33333 1.33333C6.01478 1.33333 4.72585 1.72432 3.62952 2.45686C2.5332 3.18941 1.67871 4.2306 1.17413 5.44877C0.669545 6.66695 0.537523 8.00739 0.794758 9.3006C1.05199 10.5938 1.68693 11.7817 2.61928 12.714C3.55163 13.6464 4.73952 14.2813 6.03272 14.5386C7.32593 14.7958 8.66638 14.6638 9.88455 14.1592C11.1027 13.6546 12.1439 12.8001 12.8765 11.7038C13.609 10.6075 14 9.31854 14 8C14 7.12452 13.8276 6.25761 13.4925 5.44877C13.1575 4.63993 12.6664 3.90501 12.0474 3.28595C11.4283 2.66689 10.6934 2.17583 9.88455 1.8408C9.07571 1.50577 8.20881 1.33333 7.33333 1.33333ZM7.33333 13.3333C6.27849 13.3333 5.24735 13.0205 4.37028 12.4345C3.49322 11.8485 2.80964 11.0155 2.40597 10.041C2.0023 9.06643 1.89668 7.99408 2.10247 6.95951C2.30826 5.92495 2.81621 4.97464 3.56209 4.22876C4.30797 3.48288 5.25828 2.97493 6.29284 2.76914C7.32741 2.56335 8.39977 2.66897 9.3743 3.07264C10.3488 3.47631 11.1818 4.15989 11.7678 5.03695C12.3539 5.91402 12.6667 6.94516 12.6667 8C12.6667 9.41448 12.1048 10.771 11.1046 11.7712C10.1044 12.7714 8.74781 13.3333 7.33333 13.3333ZM7.33333 3.99999C7.15652 3.99999 6.98695 4.07023 6.86192 4.19526C6.7369 4.32028 6.66666 4.48985 6.66666 4.66666V7.61333L5.26666 8.42C5.13823 8.49277 5.03759 8.60611 4.98051 8.74225C4.92344 8.87838 4.91316 9.02961 4.95129 9.17222C4.98942 9.31482 5.0738 9.44074 5.1912 9.53022C5.3086 9.61971 5.45238 9.66769 5.59999 9.66666C5.71678 9.66747 5.83172 9.63758 5.93333 9.58L7.66666 8.58L7.72666 8.51999L7.83333 8.43333C7.85939 8.40033 7.88175 8.36455 7.89999 8.32666C7.92172 8.29087 7.9396 8.25288 7.95333 8.21333C7.97146 8.17094 7.98271 8.12593 7.98666 8.08L7.99999 8V4.66666C7.99999 4.48985 7.92976 4.32028 7.80473 4.19526C7.67971 4.07023 7.51014 3.99999 7.33333 3.99999Z'
                              fill='#D5DAE1'
                            />
                          </svg>
                        </div>
                        <div className='w-auto'>
                          <p className='text-xs font-medium text-coolGray-500'>
                            11:00AM
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='w-auto p-2'>
                      <div className='flex flex-wrap items-center'>
                        <div className='w-auto mr-1'>
                          <svg
                            width={16}
                            height={16}
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M12 2.98667C10.9391 1.92581 9.50028 1.32982 7.99999 1.32982C6.4997 1.32982 5.06086 1.92581 3.99999 2.98667C2.93913 4.04754 2.34314 5.48638 2.34314 6.98667C2.34314 8.48696 2.93913 9.92581 3.99999 10.9867L7.51333 14.5067C7.5753 14.5692 7.64904 14.6188 7.73028 14.6526C7.81152 14.6864 7.89865 14.7039 7.98666 14.7039C8.07467 14.7039 8.1618 14.6864 8.24304 14.6526C8.32428 14.6188 8.39802 14.5692 8.45999 14.5067L12 10.9533C13.0564 9.89689 13.6499 8.46404 13.6499 6.97001C13.6499 5.47597 13.0564 4.04312 12 2.98667ZM11.0467 10L7.99999 13.06L4.95333 10C4.35142 9.39755 3.94164 8.63017 3.77579 7.79487C3.60994 6.95956 3.69545 6.09384 4.02153 5.30713C4.34761 4.52042 4.89961 3.84804 5.60775 3.37499C6.31589 2.90194 7.14838 2.64946 7.99999 2.64946C8.8516 2.64946 9.6841 2.90194 10.3922 3.37499C11.1004 3.84804 11.6524 4.52042 11.9785 5.30713C12.3045 6.09384 12.3901 6.95956 12.2242 7.79487C12.0583 8.63017 11.6486 9.39755 11.0467 10ZM5.99999 4.94001C5.4618 5.47985 5.15959 6.21105 5.15959 6.97334C5.15959 7.73563 5.4618 8.46683 5.99999 9.00667C6.39983 9.4072 6.90905 9.68073 7.46376 9.79294C8.01847 9.90516 8.59396 9.85106 9.11804 9.63744C9.64212 9.42382 10.0914 9.06019 10.4096 8.59217C10.7278 8.12415 10.9007 7.57259 10.9067 7.00667C10.9097 6.62881 10.8369 6.25418 10.6926 5.90493C10.5483 5.55568 10.3355 5.23891 10.0667 4.97334C9.80244 4.70306 9.48738 4.4877 9.13961 4.33965C8.79184 4.1916 8.41822 4.11379 8.04026 4.11069C7.6623 4.10759 7.28746 4.17927 6.93731 4.3216C6.58716 4.46393 6.26861 4.67409 5.99999 4.94001ZM9.12666 8.06001C8.87402 8.3165 8.54013 8.47727 8.18208 8.51484C7.82402 8.55241 7.46404 8.46443 7.16366 8.26596C6.86329 8.06748 6.64119 7.77083 6.53533 7.42673C6.42947 7.08262 6.44643 6.71243 6.5833 6.37944C6.72017 6.04645 6.96846 5.77135 7.28572 5.60116C7.60297 5.43098 7.96949 5.37628 8.32262 5.44642C8.67574 5.51656 8.99353 5.70718 9.22167 5.98569C9.4498 6.26421 9.5741 6.61332 9.57333 6.97334C9.56363 7.38485 9.39099 7.77569 9.09333 8.06001H9.12666Z'
                              fill='#D5DAE1'
                            />
                          </svg>
                        </div>
                        <div className='w-auto'>
                          <p className='text-xs font-medium text-coolGray-500'>
                            Remotely
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='border-b border-coolGray-100' />
                </div>
                <div className='w-full p-2'>
                  <h3 className='mb-1 font-medium text-lg text-coolGray-900'>
                    Daily with designers
                  </h3>
                  <div className='flex flex-wrap items-center pb-4 -m-2'>
                    <div className='w-auto p-2'>
                      <div className='flex flex-wrap items-center'>
                        <div className='w-auto mr-1'>
                          <svg
                            width={16}
                            height={16}
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M7.33333 1.33333C6.01478 1.33333 4.72585 1.72432 3.62952 2.45686C2.5332 3.18941 1.67871 4.2306 1.17413 5.44877C0.669545 6.66695 0.537523 8.00739 0.794758 9.3006C1.05199 10.5938 1.68693 11.7817 2.61928 12.714C3.55163 13.6464 4.73952 14.2813 6.03272 14.5386C7.32593 14.7958 8.66638 14.6638 9.88455 14.1592C11.1027 13.6546 12.1439 12.8001 12.8765 11.7038C13.609 10.6075 14 9.31854 14 8C14 7.12452 13.8276 6.25761 13.4925 5.44877C13.1575 4.63993 12.6664 3.90501 12.0474 3.28595C11.4283 2.66689 10.6934 2.17583 9.88455 1.8408C9.07571 1.50577 8.20881 1.33333 7.33333 1.33333ZM7.33333 13.3333C6.27849 13.3333 5.24735 13.0205 4.37028 12.4345C3.49322 11.8485 2.80964 11.0155 2.40597 10.041C2.0023 9.06643 1.89668 7.99408 2.10247 6.95951C2.30826 5.92495 2.81621 4.97464 3.56209 4.22876C4.30797 3.48288 5.25828 2.97493 6.29284 2.76914C7.32741 2.56335 8.39977 2.66897 9.3743 3.07264C10.3488 3.47631 11.1818 4.15989 11.7678 5.03695C12.3539 5.91402 12.6667 6.94516 12.6667 8C12.6667 9.41448 12.1048 10.771 11.1046 11.7712C10.1044 12.7714 8.74781 13.3333 7.33333 13.3333ZM7.33333 3.99999C7.15652 3.99999 6.98695 4.07023 6.86192 4.19526C6.7369 4.32028 6.66666 4.48985 6.66666 4.66666V7.61333L5.26666 8.42C5.13823 8.49277 5.03759 8.60611 4.98051 8.74225C4.92344 8.87838 4.91316 9.02961 4.95129 9.17222C4.98942 9.31482 5.0738 9.44074 5.1912 9.53022C5.3086 9.61971 5.45238 9.66769 5.59999 9.66666C5.71678 9.66747 5.83172 9.63758 5.93333 9.58L7.66666 8.58L7.72666 8.51999L7.83333 8.43333C7.85939 8.40033 7.88175 8.36455 7.89999 8.32666C7.92172 8.29087 7.9396 8.25288 7.95333 8.21333C7.97146 8.17094 7.98271 8.12593 7.98666 8.08L7.99999 8V4.66666C7.99999 4.48985 7.92976 4.32028 7.80473 4.19526C7.67971 4.07023 7.51014 3.99999 7.33333 3.99999Z'
                              fill='#D5DAE1'
                            />
                          </svg>
                        </div>
                        <div className='w-auto'>
                          <p className='text-xs font-medium text-coolGray-500'>
                            12:00AM
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='w-auto p-2'>
                      <div className='flex flex-wrap items-center'>
                        <div className='w-auto mr-1'>
                          <svg
                            width={16}
                            height={16}
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M12 2.98667C10.9391 1.92581 9.50028 1.32982 7.99999 1.32982C6.4997 1.32982 5.06086 1.92581 3.99999 2.98667C2.93913 4.04754 2.34314 5.48638 2.34314 6.98667C2.34314 8.48696 2.93913 9.92581 3.99999 10.9867L7.51333 14.5067C7.5753 14.5692 7.64904 14.6188 7.73028 14.6526C7.81152 14.6864 7.89865 14.7039 7.98666 14.7039C8.07467 14.7039 8.1618 14.6864 8.24304 14.6526C8.32428 14.6188 8.39802 14.5692 8.45999 14.5067L12 10.9533C13.0564 9.89689 13.6499 8.46404 13.6499 6.97001C13.6499 5.47597 13.0564 4.04312 12 2.98667ZM11.0467 10L7.99999 13.06L4.95333 10C4.35142 9.39755 3.94164 8.63017 3.77579 7.79487C3.60994 6.95956 3.69545 6.09384 4.02153 5.30713C4.34761 4.52042 4.89961 3.84804 5.60775 3.37499C6.31589 2.90194 7.14838 2.64946 7.99999 2.64946C8.8516 2.64946 9.6841 2.90194 10.3922 3.37499C11.1004 3.84804 11.6524 4.52042 11.9785 5.30713C12.3045 6.09384 12.3901 6.95956 12.2242 7.79487C12.0583 8.63017 11.6486 9.39755 11.0467 10ZM5.99999 4.94001C5.4618 5.47985 5.15959 6.21105 5.15959 6.97334C5.15959 7.73563 5.4618 8.46683 5.99999 9.00667C6.39983 9.4072 6.90905 9.68073 7.46376 9.79294C8.01847 9.90516 8.59396 9.85106 9.11804 9.63744C9.64212 9.42382 10.0914 9.06019 10.4096 8.59217C10.7278 8.12415 10.9007 7.57259 10.9067 7.00667C10.9097 6.62881 10.8369 6.25418 10.6926 5.90493C10.5483 5.55568 10.3355 5.23891 10.0667 4.97334C9.80244 4.70306 9.48738 4.4877 9.13961 4.33965C8.79184 4.1916 8.41822 4.11379 8.04026 4.11069C7.6623 4.10759 7.28746 4.17927 6.93731 4.3216C6.58716 4.46393 6.26861 4.67409 5.99999 4.94001ZM9.12666 8.06001C8.87402 8.3165 8.54013 8.47727 8.18208 8.51484C7.82402 8.55241 7.46404 8.46443 7.16366 8.26596C6.86329 8.06748 6.64119 7.77083 6.53533 7.42673C6.42947 7.08262 6.44643 6.71243 6.5833 6.37944C6.72017 6.04645 6.96846 5.77135 7.28572 5.60116C7.60297 5.43098 7.96949 5.37628 8.32262 5.44642C8.67574 5.51656 8.99353 5.70718 9.22167 5.98569C9.4498 6.26421 9.5741 6.61332 9.57333 6.97334C9.56363 7.38485 9.39099 7.77569 9.09333 8.06001H9.12666Z'
                              fill='#D5DAE1'
                            />
                          </svg>
                        </div>
                        <div className='w-auto'>
                          <p className='text-xs font-medium text-coolGray-500'>
                            Remotely
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='border-b border-coolGray-100' />
                </div>
                <div className='w-full p-2'>
                  <h3 className='mb-1 font-medium text-lg text-coolGray-900'>
                    Daily with developers
                  </h3>
                  <div className='flex flex-wrap items-center pb-4 -m-2'>
                    <div className='w-auto p-2'>
                      <div className='flex flex-wrap items-center'>
                        <div className='w-auto mr-1'>
                          <svg
                            width={16}
                            height={16}
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M7.33333 1.33333C6.01478 1.33333 4.72585 1.72432 3.62952 2.45686C2.5332 3.18941 1.67871 4.2306 1.17413 5.44877C0.669545 6.66695 0.537523 8.00739 0.794758 9.3006C1.05199 10.5938 1.68693 11.7817 2.61928 12.714C3.55163 13.6464 4.73952 14.2813 6.03272 14.5386C7.32593 14.7958 8.66638 14.6638 9.88455 14.1592C11.1027 13.6546 12.1439 12.8001 12.8765 11.7038C13.609 10.6075 14 9.31854 14 8C14 7.12452 13.8276 6.25761 13.4925 5.44877C13.1575 4.63993 12.6664 3.90501 12.0474 3.28595C11.4283 2.66689 10.6934 2.17583 9.88455 1.8408C9.07571 1.50577 8.20881 1.33333 7.33333 1.33333ZM7.33333 13.3333C6.27849 13.3333 5.24735 13.0205 4.37028 12.4345C3.49322 11.8485 2.80964 11.0155 2.40597 10.041C2.0023 9.06643 1.89668 7.99408 2.10247 6.95951C2.30826 5.92495 2.81621 4.97464 3.56209 4.22876C4.30797 3.48288 5.25828 2.97493 6.29284 2.76914C7.32741 2.56335 8.39977 2.66897 9.3743 3.07264C10.3488 3.47631 11.1818 4.15989 11.7678 5.03695C12.3539 5.91402 12.6667 6.94516 12.6667 8C12.6667 9.41448 12.1048 10.771 11.1046 11.7712C10.1044 12.7714 8.74781 13.3333 7.33333 13.3333ZM7.33333 3.99999C7.15652 3.99999 6.98695 4.07023 6.86192 4.19526C6.7369 4.32028 6.66666 4.48985 6.66666 4.66666V7.61333L5.26666 8.42C5.13823 8.49277 5.03759 8.60611 4.98051 8.74225C4.92344 8.87838 4.91316 9.02961 4.95129 9.17222C4.98942 9.31482 5.0738 9.44074 5.1912 9.53022C5.3086 9.61971 5.45238 9.66769 5.59999 9.66666C5.71678 9.66747 5.83172 9.63758 5.93333 9.58L7.66666 8.58L7.72666 8.51999L7.83333 8.43333C7.85939 8.40033 7.88175 8.36455 7.89999 8.32666C7.92172 8.29087 7.9396 8.25288 7.95333 8.21333C7.97146 8.17094 7.98271 8.12593 7.98666 8.08L7.99999 8V4.66666C7.99999 4.48985 7.92976 4.32028 7.80473 4.19526C7.67971 4.07023 7.51014 3.99999 7.33333 3.99999Z'
                              fill='#D5DAE1'
                            />
                          </svg>
                        </div>
                        <div className='w-auto'>
                          <p className='text-xs font-medium text-coolGray-500'>
                            01:00PM
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='w-auto p-2'>
                      <div className='flex flex-wrap items-center'>
                        <div className='w-auto mr-1'>
                          <svg
                            width={16}
                            height={16}
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M12 2.98667C10.9391 1.92581 9.50028 1.32982 7.99999 1.32982C6.4997 1.32982 5.06086 1.92581 3.99999 2.98667C2.93913 4.04754 2.34314 5.48638 2.34314 6.98667C2.34314 8.48696 2.93913 9.92581 3.99999 10.9867L7.51333 14.5067C7.5753 14.5692 7.64904 14.6188 7.73028 14.6526C7.81152 14.6864 7.89865 14.7039 7.98666 14.7039C8.07467 14.7039 8.1618 14.6864 8.24304 14.6526C8.32428 14.6188 8.39802 14.5692 8.45999 14.5067L12 10.9533C13.0564 9.89689 13.6499 8.46404 13.6499 6.97001C13.6499 5.47597 13.0564 4.04312 12 2.98667ZM11.0467 10L7.99999 13.06L4.95333 10C4.35142 9.39755 3.94164 8.63017 3.77579 7.79487C3.60994 6.95956 3.69545 6.09384 4.02153 5.30713C4.34761 4.52042 4.89961 3.84804 5.60775 3.37499C6.31589 2.90194 7.14838 2.64946 7.99999 2.64946C8.8516 2.64946 9.6841 2.90194 10.3922 3.37499C11.1004 3.84804 11.6524 4.52042 11.9785 5.30713C12.3045 6.09384 12.3901 6.95956 12.2242 7.79487C12.0583 8.63017 11.6486 9.39755 11.0467 10ZM5.99999 4.94001C5.4618 5.47985 5.15959 6.21105 5.15959 6.97334C5.15959 7.73563 5.4618 8.46683 5.99999 9.00667C6.39983 9.4072 6.90905 9.68073 7.46376 9.79294C8.01847 9.90516 8.59396 9.85106 9.11804 9.63744C9.64212 9.42382 10.0914 9.06019 10.4096 8.59217C10.7278 8.12415 10.9007 7.57259 10.9067 7.00667C10.9097 6.62881 10.8369 6.25418 10.6926 5.90493C10.5483 5.55568 10.3355 5.23891 10.0667 4.97334C9.80244 4.70306 9.48738 4.4877 9.13961 4.33965C8.79184 4.1916 8.41822 4.11379 8.04026 4.11069C7.6623 4.10759 7.28746 4.17927 6.93731 4.3216C6.58716 4.46393 6.26861 4.67409 5.99999 4.94001ZM9.12666 8.06001C8.87402 8.3165 8.54013 8.47727 8.18208 8.51484C7.82402 8.55241 7.46404 8.46443 7.16366 8.26596C6.86329 8.06748 6.64119 7.77083 6.53533 7.42673C6.42947 7.08262 6.44643 6.71243 6.5833 6.37944C6.72017 6.04645 6.96846 5.77135 7.28572 5.60116C7.60297 5.43098 7.96949 5.37628 8.32262 5.44642C8.67574 5.51656 8.99353 5.70718 9.22167 5.98569C9.4498 6.26421 9.5741 6.61332 9.57333 6.97334C9.56363 7.38485 9.39099 7.77569 9.09333 8.06001H9.12666Z'
                              fill='#D5DAE1'
                            />
                          </svg>
                        </div>
                        <div className='w-auto'>
                          <p className='text-xs font-medium text-coolGray-500'>
                            Remotely
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='border-b border-coolGray-100' />
                </div>
                <div className='w-full p-2'>
                  <h3 className='mb-1 font-medium text-lg text-coolGray-900'>
                    Pitching new project
                  </h3>
                  <div className='flex flex-wrap items-center pb-4 -m-2'>
                    <div className='w-auto p-2'>
                      <div className='flex flex-wrap items-center'>
                        <div className='w-auto mr-1'>
                          <svg
                            width={16}
                            height={16}
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M7.33333 1.33333C6.01478 1.33333 4.72585 1.72432 3.62952 2.45686C2.5332 3.18941 1.67871 4.2306 1.17413 5.44877C0.669545 6.66695 0.537523 8.00739 0.794758 9.3006C1.05199 10.5938 1.68693 11.7817 2.61928 12.714C3.55163 13.6464 4.73952 14.2813 6.03272 14.5386C7.32593 14.7958 8.66638 14.6638 9.88455 14.1592C11.1027 13.6546 12.1439 12.8001 12.8765 11.7038C13.609 10.6075 14 9.31854 14 8C14 7.12452 13.8276 6.25761 13.4925 5.44877C13.1575 4.63993 12.6664 3.90501 12.0474 3.28595C11.4283 2.66689 10.6934 2.17583 9.88455 1.8408C9.07571 1.50577 8.20881 1.33333 7.33333 1.33333ZM7.33333 13.3333C6.27849 13.3333 5.24735 13.0205 4.37028 12.4345C3.49322 11.8485 2.80964 11.0155 2.40597 10.041C2.0023 9.06643 1.89668 7.99408 2.10247 6.95951C2.30826 5.92495 2.81621 4.97464 3.56209 4.22876C4.30797 3.48288 5.25828 2.97493 6.29284 2.76914C7.32741 2.56335 8.39977 2.66897 9.3743 3.07264C10.3488 3.47631 11.1818 4.15989 11.7678 5.03695C12.3539 5.91402 12.6667 6.94516 12.6667 8C12.6667 9.41448 12.1048 10.771 11.1046 11.7712C10.1044 12.7714 8.74781 13.3333 7.33333 13.3333ZM7.33333 3.99999C7.15652 3.99999 6.98695 4.07023 6.86192 4.19526C6.7369 4.32028 6.66666 4.48985 6.66666 4.66666V7.61333L5.26666 8.42C5.13823 8.49277 5.03759 8.60611 4.98051 8.74225C4.92344 8.87838 4.91316 9.02961 4.95129 9.17222C4.98942 9.31482 5.0738 9.44074 5.1912 9.53022C5.3086 9.61971 5.45238 9.66769 5.59999 9.66666C5.71678 9.66747 5.83172 9.63758 5.93333 9.58L7.66666 8.58L7.72666 8.51999L7.83333 8.43333C7.85939 8.40033 7.88175 8.36455 7.89999 8.32666C7.92172 8.29087 7.9396 8.25288 7.95333 8.21333C7.97146 8.17094 7.98271 8.12593 7.98666 8.08L7.99999 8V4.66666C7.99999 4.48985 7.92976 4.32028 7.80473 4.19526C7.67971 4.07023 7.51014 3.99999 7.33333 3.99999Z'
                              fill='#D5DAE1'
                            />
                          </svg>
                        </div>
                        <div className='w-auto'>
                          <p className='text-xs font-medium text-coolGray-500'>
                            02:00PM
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='w-auto p-2'>
                      <div className='flex flex-wrap items-center'>
                        <div className='w-auto mr-1'>
                          <svg
                            width={16}
                            height={16}
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M12 2.98667C10.9391 1.92581 9.50028 1.32982 7.99999 1.32982C6.4997 1.32982 5.06086 1.92581 3.99999 2.98667C2.93913 4.04754 2.34314 5.48638 2.34314 6.98667C2.34314 8.48696 2.93913 9.92581 3.99999 10.9867L7.51333 14.5067C7.5753 14.5692 7.64904 14.6188 7.73028 14.6526C7.81152 14.6864 7.89865 14.7039 7.98666 14.7039C8.07467 14.7039 8.1618 14.6864 8.24304 14.6526C8.32428 14.6188 8.39802 14.5692 8.45999 14.5067L12 10.9533C13.0564 9.89689 13.6499 8.46404 13.6499 6.97001C13.6499 5.47597 13.0564 4.04312 12 2.98667ZM11.0467 10L7.99999 13.06L4.95333 10C4.35142 9.39755 3.94164 8.63017 3.77579 7.79487C3.60994 6.95956 3.69545 6.09384 4.02153 5.30713C4.34761 4.52042 4.89961 3.84804 5.60775 3.37499C6.31589 2.90194 7.14838 2.64946 7.99999 2.64946C8.8516 2.64946 9.6841 2.90194 10.3922 3.37499C11.1004 3.84804 11.6524 4.52042 11.9785 5.30713C12.3045 6.09384 12.3901 6.95956 12.2242 7.79487C12.0583 8.63017 11.6486 9.39755 11.0467 10ZM5.99999 4.94001C5.4618 5.47985 5.15959 6.21105 5.15959 6.97334C5.15959 7.73563 5.4618 8.46683 5.99999 9.00667C6.39983 9.4072 6.90905 9.68073 7.46376 9.79294C8.01847 9.90516 8.59396 9.85106 9.11804 9.63744C9.64212 9.42382 10.0914 9.06019 10.4096 8.59217C10.7278 8.12415 10.9007 7.57259 10.9067 7.00667C10.9097 6.62881 10.8369 6.25418 10.6926 5.90493C10.5483 5.55568 10.3355 5.23891 10.0667 4.97334C9.80244 4.70306 9.48738 4.4877 9.13961 4.33965C8.79184 4.1916 8.41822 4.11379 8.04026 4.11069C7.6623 4.10759 7.28746 4.17927 6.93731 4.3216C6.58716 4.46393 6.26861 4.67409 5.99999 4.94001ZM9.12666 8.06001C8.87402 8.3165 8.54013 8.47727 8.18208 8.51484C7.82402 8.55241 7.46404 8.46443 7.16366 8.26596C6.86329 8.06748 6.64119 7.77083 6.53533 7.42673C6.42947 7.08262 6.44643 6.71243 6.5833 6.37944C6.72017 6.04645 6.96846 5.77135 7.28572 5.60116C7.60297 5.43098 7.96949 5.37628 8.32262 5.44642C8.67574 5.51656 8.99353 5.70718 9.22167 5.98569C9.4498 6.26421 9.5741 6.61332 9.57333 6.97334C9.56363 7.38485 9.39099 7.77569 9.09333 8.06001H9.12666Z'
                              fill='#D5DAE1'
                            />
                          </svg>
                        </div>
                        <div className='w-auto'>
                          <p className='text-xs font-medium text-coolGray-500'>
                            Remotely
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='border-b border-coolGray-100' />
                </div>
                <div className='w-full p-2'>
                  <h3 className='mb-1 font-medium text-lg text-coolGray-900'>
                    Pitching new project
                  </h3>
                  <div className='flex flex-wrap items-center pb-4 -m-2'>
                    <div className='w-auto p-2'>
                      <div className='flex flex-wrap items-center'>
                        <div className='w-auto mr-1'>
                          <svg
                            width={16}
                            height={16}
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M7.33333 1.33333C6.01478 1.33333 4.72585 1.72432 3.62952 2.45686C2.5332 3.18941 1.67871 4.2306 1.17413 5.44877C0.669545 6.66695 0.537523 8.00739 0.794758 9.3006C1.05199 10.5938 1.68693 11.7817 2.61928 12.714C3.55163 13.6464 4.73952 14.2813 6.03272 14.5386C7.32593 14.7958 8.66638 14.6638 9.88455 14.1592C11.1027 13.6546 12.1439 12.8001 12.8765 11.7038C13.609 10.6075 14 9.31854 14 8C14 7.12452 13.8276 6.25761 13.4925 5.44877C13.1575 4.63993 12.6664 3.90501 12.0474 3.28595C11.4283 2.66689 10.6934 2.17583 9.88455 1.8408C9.07571 1.50577 8.20881 1.33333 7.33333 1.33333ZM7.33333 13.3333C6.27849 13.3333 5.24735 13.0205 4.37028 12.4345C3.49322 11.8485 2.80964 11.0155 2.40597 10.041C2.0023 9.06643 1.89668 7.99408 2.10247 6.95951C2.30826 5.92495 2.81621 4.97464 3.56209 4.22876C4.30797 3.48288 5.25828 2.97493 6.29284 2.76914C7.32741 2.56335 8.39977 2.66897 9.3743 3.07264C10.3488 3.47631 11.1818 4.15989 11.7678 5.03695C12.3539 5.91402 12.6667 6.94516 12.6667 8C12.6667 9.41448 12.1048 10.771 11.1046 11.7712C10.1044 12.7714 8.74781 13.3333 7.33333 13.3333ZM7.33333 3.99999C7.15652 3.99999 6.98695 4.07023 6.86192 4.19526C6.7369 4.32028 6.66666 4.48985 6.66666 4.66666V7.61333L5.26666 8.42C5.13823 8.49277 5.03759 8.60611 4.98051 8.74225C4.92344 8.87838 4.91316 9.02961 4.95129 9.17222C4.98942 9.31482 5.0738 9.44074 5.1912 9.53022C5.3086 9.61971 5.45238 9.66769 5.59999 9.66666C5.71678 9.66747 5.83172 9.63758 5.93333 9.58L7.66666 8.58L7.72666 8.51999L7.83333 8.43333C7.85939 8.40033 7.88175 8.36455 7.89999 8.32666C7.92172 8.29087 7.9396 8.25288 7.95333 8.21333C7.97146 8.17094 7.98271 8.12593 7.98666 8.08L7.99999 8V4.66666C7.99999 4.48985 7.92976 4.32028 7.80473 4.19526C7.67971 4.07023 7.51014 3.99999 7.33333 3.99999Z'
                              fill='#D5DAE1'
                            />
                          </svg>
                        </div>
                        <div className='w-auto'>
                          <p className='text-xs font-medium text-coolGray-500'>
                            02:00PM
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='w-auto p-2'>
                      <div className='flex flex-wrap items-center'>
                        <div className='w-auto mr-1'>
                          <svg
                            width={16}
                            height={16}
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M12 2.98667C10.9391 1.92581 9.50028 1.32982 7.99999 1.32982C6.4997 1.32982 5.06086 1.92581 3.99999 2.98667C2.93913 4.04754 2.34314 5.48638 2.34314 6.98667C2.34314 8.48696 2.93913 9.92581 3.99999 10.9867L7.51333 14.5067C7.5753 14.5692 7.64904 14.6188 7.73028 14.6526C7.81152 14.6864 7.89865 14.7039 7.98666 14.7039C8.07467 14.7039 8.1618 14.6864 8.24304 14.6526C8.32428 14.6188 8.39802 14.5692 8.45999 14.5067L12 10.9533C13.0564 9.89689 13.6499 8.46404 13.6499 6.97001C13.6499 5.47597 13.0564 4.04312 12 2.98667ZM11.0467 10L7.99999 13.06L4.95333 10C4.35142 9.39755 3.94164 8.63017 3.77579 7.79487C3.60994 6.95956 3.69545 6.09384 4.02153 5.30713C4.34761 4.52042 4.89961 3.84804 5.60775 3.37499C6.31589 2.90194 7.14838 2.64946 7.99999 2.64946C8.8516 2.64946 9.6841 2.90194 10.3922 3.37499C11.1004 3.84804 11.6524 4.52042 11.9785 5.30713C12.3045 6.09384 12.3901 6.95956 12.2242 7.79487C12.0583 8.63017 11.6486 9.39755 11.0467 10ZM5.99999 4.94001C5.4618 5.47985 5.15959 6.21105 5.15959 6.97334C5.15959 7.73563 5.4618 8.46683 5.99999 9.00667C6.39983 9.4072 6.90905 9.68073 7.46376 9.79294C8.01847 9.90516 8.59396 9.85106 9.11804 9.63744C9.64212 9.42382 10.0914 9.06019 10.4096 8.59217C10.7278 8.12415 10.9007 7.57259 10.9067 7.00667C10.9097 6.62881 10.8369 6.25418 10.6926 5.90493C10.5483 5.55568 10.3355 5.23891 10.0667 4.97334C9.80244 4.70306 9.48738 4.4877 9.13961 4.33965C8.79184 4.1916 8.41822 4.11379 8.04026 4.11069C7.6623 4.10759 7.28746 4.17927 6.93731 4.3216C6.58716 4.46393 6.26861 4.67409 5.99999 4.94001ZM9.12666 8.06001C8.87402 8.3165 8.54013 8.47727 8.18208 8.51484C7.82402 8.55241 7.46404 8.46443 7.16366 8.26596C6.86329 8.06748 6.64119 7.77083 6.53533 7.42673C6.42947 7.08262 6.44643 6.71243 6.5833 6.37944C6.72017 6.04645 6.96846 5.77135 7.28572 5.60116C7.60297 5.43098 7.96949 5.37628 8.32262 5.44642C8.67574 5.51656 8.99353 5.70718 9.22167 5.98569C9.4498 6.26421 9.5741 6.61332 9.57333 6.97334C9.56363 7.38485 9.39099 7.77569 9.09333 8.06001H9.12666Z'
                              fill='#D5DAE1'
                            />
                          </svg>
                        </div>
                        <div className='w-auto'>
                          <p className='text-xs font-medium text-coolGray-500'>
                            Remotely
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='border-b border-coolGray-100' />
                </div>
                <div className='w-full p-2'>
                  <button className='px-4 py-1 mt-1 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 rounded-md shadow-button'>
                    See all schedules
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-coolGray-50 py-4'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap items-center justify-between -m-2 mb-4'>
              <div className='w-full md:w-1/2 p-2'>
                <p className='font-semibold text-xl text-coolGray-800'>
                  All Customers
                </p>
                <p className='font-medium text-sm text-coolGray-500'>
                  245 Customers
                </p>
              </div>
              <div className='w-full md:w-1/2 p-2'>
                <div className='relative md:max-w-max md:ml-auto'>
                  <svg
                    className='absolute left-3 transform top-1/2 -translate-y-1/2'
                    width={16}
                    height={16}
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M14.0467 11.22L12.6667 9.80667C12.3699 9.5245 11.9955 9.33754 11.5916 9.26983C11.1876 9.20211 10.7727 9.25673 10.4001 9.42667L9.80008 8.82667C10.5071 7.88194 10.83 6.70445 10.7038 5.53122C10.5775 4.358 10.0115 3.27615 9.1197 2.50347C8.22787 1.73078 7.07643 1.32464 5.89718 1.36679C4.71794 1.40894 3.59844 1.89626 2.76405 2.73065C1.92967 3.56503 1.44235 4.68453 1.4002 5.86378C1.35805 7.04302 1.76419 8.19446 2.53687 9.08629C3.30956 9.97812 4.3914 10.5441 5.56463 10.6704C6.73786 10.7966 7.91535 10.4737 8.86007 9.76667L9.45341 10.36C9.26347 10.7331 9.1954 11.1564 9.25879 11.5702C9.32218 11.984 9.51383 12.3675 9.80674 12.6667L11.2201 14.08C11.5951 14.4545 12.1034 14.6649 12.6334 14.6649C13.1634 14.6649 13.6717 14.4545 14.0467 14.08C14.2372 13.8937 14.3886 13.6713 14.4919 13.4257C14.5953 13.1802 14.6485 12.9164 14.6485 12.65C14.6485 12.3836 14.5953 12.1198 14.4919 11.8743C14.3886 11.6287 14.2372 11.4063 14.0467 11.22ZM8.39341 8.39333C7.9269 8.85866 7.33294 9.1753 6.68657 9.30323C6.0402 9.43117 5.37041 9.36466 4.76181 9.11212C4.15321 8.85958 3.63312 8.43234 3.26722 7.88436C2.90132 7.33638 2.70603 6.69224 2.70603 6.03333C2.70603 5.37442 2.90132 4.73029 3.26722 4.18231C3.63312 3.63433 4.15321 3.20708 4.76181 2.95454C5.37041 2.702 6.0402 2.6355 6.68657 2.76343C7.33294 2.89137 7.9269 3.208 8.39341 3.67333C8.70383 3.98297 8.95012 4.35081 9.11816 4.75577C9.2862 5.16074 9.3727 5.59488 9.3727 6.03333C9.3727 6.47178 9.2862 6.90592 9.11816 7.31089C8.95012 7.71586 8.70383 8.08369 8.39341 8.39333ZM13.1067 13.1067C13.0448 13.1692 12.971 13.2187 12.8898 13.2526C12.8086 13.2864 12.7214 13.3039 12.6334 13.3039C12.5454 13.3039 12.4583 13.2864 12.377 13.2526C12.2958 13.2187 12.2221 13.1692 12.1601 13.1067L10.7467 11.6933C10.6843 11.6314 10.6347 11.5576 10.6008 11.4764C10.567 11.3951 10.5495 11.308 10.5495 11.22C10.5495 11.132 10.567 11.0449 10.6008 10.9636C10.6347 10.8824 10.6843 10.8086 10.7467 10.7467C10.8087 10.6842 10.8825 10.6346 10.9637 10.6007C11.0449 10.5669 11.1321 10.5495 11.2201 10.5495C11.3081 10.5495 11.3952 10.5669 11.4765 10.6007C11.5577 10.6346 11.6314 10.6842 11.6934 10.7467L13.1067 12.16C13.1692 12.222 13.2188 12.2957 13.2527 12.3769C13.2865 12.4582 13.3039 12.5453 13.3039 12.6333C13.3039 12.7213 13.2865 12.8085 13.2527 12.8897C13.2188 12.971 13.1692 13.0447 13.1067 13.1067Z'
                      fill='#BBC3CF'
                    />
                  </svg>
                  <input
                    className='w-full md:w-64 pl-8 pr-4 py-2 text-sm text-coolGray-400 font-medium outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input'
                    type='text'
                    placeholder='Search'
                  />
                </div>
              </div>
            </div>
            <div className='mb-6 border border-coolGray-100' />
            <div className='overflow-hidden border border-coolGray-100 rounded-md shadow-dashboard'>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <tbody>
                    <tr className='whitespace-nowrap h-11 bg-coolGray-50 bg-opacity-80 border-b border-coolGray-100'>
                      <th className='px-4 font-semibold text-xs text-coolGray-500 uppercase text-left'>
                        <div className='flex items-center'>
                          <input
                            className='mr-3 w-4 h-4 bg-white rounded'
                            type='checkbox'
                          />
                          <p>Order</p>
                        </div>
                      </th>
                      <th className='whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-left'>
                        Location
                      </th>
                      <th className='whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center'>
                        Orders
                      </th>
                      <th className='whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-left'>
                        Last order
                      </th>
                      <th className='whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-left'>
                        Total spent
                      </th>
                      <th className='whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center'>
                        Refunds
                      </th>
                      <th className='whitespace-nowrap font-semibold text-xs text-coolGray-500 uppercase text-center' />
                    </tr>
                    <tr className='h-18 border-b border-coolGray-100'>
                      <th className='whitespace-nowrap px-4 bg-white text-left'>
                        <div className='flex items-center -m-2'>
                          <div className='w-auto p-2'>
                            <input
                              className='w-4 h-4 bg-white rounded'
                              type='checkbox'
                            />
                          </div>
                          <div className='w-auto p-2'>
                            <div className='flex items-center justify-center w-10 h-10 text-base font-medium text-yellow-600 bg-yellow-200 rounded-md'>
                              PS
                            </div>
                          </div>
                          <div className='w-auto p-2'>
                            <p className='text-xs font-semibold text-coolGray-800'>
                              Patricia Semklo
                            </p>
                            <p className='text-xs font-medium text-coolGray-500'>
                              patricia.semklo@app.com
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left'>
                        United Kingdom
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        24
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        #432512
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        $2,855.00
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        5
                      </th>
                      <th className='whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800'>
                        <svg
                          className='ml-auto'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z'
                            fill='#D5DAE1'
                          />
                        </svg>
                      </th>
                    </tr>
                    <tr className='h-18 border-b border-coolGray-100'>
                      <th className='whitespace-nowrap px-4 bg-white text-left'>
                        <div className='flex items-center -m-2'>
                          <div className='w-auto p-2'>
                            <input
                              className='w-4 h-4 bg-white rounded'
                              type='checkbox'
                            />
                          </div>
                          <div className='w-auto p-2'>
                            <div className='flex items-center justify-center w-10 h-10 text-base font-medium text-violet-600 bg-violet-200 rounded-md'>
                              PS
                            </div>
                          </div>
                          <div className='w-auto p-2'>
                            <p className='text-xs font-semibold text-coolGray-800'>
                              Patricia Semklo
                            </p>
                            <p className='text-xs font-medium text-coolGray-500'>
                              patricia.semklo@app.com
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left'>
                        United States
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        6
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        #5435532
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        $14,650.00
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        12
                      </th>
                      <th className='whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800'>
                        <svg
                          className='ml-auto'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z'
                            fill='#D5DAE1'
                          />
                        </svg>
                      </th>
                    </tr>
                    <tr className='h-18 border-b border-coolGray-100'>
                      <th className='whitespace-nowrap px-4 bg-white text-left'>
                        <div className='flex items-center -m-2'>
                          <div className='w-auto p-2'>
                            <input
                              className='w-4 h-4 bg-white rounded'
                              type='checkbox'
                            />
                          </div>
                          <div className='w-auto p-2'>
                            <div className='flex items-center justify-center w-10 h-10 text-base font-medium text-green-600 bg-green-200 rounded-md'>
                              PS
                            </div>
                          </div>
                          <div className='w-auto p-2'>
                            <p className='text-xs font-semibold text-coolGray-800'>
                              Patricia Semklo
                            </p>
                            <p className='text-xs font-medium text-coolGray-500'>
                              patricia.semklo@app.com
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left'>
                        Germany
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        14
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        #1242456
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        $5,145.00
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        9
                      </th>
                      <th className='whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800'>
                        <svg
                          className='ml-auto'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z'
                            fill='#D5DAE1'
                          />
                        </svg>
                      </th>
                    </tr>
                    <tr className='h-18 border-b border-coolGray-100'>
                      <th className='whitespace-nowrap px-4 bg-white text-left'>
                        <div className='flex items-center -m-2'>
                          <div className='w-auto p-2'>
                            <input
                              className='w-4 h-4 bg-white rounded'
                              type='checkbox'
                            />
                          </div>
                          <div className='w-auto p-2'>
                            <div className='flex items-center justify-center w-10 h-10 text-base font-medium text-red-600 bg-red-200 rounded-md'>
                              PS
                            </div>
                          </div>
                          <div className='w-auto p-2'>
                            <p className='text-xs font-semibold text-coolGray-800'>
                              Patricia Semklo
                            </p>
                            <p className='text-xs font-medium text-coolGray-500'>
                              patricia.semklo@app.com
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left'>
                        France
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        145
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        #4321114
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        $1,055.00
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        2
                      </th>
                      <th className='whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800'>
                        <svg
                          className='ml-auto'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z'
                            fill='#D5DAE1'
                          />
                        </svg>
                      </th>
                    </tr>
                    <tr className='h-18 border-b border-coolGray-100'>
                      <th className='whitespace-nowrap px-4 bg-white text-left'>
                        <div className='flex items-center -m-2'>
                          <div className='w-auto p-2'>
                            <input
                              className='w-4 h-4 bg-white rounded'
                              type='checkbox'
                            />
                          </div>
                          <div className='w-auto p-2'>
                            <div className='flex items-center justify-center w-10 h-10 text-base font-medium text-green-600 bg-green-200 rounded-md'>
                              PS
                            </div>
                          </div>
                          <div className='w-auto p-2'>
                            <p className='text-xs font-semibold text-coolGray-800'>
                              Patricia Semklo
                            </p>
                            <p className='text-xs font-medium text-coolGray-500'>
                              patricia.semklo@app.com
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left'>
                        Italy
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        55
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        #6543321
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        $525.00
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        4
                      </th>
                      <th className='whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800'>
                        <svg
                          className='ml-auto'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z'
                            fill='#D5DAE1'
                          />
                        </svg>
                      </th>
                    </tr>
                    <tr className='h-18 border-b border-coolGray-100'>
                      <th className='whitespace-nowrap px-4 bg-white text-left'>
                        <div className='flex items-center -m-2'>
                          <div className='w-auto p-2'>
                            <input
                              className='w-4 h-4 bg-white rounded'
                              type='checkbox'
                            />
                          </div>
                          <div className='w-auto p-2'>
                            <div className='flex items-center justify-center w-10 h-10 text-base font-medium text-violet-600 bg-violet-200 rounded-md'>
                              PS
                            </div>
                          </div>
                          <div className='w-auto p-2'>
                            <p className='text-xs font-semibold text-coolGray-800'>
                              Patricia Semklo
                            </p>
                            <p className='text-xs font-medium text-coolGray-500'>
                              patricia.semklo@app.com
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left'>
                        Croatia
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        43
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        #664234
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        $1,650.00
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        12
                      </th>
                      <th className='whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800'>
                        <svg
                          className='ml-auto'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z'
                            fill='#D5DAE1'
                          />
                        </svg>
                      </th>
                    </tr>
                    <tr className='h-18 border-b border-coolGray-100'>
                      <th className='whitespace-nowrap px-4 bg-white text-left'>
                        <div className='flex items-center -m-2'>
                          <div className='w-auto p-2'>
                            <input
                              className='w-4 h-4 bg-white rounded'
                              type='checkbox'
                            />
                          </div>
                          <div className='w-auto p-2'>
                            <div className='flex items-center justify-center w-10 h-10 text-base font-medium text-green-600 bg-green-200 rounded-md'>
                              PS
                            </div>
                          </div>
                          <div className='w-auto p-2'>
                            <p className='text-xs font-semibold text-coolGray-800'>
                              Patricia Semklo
                            </p>
                            <p className='text-xs font-medium text-coolGray-500'>
                              patricia.semklo@app.com
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left'>
                        Spain
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        16
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        #776541
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        $2,145.00
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        45
                      </th>
                      <th className='whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800'>
                        <svg
                          className='ml-auto'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z'
                            fill='#D5DAE1'
                          />
                        </svg>
                      </th>
                    </tr>
                    <tr className='h-18'>
                      <th className='whitespace-nowrap px-4 bg-white text-left'>
                        <div className='flex items-center -m-2'>
                          <div className='w-auto p-2'>
                            <input
                              className='w-4 h-4 bg-white rounded'
                              type='checkbox'
                            />
                          </div>
                          <div className='w-auto p-2'>
                            <div className='flex items-center justify-center w-10 h-10 text-base font-medium text-green-600 bg-green-200 rounded-md'>
                              PS
                            </div>
                          </div>
                          <div className='w-auto p-2'>
                            <p className='text-xs font-semibold text-coolGray-800'>
                              Patricia Semklo
                            </p>
                            <p className='text-xs font-medium text-coolGray-500'>
                              patricia.semklo@app.com
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left'>
                        Denmark
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        6
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        #904300
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left'>
                        $3,455.00
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        12
                      </th>
                      <th className='whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800'>
                        <svg
                          className='ml-auto'
                          width={16}
                          height={16}
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z'
                            fill='#D5DAE1'
                          />
                        </svg>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-coolGray-50 py-4'>
          <div className='container px-4 mx-auto'>
            <div className='pt-6 bg-white overflow-hidden border border-coolGray-100 rounded-md shadow-dashboard'>
              <h2 className='px-6 mb-4 text-lg text-coolGray-900 font-semibold'>
                Top products
              </h2>
              <div className='px-6 overflow-x-auto'>
                <table className='w-full'>
                  <tbody>
                    <tr className='whitespace-nowrap h-11 bg-coolGray-50 bg-opacity-80'>
                      <th className='px-4 font-semibold text-xs text-coolGray-500 uppercase text-left rounded-l-md'>
                        <p>Product</p>
                      </th>
                      <th className='whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center'>
                        Category
                      </th>
                      <th className='whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center'>
                        Impressions
                      </th>
                      <th className='whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center'>
                        Top country
                      </th>
                      <th className='whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center'>
                        Cr
                      </th>
                      <th className='whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center rounded-r-md'>
                        Value
                      </th>
                    </tr>
                    <tr className='h-18 border-b border-coolGray-100'>
                      <th className='whitespace-nowrap px-4 bg-white text-left'>
                        <div className='flex items-center -m-2'>
                          <div className='w-auto p-2'>
                            <div className='flex items-center justify-center w-10 h-10 text-base font-medium bg-green-500 rounded-md'>
                              <svg
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M22 10.94C21.9896 10.8481 21.9695 10.7576 21.94 10.67V10.58C21.8919 10.4772 21.8278 10.3827 21.75 10.3L15.75 4.3C15.6673 4.22222 15.5728 4.15808 15.47 4.11H15.37C15.2728 4.058 15.1683 4.02092 15.06 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V11C22 11 22 11 22 10.94ZM16 7.41L18.59 10H17C16.7348 10 16.4804 9.89464 16.2929 9.70711C16.1054 9.51957 16 9.26522 16 9V7.41ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H14V9C14 9.79565 14.3161 10.5587 14.8787 11.1213C15.4413 11.6839 16.2044 12 17 12H20V17ZM7 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11C12 10.7348 11.8946 10.4804 11.7071 10.2929C11.5196 10.1054 11.2652 10 11 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM7 14C6.73478 14 6.48043 14.1054 6.29289 14.2929C6.10536 14.4804 6 14.7348 6 15C6 15.2652 6.10536 15.5196 6.29289 15.7071C6.48043 15.8946 6.73478 16 7 16H17C17.2652 16 17.5196 15.8946 17.7071 15.7071C17.8946 15.5196 18 15.2652 18 15C18 14.7348 17.8946 14.4804 17.7071 14.2929C17.5196 14.1054 17.2652 14 17 14H7Z'
                                  fill='#EBF3FE'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='w-auto p-2'>
                            <p className='text-sm font-medium text-coolGray-800'>
                              Coding course
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        Subscription
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        14,652
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        US
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center'>
                        43.5%
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center'>
                        $12,450.00
                      </th>
                    </tr>
                    <tr className='h-18 border-b border-coolGray-100'>
                      <th className='whitespace-nowrap px-4 bg-white text-left'>
                        <div className='flex items-center -m-2'>
                          <div className='w-auto p-2'>
                            <div className='flex items-center justify-center w-10 h-10 text-base font-medium bg-green-500 rounded-md'>
                              <svg
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M22 10.94C21.9896 10.8481 21.9695 10.7576 21.94 10.67V10.58C21.8919 10.4772 21.8278 10.3827 21.75 10.3L15.75 4.3C15.6673 4.22222 15.5728 4.15808 15.47 4.11H15.37C15.2728 4.058 15.1683 4.02092 15.06 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V11C22 11 22 11 22 10.94ZM16 7.41L18.59 10H17C16.7348 10 16.4804 9.89464 16.2929 9.70711C16.1054 9.51957 16 9.26522 16 9V7.41ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H14V9C14 9.79565 14.3161 10.5587 14.8787 11.1213C15.4413 11.6839 16.2044 12 17 12H20V17ZM7 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11C12 10.7348 11.8946 10.4804 11.7071 10.2929C11.5196 10.1054 11.2652 10 11 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM7 14C6.73478 14 6.48043 14.1054 6.29289 14.2929C6.10536 14.4804 6 14.7348 6 15C6 15.2652 6.10536 15.5196 6.29289 15.7071C6.48043 15.8946 6.73478 16 7 16H17C17.2652 16 17.5196 15.8946 17.7071 15.7071C17.8946 15.5196 18 15.2652 18 15C18 14.7348 17.8946 14.4804 17.7071 14.2929C17.5196 14.1054 17.2652 14 17 14H7Z'
                                  fill='#EBF3FE'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='w-auto p-2'>
                            <p className='text-sm font-medium text-coolGray-800'>
                              Coding course
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        Subscription
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        14,652
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        US
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center'>
                        43.5%
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center'>
                        $12,450.00
                      </th>
                    </tr>
                    <tr className='h-18 border-b border-coolGray-100'>
                      <th className='whitespace-nowrap px-4 bg-white text-left'>
                        <div className='flex items-center -m-2'>
                          <div className='w-auto p-2'>
                            <div className='flex items-center justify-center w-10 h-10 text-base font-medium bg-green-500 rounded-md'>
                              <svg
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M22 10.94C21.9896 10.8481 21.9695 10.7576 21.94 10.67V10.58C21.8919 10.4772 21.8278 10.3827 21.75 10.3L15.75 4.3C15.6673 4.22222 15.5728 4.15808 15.47 4.11H15.37C15.2728 4.058 15.1683 4.02092 15.06 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V11C22 11 22 11 22 10.94ZM16 7.41L18.59 10H17C16.7348 10 16.4804 9.89464 16.2929 9.70711C16.1054 9.51957 16 9.26522 16 9V7.41ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H14V9C14 9.79565 14.3161 10.5587 14.8787 11.1213C15.4413 11.6839 16.2044 12 17 12H20V17ZM7 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11C12 10.7348 11.8946 10.4804 11.7071 10.2929C11.5196 10.1054 11.2652 10 11 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM7 14C6.73478 14 6.48043 14.1054 6.29289 14.2929C6.10536 14.4804 6 14.7348 6 15C6 15.2652 6.10536 15.5196 6.29289 15.7071C6.48043 15.8946 6.73478 16 7 16H17C17.2652 16 17.5196 15.8946 17.7071 15.7071C17.8946 15.5196 18 15.2652 18 15C18 14.7348 17.8946 14.4804 17.7071 14.2929C17.5196 14.1054 17.2652 14 17 14H7Z'
                                  fill='#EBF3FE'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='w-auto p-2'>
                            <p className='text-sm font-medium text-coolGray-800'>
                              Coding course
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        Subscription
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        14,652
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        US
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center'>
                        43.5%
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center'>
                        $12,450.00
                      </th>
                    </tr>
                    <tr className='h-18 border-b border-coolGray-100'>
                      <th className='whitespace-nowrap px-4 bg-white text-left'>
                        <div className='flex items-center -m-2'>
                          <div className='w-auto p-2'>
                            <div className='flex items-center justify-center w-10 h-10 text-base font-medium bg-green-500 rounded-md'>
                              <svg
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M22 10.94C21.9896 10.8481 21.9695 10.7576 21.94 10.67V10.58C21.8919 10.4772 21.8278 10.3827 21.75 10.3L15.75 4.3C15.6673 4.22222 15.5728 4.15808 15.47 4.11H15.37C15.2728 4.058 15.1683 4.02092 15.06 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V11C22 11 22 11 22 10.94ZM16 7.41L18.59 10H17C16.7348 10 16.4804 9.89464 16.2929 9.70711C16.1054 9.51957 16 9.26522 16 9V7.41ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H14V9C14 9.79565 14.3161 10.5587 14.8787 11.1213C15.4413 11.6839 16.2044 12 17 12H20V17ZM7 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11C12 10.7348 11.8946 10.4804 11.7071 10.2929C11.5196 10.1054 11.2652 10 11 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM7 14C6.73478 14 6.48043 14.1054 6.29289 14.2929C6.10536 14.4804 6 14.7348 6 15C6 15.2652 6.10536 15.5196 6.29289 15.7071C6.48043 15.8946 6.73478 16 7 16H17C17.2652 16 17.5196 15.8946 17.7071 15.7071C17.8946 15.5196 18 15.2652 18 15C18 14.7348 17.8946 14.4804 17.7071 14.2929C17.5196 14.1054 17.2652 14 17 14H7Z'
                                  fill='#EBF3FE'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='w-auto p-2'>
                            <p className='text-sm font-medium text-coolGray-800'>
                              Coding course
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        Subscription
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        14,652
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        US
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center'>
                        43.5%
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center'>
                        $12,450.00
                      </th>
                    </tr>
                    <tr className='h-18 border-b border-coolGray-100'>
                      <th className='whitespace-nowrap px-4 bg-white text-left'>
                        <div className='flex items-center -m-2'>
                          <div className='w-auto p-2'>
                            <div className='flex items-center justify-center w-10 h-10 text-base font-medium bg-green-500 rounded-md'>
                              <svg
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M22 10.94C21.9896 10.8481 21.9695 10.7576 21.94 10.67V10.58C21.8919 10.4772 21.8278 10.3827 21.75 10.3L15.75 4.3C15.6673 4.22222 15.5728 4.15808 15.47 4.11H15.37C15.2728 4.058 15.1683 4.02092 15.06 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V11C22 11 22 11 22 10.94ZM16 7.41L18.59 10H17C16.7348 10 16.4804 9.89464 16.2929 9.70711C16.1054 9.51957 16 9.26522 16 9V7.41ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H14V9C14 9.79565 14.3161 10.5587 14.8787 11.1213C15.4413 11.6839 16.2044 12 17 12H20V17ZM7 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11C12 10.7348 11.8946 10.4804 11.7071 10.2929C11.5196 10.1054 11.2652 10 11 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM7 14C6.73478 14 6.48043 14.1054 6.29289 14.2929C6.10536 14.4804 6 14.7348 6 15C6 15.2652 6.10536 15.5196 6.29289 15.7071C6.48043 15.8946 6.73478 16 7 16H17C17.2652 16 17.5196 15.8946 17.7071 15.7071C17.8946 15.5196 18 15.2652 18 15C18 14.7348 17.8946 14.4804 17.7071 14.2929C17.5196 14.1054 17.2652 14 17 14H7Z'
                                  fill='#EBF3FE'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='w-auto p-2'>
                            <p className='text-sm font-medium text-coolGray-800'>
                              Coding course
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        Subscription
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        14,652
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        US
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center'>
                        43.5%
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center'>
                        $12,450.00
                      </th>
                    </tr>
                    <tr className='h-18 border-b border-coolGray-100'>
                      <th className='whitespace-nowrap px-4 bg-white text-left'>
                        <div className='flex items-center -m-2'>
                          <div className='w-auto p-2'>
                            <div className='flex items-center justify-center w-10 h-10 text-base font-medium bg-green-500 rounded-md'>
                              <svg
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M22 10.94C21.9896 10.8481 21.9695 10.7576 21.94 10.67V10.58C21.8919 10.4772 21.8278 10.3827 21.75 10.3L15.75 4.3C15.6673 4.22222 15.5728 4.15808 15.47 4.11H15.37C15.2728 4.058 15.1683 4.02092 15.06 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V11C22 11 22 11 22 10.94ZM16 7.41L18.59 10H17C16.7348 10 16.4804 9.89464 16.2929 9.70711C16.1054 9.51957 16 9.26522 16 9V7.41ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H14V9C14 9.79565 14.3161 10.5587 14.8787 11.1213C15.4413 11.6839 16.2044 12 17 12H20V17ZM7 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11C12 10.7348 11.8946 10.4804 11.7071 10.2929C11.5196 10.1054 11.2652 10 11 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM7 14C6.73478 14 6.48043 14.1054 6.29289 14.2929C6.10536 14.4804 6 14.7348 6 15C6 15.2652 6.10536 15.5196 6.29289 15.7071C6.48043 15.8946 6.73478 16 7 16H17C17.2652 16 17.5196 15.8946 17.7071 15.7071C17.8946 15.5196 18 15.2652 18 15C18 14.7348 17.8946 14.4804 17.7071 14.2929C17.5196 14.1054 17.2652 14 17 14H7Z'
                                  fill='#EBF3FE'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='w-auto p-2'>
                            <p className='text-sm font-medium text-coolGray-800'>
                              Coding course
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        Subscription
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        14,652
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center'>
                        US
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center'>
                        43.5%
                      </th>
                      <th className='whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center'>
                        $12,450.00
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='flex flex-wrap items-center justify-between w-full lg:w-1/2 py-4 px-6 -m-2'>
                <div className='w-auto p-2'>
                  <p className='text-sm font-semibold text-coolGray-500'>
                    Showing 21 to 30 of 2650 results
                  </p>
                </div>
                <div className='w-auto p-2'>
                  <div className='flex flex-wrap items-center'>
                    <div className='w-auto mr-3'>
                      <div className='relative flex items-center'>
                        <svg
                          className='absolute right-4 top-1/2 transform -translate-y-1/2'
                          width={10}
                          height={6}
                          viewBox='0 0 10 6'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M9.16667 0.641619C9.01053 0.48641 8.79932 0.399292 8.57917 0.399292C8.35901 0.399292 8.1478 0.48641 7.99167 0.641619L5 3.59162L2.05 0.641619C1.89386 0.48641 1.68266 0.399292 1.4625 0.399292C1.24235 0.399292 1.03114 0.48641 0.875 0.641619C0.796893 0.719088 0.734898 0.811256 0.692591 0.912805C0.650284 1.01435 0.628502 1.12328 0.628502 1.23329C0.628502 1.3433 0.650284 1.45222 0.692591 1.55377C0.734898 1.65532 0.796893 1.74748 0.875 1.82495L4.40833 5.35829C4.4858 5.43639 4.57797 5.49839 4.67952 5.54069C4.78107 5.583 4.88999 5.60478 5 5.60478C5.11001 5.60478 5.21893 5.583 5.32048 5.54069C5.42203 5.49839 5.5142 5.43639 5.59167 5.35829L9.16667 1.82495C9.24477 1.74748 9.30677 1.65532 9.34908 1.55377C9.39138 1.45222 9.41317 1.3433 9.41317 1.23329C9.41317 1.12328 9.39138 1.01435 9.34908 0.912805C9.30677 0.811256 9.24477 0.719088 9.16667 0.641619Z'
                            fill='#556987'
                          />
                        </svg>
                        <select className='appearance-none py-1 px-4 w-16 text-coolGray-500 text-sm font-medium bg-white border outline-none border-coolGray-200 focus:border-green-500 rounded-md'>
                          <option>10</option>
                          <option>20</option>
                          <option>30</option>
                        </select>
                      </div>
                    </div>
                    <div className='w-auto'>
                      <p className='text-sm text-coolGray-500 font-medium'>
                        per page
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

