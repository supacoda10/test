import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='overflow-hidden'>
          <nav className='relative px-10 lg:pr-32 lg:pl-20 py-7 lg:py-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-between w-full lg:w-auto'>
                <a
                  className='navbar-burger order-1 lg:order-none lg:pr-9'
                  href='#'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={34}
                    height={14}
                    viewBox='0 0 34 14'
                    fill='none'
                  >
                    <g clipPath='url(#clip0_231_4713)'>
                      <rect width={34} height={3} rx='1.5' fill='#19191B' />
                      <rect
                        y={11}
                        width={34}
                        height={3}
                        rx='1.5'
                        fill='#19191B'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_231_4713'>
                        <rect width={34} height={14} fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a className='pr-4 lg:pr-0' href='#'>
                  <img
                    className='h-10'
                    src='mirga-assets/images/logos/mirga-dark-logo3.svg'
                    alt=''
                  />
                </a>
              </div>
              <div className='hidden lg:flex items-center gap-5'>
                <a
                  className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-lg focus:text-neutral-900 bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200'
                  href='#'
                >
                  Login
                </a>
                <a
                  className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                  href='#'
                >
                  Sign up free
                </a>
              </div>
            </div>
          </nav>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-black opacity-20' />
            <nav className='relative p-8 w-full h-full bg-white overflow-y-auto'>
              <div className='flex flex-col justify-between h-full'>
                <div className='flex items-center justify-between mb-16'>
                  <a className='pr-4' href='#'>
                    <img
                      className='h-10'
                      src='mirga-assets/images/logos/mirga-dark-logo3.svg'
                      alt=''
                    />
                  </a>
                  <a className='navbar-close' href='#'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 18L18 6M6 6L18 18'
                        stroke='#252E4A'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                </div>
                <div className='flex flex-col items-center gap-2'>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-lg focus:text-neutral-900 bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200'
                    href='#'
                  >
                    Login
                  </a>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Sign up free
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <section className='overflow-hidden'>
          <nav className='relative px-10 xl:px-20 py-7 xl:py-4'>
            <div className='flex items-center justify-between'>
              <a className='pr-4 lg:pr-0' href='#'>
                <img
                  className='h-10'
                  src='mirga-assets/images/logos/mirga-dark-logo3.svg'
                  alt=''
                />
              </a>
              <div className='hidden xl:w-full xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-y-1/2 xl:-translate-x-1/2 xl:flex items-center justify-center gap-14'>
                <div className='flex gap-16'>
                  <a
                    className='inline-block text-lg tracking-tight font-semibold hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    What is Mirga
                  </a>
                  <a
                    className='inline-block text-lg tracking-tight font-semibold hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Products
                  </a>
                  <a
                    className='inline-block text-lg tracking-tight font-semibold hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Story
                  </a>
                  <a
                    className='inline-block text-lg tracking-tight font-semibold hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Pricing
                  </a>
                  <a
                    className='inline-block text-lg tracking-tight font-semibold hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Resources
                  </a>
                </div>
              </div>
              <a
                className='hidden xl:inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                href='#'
              >
                Contact us
              </a>
              <a className='navbar-burger xl:hidden' href='#'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={34}
                  height={14}
                  viewBox='0 0 34 14'
                  fill='none'
                >
                  <g clipPath='url(#clip0_231_4713)'>
                    <rect width={34} height={3} rx='1.5' fill='#19191B' />
                    <rect
                      y={11}
                      width={34}
                      height={3}
                      rx='1.5'
                      fill='#19191B'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_231_4713'>
                      <rect width={34} height={14} fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </nav>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-black opacity-20' />
            <nav className='relative p-8 w-full h-full bg-white overflow-y-auto'>
              <div className='flex flex-col justify-between h-full'>
                <div className='flex items-center justify-between'>
                  <a className='pr-4' href='#'>
                    <img
                      className='h-10'
                      src='mirga-assets/images/logos/mirga-dark-logo3.svg'
                      alt=''
                    />
                  </a>
                  <a className='navbar-close' href='#'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 18L18 6M6 6L18 18'
                        stroke='#252E4A'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                </div>
                <div className='flex flex-col gap-8 py-16'>
                  <a
                    className='inline-block max-w-max text-lg tracking-tight font-semibold hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    What is Mirga
                  </a>
                  <a
                    className='inline-block max-w-max text-lg tracking-tight font-semibold hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Products
                  </a>
                  <a
                    className='inline-block max-w-max text-lg tracking-tight font-semibold hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Story
                  </a>
                  <a
                    className='inline-block max-w-max text-lg tracking-tight font-semibold hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Pricing
                  </a>
                  <a
                    className='inline-block max-w-max text-lg tracking-tight font-semibold hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Resources
                  </a>
                </div>
                <div className='flex flex-col items-center gap-2'>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <section className='overflow-hidden'>
          <nav className='relative px-10 py-7 pb-7'>
            <div className='flex items-center justify-between'>
              <a className='relative z-10 pr-4 lg:pr-0' href='#'>
                <img
                  className='h-14'
                  src='mirga-assets/images/logos/mirga-dark-logo4.svg'
                  alt=''
                />
              </a>
              <div className='hidden xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-y-1/2 xl:-translate-x-1/2 xl:flex lg:justify-center gap-7'>
                <a
                  className='flex gap-7 items-center text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                  href='#'
                >
                  <span>What is Mirga</span>
                  <div className='w-1.5 h-1.5 bg-neutral-100 rounded-full' />
                </a>
                <a
                  className='flex gap-7 items-center text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                  href='#'
                >
                  <span>Products</span>
                  <div className='w-1.5 h-1.5 bg-neutral-100 rounded-full' />
                </a>
                <a
                  className='flex gap-7 items-center text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                  href='#'
                >
                  <span>Story</span>
                  <div className='w-1.5 h-1.5 bg-neutral-100 rounded-full' />
                </a>
                <a
                  className='flex gap-7 items-center text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                  href='#'
                >
                  <span>Pricing</span>
                  <div className='w-1.5 h-1.5 bg-neutral-100 rounded-full' />
                </a>
                <a
                  className='flex items-center text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                  href='#'
                >
                  <span>Resources</span>
                </a>
              </div>
              <div className='hidden xl:flex items-center gap-2'>
                <a className='hidden 2xl:block mr-8' href='#'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={20}
                    height={20}
                    viewBox='0 0 20 20'
                    fill='none'
                  >
                    <g clipPath='url(#clip0_231_6677)'>
                      <path
                        d='M19.6343 17.871L15.7634 13.9984C18.6598 10.1278 17.87 4.64195 13.9994 1.74551C10.1288 -1.15092 4.64292 -0.361157 1.74649 3.50949C-1.14994 7.38013 -0.36018 12.866 3.51046 15.7624C6.61969 18.0891 10.8901 18.0891 13.9994 15.7624L17.872 19.635C18.3587 20.1216 19.1477 20.1216 19.6343 19.635C20.121 19.1483 20.121 18.3593 19.6343 17.8727L19.6343 17.871ZM8.7872 15.015C5.34716 15.015 2.55848 12.2263 2.55848 8.78623C2.55848 5.34618 5.34716 2.55751 8.7872 2.55751C12.2273 2.55751 15.0159 5.34618 15.0159 8.78623C15.0123 12.2247 12.2257 15.0113 8.7872 15.015Z'
                        fill='#19191B'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_231_6677'>
                        <rect width={20} height={20} fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                  href='#'
                >
                  Help
                </a>
                <a
                  className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                  href='#'
                >
                  Sign up free
                </a>
              </div>
              <a className='navbar-burger xl:hidden' href='#'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={34}
                  height={14}
                  viewBox='0 0 34 14'
                  fill='none'
                >
                  <g clipPath='url(#clip0_231_4713)'>
                    <rect width={34} height={3} rx='1.5' fill='#19191B' />
                    <rect
                      y={11}
                      width={34}
                      height={3}
                      rx='1.5'
                      fill='#19191B'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_231_4713'>
                      <rect width={34} height={14} fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </nav>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-black opacity-20' />
            <nav className='relative p-8 w-full h-full bg-white overflow-y-auto'>
              <div className='flex flex-col justify-between h-full'>
                <div>
                  <div className='flex items-center justify-between mb-8'>
                    <a className='pr-4' href='#'>
                      <img
                        className='h-10'
                        src='mirga-assets/images/logos/mirga-dark-logo3.svg'
                        alt=''
                      />
                    </a>
                    <a className='navbar-close' href='#'>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M6 18L18 6M6 6L18 18'
                          stroke='#252E4A'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                  <a href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                    >
                      <g clipPath='url(#clip0_231_6677)'>
                        <path
                          d='M19.6343 17.871L15.7634 13.9984C18.6598 10.1278 17.87 4.64195 13.9994 1.74551C10.1288 -1.15092 4.64292 -0.361157 1.74649 3.50949C-1.14994 7.38013 -0.36018 12.866 3.51046 15.7624C6.61969 18.0891 10.8901 18.0891 13.9994 15.7624L17.872 19.635C18.3587 20.1216 19.1477 20.1216 19.6343 19.635C20.121 19.1483 20.121 18.3593 19.6343 17.8727L19.6343 17.871ZM8.7872 15.015C5.34716 15.015 2.55848 12.2263 2.55848 8.78623C2.55848 5.34618 5.34716 2.55751 8.7872 2.55751C12.2273 2.55751 15.0159 5.34618 15.0159 8.78623C15.0123 12.2247 12.2257 15.0113 8.7872 15.015Z'
                          fill='#19191B'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_231_6677'>
                          <rect width={20} height={20} fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div className='flex flex-col gap-8 py-16'>
                  <a
                    className='inline-block max-w-max text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    What is Mirga
                  </a>
                  <a
                    className='inline-block max-w-max text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Products
                  </a>
                  <a
                    className='inline-block max-w-max text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Story
                  </a>
                  <a
                    className='inline-block max-w-max text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Pricing
                  </a>
                  <a
                    className='inline-block max-w-max text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Resources
                  </a>
                </div>
                <div className='flex flex-col items-center gap-2'>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-lg hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Help
                  </a>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-lg hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Sign up free
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <section className='overflow-hidden'>
          <div className='bg-black py-2.5 px-4'>
            <div className='flex items-center justify-center'>
              <a className='flex items-center gap-4 group' href='#'>
                <span className='text-neutral-50 text-sm font-medium group-hover:text-neutral-200 transition duration-200'>
                  Join us at Migra Conf+ on Oct 15, 2023
                </span>
                <div className='w-auto'>
                  <div className='w-6 h-6 rounded-full border border-neutral-600 flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={12}
                      height={12}
                      viewBox='0 0 12 12'
                      fill='none'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z'
                        fill='#D2D8EC'
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <nav className='px-10 py-7'>
            <div className='relative flex items-center justify-between'>
              <a className='relative z-10 pr-4 xl:pr-0' href='#'>
                <img
                  className='h-10'
                  src='mirga-assets/images/logos/mirga-dark-logo3.svg'
                  alt=''
                />
              </a>
              <div className='hidden xl:flex xl:justify-center gap-16 xl:absolute xl:w-full xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-y-1/2 xl:-translate-x-1/2'>
                <a
                  className='inline-block text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                  href='#'
                >
                  What is Mirga
                </a>
                <a
                  className='inline-block text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                  href='#'
                >
                  Products
                </a>
                <a
                  className='inline-block text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                  href='#'
                >
                  Story
                </a>
                <a
                  className='inline-block text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                  href='#'
                >
                  Pricing
                </a>
                <a
                  className='inline-block text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                  href='#'
                >
                  Resources
                </a>
              </div>
              <div className='relative hidden xl:flex items-center gap-2'>
                <a
                  className='inline-flex justify-center items-center text-center h-12 p-5 font-medium tracking-tight text-lg hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                  href='#'
                >
                  Account
                </a>
                <a
                  className='inline-flex justify-center items-center text-center h-12 p-5 font-medium tracking-tight text-lg hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                  href='#'
                >
                  Contact us
                </a>
              </div>
              <a className='navbar-burger xl:hidden' href='#'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={34}
                  height={14}
                  viewBox='0 0 34 14'
                  fill='none'
                >
                  <g clipPath='url(#clip0_231_4713)'>
                    <rect width={34} height={3} rx='1.5' fill='#19191B' />
                    <rect
                      y={11}
                      width={34}
                      height={3}
                      rx='1.5'
                      fill='#19191B'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_231_4713'>
                      <rect width={34} height={14} fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </nav>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-black opacity-20' />
            <nav className='relative p-8 w-full h-full bg-white overflow-y-auto'>
              <div className='flex flex-col justify-between h-full'>
                <div className='flex items-center justify-between'>
                  <a className='pr-4' href='#'>
                    <img
                      className='h-10'
                      src='mirga-assets/images/logos/mirga-dark-logo3.svg'
                      alt=''
                    />
                  </a>
                  <a className='navbar-close' href='#'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 18L18 6M6 6L18 18'
                        stroke='#252E4A'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                </div>
                <div className='flex flex-col gap-8 py-16'>
                  <a
                    className='inline-block max-w-max text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    What is Mirga
                  </a>
                  <a
                    className='inline-block max-w-max text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Products
                  </a>
                  <a
                    className='inline-block max-w-max text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Story
                  </a>
                  <a
                    className='inline-block max-w-max text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Pricing
                  </a>
                  <a
                    className='inline-block max-w-max text-lg tracking-tight font-medium hover:text-opacity-80 transition duration-200'
                    href='#'
                  >
                    Resources
                  </a>
                </div>
                <div className='flex flex-col items-center gap-2'>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-12 p-5 font-medium tracking-tight text-lg hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Account
                  </a>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-12 p-5 font-medium tracking-tight text-lg hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </section>
        <section
          className='px-4 pt-6 pb-8 lg:px-18 lg:pb-18'
          style={{
            background:
              'linear-gradient(131deg, #E8E5FE 26.82%, #FFEED8 96.89%)',
          }}
        >
          <nav className='relative bg-white mb-6 px-10 lg:pl-20 py-7 lg:py-4 rounded-2xl'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-between w-full lg:w-auto'>
                <a
                  className='navbar-burger order-1 lg:order-none lg:pr-9'
                  href='#'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={34}
                    height={14}
                    viewBox='0 0 34 14'
                    fill='none'
                  >
                    <g clipPath='url(#clip0_231_4713)'>
                      <rect width={34} height={3} rx='1.5' fill='#19191B' />
                      <rect
                        y={11}
                        width={34}
                        height={3}
                        rx='1.5'
                        fill='#19191B'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_231_4713'>
                        <rect width={34} height={14} fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a className='pr-4 lg:pr-0' href='#'>
                  <img
                    className='h-10'
                    src='mirga-assets/images/logos/mirga-dark-logo3.svg'
                    alt=''
                  />
                </a>
              </div>
              <div className='hidden lg:flex items-center gap-5'>
                <a
                  className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-lg focus:text-neutral-900 bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200'
                  href='#'
                >
                  Login
                </a>
                <a
                  className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                  href='#'
                >
                  Sign up free
                </a>
              </div>
            </div>
          </nav>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-black opacity-20' />
            <nav className='relative p-8 w-full h-full bg-white overflow-y-auto'>
              <div className='flex flex-col justify-between h-full'>
                <div className='flex items-center justify-between mb-16'>
                  <a className='pr-4' href='#'>
                    <img
                      className='h-10'
                      src='mirga-assets/images/logos/mirga-dark-logo3.svg'
                      alt=''
                    />
                  </a>
                  <a className='navbar-close' href='#'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 18L18 6M6 6L18 18'
                        stroke='#252E4A'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                </div>
                <div className='flex flex-col items-center gap-2'>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-lg focus:text-neutral-900 bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200'
                    href='#'
                  >
                    Login
                  </a>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Sign up free
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className='bg-white rounded-2xl pt-4 lg:pt-10 px-4 lg:px-10 pb-4 lg:pb-14'>
            <div className='flex flex-wrap -m-4 mb-8'>
              <div className='w-full md:w-2/3 p-4'>
                <div className='h-full border-2 border-neutral-50 border-opacity-50 rounded-3xl py-18 lg:py-32 pl-4 lg:pl-18 pr-4 lg:pr-16'>
                  <h1 className='font-heading mb-12 font-semibold text-6xl sm:text-9xl xl:text-11xl max-w-7xl'>
                    <span className='relative z-10'>
                      Join the community, and change
                    </span>
                    <span className='bg-orange-50 rounded-lg px-4 inline-block'>
                      the future.
                    </span>
                  </h1>
                  <h2 className='font-heading text-neutral-600 tracking-tight text-2xl font-semibold mb-24'>
                    Your journey to digital excellence starts here.
                  </h2>
                  <div className='flex flex-wrap items-center gap-8'>
                    <a
                      className='inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                      href='#'
                    >
                      Join now
                    </a>
                    <a
                      className='group inline-flex justify-center items-center text-center tracking-tight gap-3'
                      href='#'
                    >
                      <span className='text-neutral-600 tracking-tight font-semibold group-hover:text-neutral-800 transition duration-200'>
                        Learn more
                      </span>
                      <div className='w-6 h-6 rounded-full border border-neutral-50 group-hover:border-neutral-200 transition duration-200 flex items-center justify-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={12}
                          height={12}
                          viewBox='0 0 12 12'
                          fill='none'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z'
                            fill='#19191B'
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3 p-4'>
                <div className='relative h-56 md:h-full'>
                  <img
                    className='absolute inset-0 rounded-3xl w-full h-full object-cover'
                    src='mirga-assets/images/hero/background1.png'
                    alt=''
                  />
                  <div className='absolute bottom-10 left-10'>
                    <a className='flex items-center gap-3 group' href='#'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={24}
                        height={27}
                        viewBox='0 0 24 27'
                        fill='none'
                      >
                        <path
                          d='M22.5 10.9019C24.5 12.0566 24.5 14.9434 22.5 16.0981L5.24999 26.0574C3.24999 27.2121 0.749999 25.7687 0.749999 23.4593L0.75 3.5407C0.75 1.2313 3.25 -0.212069 5.25 0.942631L22.5 10.9019Z'
                          fill='#7CFF8F'
                        />
                      </svg>
                      <h2 className='text-white text-xl tracking-tight font-semibold group-hover:text-opacity-80 transition duration-200'>
                        Watch video
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -m-2'>
              <div className='w-full md:w-1/3 p-2'>
                <div className='rounded-4xl p-8 bg-orange-50 h-full relative overflow-hidden'>
                  <div className='flex flex-col items-start justify-between gap-6 h-full relative z-20'>
                    <h2 className='font-heading text-3xl tracking-tight font-semibold max-w-xs'>
                      Lecture by E. Dyrchs
                    </h2>
                    <a
                      className='group inline-flex justify-center items-center text-center tracking-tight gap-3'
                      href='#'
                    >
                      <span className='text-neutral-600 tracking-tight font-semibold group-hover:text-neutral-800 transition duration-200'>
                        Learn more now
                      </span>
                      <div className='w-6 h-6 bg-white rounded-full border border-neutral-50 group-hover:border-neutral-200 transition duration-200 flex items-center justify-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={12}
                          height={12}
                          viewBox='0 0 12 12'
                          fill='none'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z'
                            fill='#19191B'
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <img
                    className='absolute h-32 sm:h-52 object-cover bottom-0 right-0 z-10'
                    src='mirga-assets/images/hero/woman-picture1.png'
                    alt=''
                  />
                </div>
              </div>
              <div className='w-full md:w-1/3 p-2'>
                <div className='rounded-4xl border-2 border-neutral-50 border-opacity-50 h-full p-8'>
                  <div className='flex items-center justify-between flex-wrap -m-2'>
                    <div className='w-full xl:w-1/2 p-2'>
                      <h2 className='font-heading tracking-tight text-3xl font-semibold mb-4'>
                        Over 88%
                      </h2>
                      <p className='text-neutral-600 tracking-tight text-lg font-medium max-w-xs'>
                        of royalties for artists in your streaming activity
                      </p>
                    </div>
                    <div className='w-full xl:w-1/2 p-2'>
                      <img
                        className='mx-auto h-40'
                        src='mirga-assets/images/hero/circle.svg'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3 p-2'>
                <div className='p-8 h-full'>
                  <h2 className='font-heading text-5xl tracking-tight font-semibold mb-7 max-w-xs'>
                    Unlocking Digital Potential.
                  </h2>
                  <a
                    className='group inline-flex justify-center items-center text-center tracking-tight gap-3'
                    href='#'
                  >
                    <span className='text-neutral-600 tracking-tight font-semibold group-hover:text-neutral-800 transition duration-200'>
                      Learn more now
                    </span>
                    <div className='w-6 h-6 bg-white rounded-full border border-neutral-50 group-hover:border-neutral-200 transition duration-200 flex items-center justify-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={12}
                        height={12}
                        viewBox='0 0 12 12'
                        fill='none'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z'
                          fill='#19191B'
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='overflow-hidden'>
          <nav className='relative bg-white px-10 md:px-12 py-7 lg:py-4'>
            <div className='flex items-center justify-between'>
              <a
                className='navbar-burger inline-block order-1 lg:order-none'
                href='#'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={34}
                  height={14}
                  viewBox='0 0 34 14'
                  fill='none'
                >
                  <g clipPath='url(#clip0_231_4713)'>
                    <rect width={34} height={3} rx='1.5' fill='#19191B' />
                    <rect
                      y={11}
                      width={34}
                      height={3}
                      rx='1.5'
                      fill='#19191B'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_231_4713'>
                      <rect width={34} height={14} fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                className='lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2 pr-4 lg:pr-0'
                href='#'
              >
                <img
                  className='h-10'
                  src='mirga-assets/images/logos/mirga-dark-logo3.svg'
                  alt=''
                />
              </a>
              <div className='hidden lg:flex items-center gap-5'>
                <a
                  className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-lg focus:text-neutral-900 bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200'
                  href='#'
                >
                  Login
                </a>
                <a
                  className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                  href='#'
                >
                  Sign up free
                </a>
              </div>
            </div>
          </nav>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-black opacity-20' />
            <nav className='relative p-8 w-full h-full bg-white overflow-y-auto'>
              <div className='flex flex-col justify-between h-full'>
                <div className='flex items-center justify-between mb-16'>
                  <a className='pr-4' href='#'>
                    <img
                      className='h-10'
                      src='mirga-assets/images/logos/mirga-dark-logo3.svg'
                      alt=''
                    />
                  </a>
                  <a className='navbar-close' href='#'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 18L18 6M6 6L18 18'
                        stroke='#252E4A'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                </div>
                <div className='flex flex-col items-center gap-2'>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-lg focus:text-neutral-900 bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200'
                    href='#'
                  >
                    Login
                  </a>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Sign up free
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 relative' style={{ height: 860 }}>
              <img
                className='absolute top-0 left-0 w-full h-full object-cover'
                src='mirga-assets/images/hero/background2.png'
                alt=''
              />
              <div className='absolute left-5 sm:left-10 right-5 sm:right-10 bottom-10'>
                <h1 className='font-heading mb-8 text-6xl sm:text-9xl xl:text-10xl text-white font-semibold max-w-4xl'>
                  <span>Educate and</span>
                  <span className='relative inline-block'>
                    <span className='relative z-10'>dominate</span>
                    <span className='absolute -bottom-2 left-0 h-1 w-full bg-green-200 rounded-full' />
                  </span>
                  <span>online</span>
                </h1>
                <p className='text-xl font-medium text-white mb-10 tracking-tight'>
                  Your journey to digital excellence starts here.
                </p>
                <a
                  className='inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                  href='#'
                >
                  More
                </a>
              </div>
            </div>
            <div className='w-full md:w-1/2 relative' style={{ height: 860 }}>
              <img
                className='absolute top-0 left-0 w-full h-full object-cover'
                src='mirga-assets/images/hero/background3.png'
                alt=''
              />
              <div className='absolute left-5 sm:left-10 right-5 sm:right-10 bottom-10'>
                <div className='flex items-end justify-between flex-wrap gap-6'>
                  <div className='flex items-start flex-wrap gap-6'>
                    <div className='relative'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={48}
                        height={48}
                        viewBox='0 0 48 48'
                        fill='none'
                      >
                        <circle cx={24} cy={24} r={24} fill='white' />
                      </svg>
                      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={20}
                          height={20}
                          viewBox='0 0 20 20'
                          fill='none'
                        >
                          <g clipPath='url(#clip0_231_4799)'>
                            <path
                              d='M17.9176 11.7658L15.0151 10L17.9176 8.23417C18.2196 8.05332 18.4825 7.81416 18.691 7.53063C18.8995 7.24711 19.0495 6.92489 19.1322 6.58279C19.2149 6.24069 19.2286 5.88554 19.1726 5.53808C19.1166 5.19061 18.9919 4.85778 18.8059 4.559C18.6199 4.26022 18.3762 4.00148 18.0891 3.79786C17.8021 3.59425 17.4773 3.44984 17.1338 3.37306C16.7904 3.29628 16.435 3.28866 16.0886 3.35066C15.7421 3.41266 15.4115 3.54303 15.116 3.73417L12.501 5.40833V2.5C12.501 1.83696 12.2376 1.20107 11.7687 0.732233C11.2999 0.263392 10.664 0 10.001 0C9.33793 0 8.70205 0.263392 8.23321 0.732233C7.76437 1.20107 7.50098 1.83696 7.50098 2.5V5.49L4.88597 3.73417C4.28962 3.37698 3.57683 3.26834 2.90114 3.43164C2.22546 3.59495 1.64096 4.01713 1.27356 4.60725C0.906154 5.19736 0.785255 5.90818 0.936903 6.58658C1.08855 7.26498 1.50061 7.85666 2.08431 8.23417L4.98681 10L2.08431 11.7658C1.50061 12.1433 1.08855 12.735 0.936903 13.4134C0.785255 14.0918 0.906154 14.8026 1.27356 15.3927C1.64096 15.9829 2.22546 16.4051 2.90114 16.5684C3.57683 16.7317 4.28962 16.623 4.88597 16.2658L7.50098 14.5675V17.5C7.50098 18.163 7.76437 18.7989 8.23321 19.2678C8.70205 19.7366 9.33793 20 10.001 20C10.664 20 11.2999 19.7366 11.7687 19.2678C12.2376 18.7989 12.501 18.163 12.501 17.5V14.5167L15.116 16.2667C15.7123 16.6239 16.4251 16.7325 17.1008 16.5692C17.7765 16.4059 18.361 15.9837 18.7284 15.3936C19.0958 14.8035 19.2167 14.0927 19.065 13.4143C18.9134 12.7359 18.5013 12.1433 17.9176 11.7658Z'
                              fill='#19191B'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_231_4799'>
                              <rect width={20} height={20} fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <h6 className='font-heading text-white text-2xl sm:text-4xl tracking-tight font-semibold w-56 sm:w-auto sm:max-w-xs'>
                      Subscription level. Pro plan
                    </h6>
                  </div>
                  <a
                    className='flex items-center flex-wrap gap-3 group'
                    href='#'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={27}
                      viewBox='0 0 24 27'
                      fill='none'
                    >
                      <path
                        d='M22.5 10.9019C24.5 12.0566 24.5 14.9434 22.5 16.0981L5.24999 26.0574C3.24999 27.2121 0.749999 25.7687 0.749999 23.4593L0.75 3.5407C0.75 1.2313 3.25 -0.212069 5.25 0.942631L22.5 10.9019Z'
                        fill='#7CFF8F'
                      />
                    </svg>
                    <h6 className='font-heading text-white text-xl font-semibold tracking-tight group-hover:text-opacity-80 transition duration-200'>
                      Watch video
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className='pt-14 pb-24'
            style={{
              background:
                'linear-gradient(131deg, #E8E5FE 26.82%, #FFEED8 96.89%)',
            }}
          >
            <div className='container mx-auto px-4'>
              <div className='flex flex-wrap max-w-7xl mx-auto -m-3'>
                <div className='w-full md:w-1/2 p-3'>
                  <div className='bg-white rounded-4xl p-10 h-full lg:h-60'>
                    <div className='flex flex-wrap -m-3'>
                      <div className='w-full lg:w-1/2 p-3'>
                        <div className='flex flex-col justify-between gap-6 xl:gap-12'>
                          <h6 className='font-heading text-4xl font-semibold max-w-xs tracking-tight'>
                            Subscription level. Pro plan
                          </h6>
                          <a
                            className='inline-flex items-center gap-3 group mr-auto'
                            href='#'
                          >
                            <span className='text-neutral-600 font-semibold group-hover:text-neutral-800 tracking-tight transition duration-200'>
                              Learn more now
                            </span>
                            <div className='w-6 h-6 rounded-full border border-neutral-50 group-hover:border-neutral-200 transition duration-200 flex items-center justify-center'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={12}
                                height={12}
                                viewBox='0 0 12 12'
                                fill='none'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z'
                                  fill='#19191B'
                                />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='w-full lg:w-1/2 p-3'>
                        <img
                          className='mx-auto object-cover lg:mr-0 h-44'
                          src='mirga-assets/images/hero/circle2.svg'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 p-3'>
                  <div className='bg-white rounded-4xl p-10 h-full lg:h-60'>
                    <div className='flex flex-wrap -m-3'>
                      <div className='w-full lg:w-1/2 p-3'>
                        <div className='flex flex-col justify-between gap-6 xl:gap-12'>
                          <h6 className='font-heading text-4xl font-semibold max-w-xs tracking-tight'>
                            Solution that works for you
                          </h6>
                          <a
                            className='inline-flex items-center gap-3 group mr-auto'
                            href='#'
                          >
                            <span className='text-neutral-600 font-semibold group-hover:text-neutral-800 tracking-tight transition duration-200'>
                              Learn more now
                            </span>
                            <div className='w-6 h-6 rounded-full border border-neutral-50 group-hover:border-neutral-200 transition duration-200 flex items-center justify-center'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={12}
                                height={12}
                                viewBox='0 0 12 12'
                                fill='none'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z'
                                  fill='#19191B'
                                />
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='w-full lg:w-1/2 p-3'>
                        <img
                          className='mx-auto object-cover lg:mr-0 h-44'
                          src='mirga-assets/images/hero/diagram.svg'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='pb-24'
          style={{
            background:
              'linear-gradient(131deg, #E8E5FE 26.82%, #FFEED8 96.89%)',
          }}
        >
          <nav className='relative px-10 md:px-12 py-7 lg:py-4'>
            <div className='flex items-center justify-between'>
              <a
                className='navbar-burger flex items-center order-1 lg:order-none gap-10'
                href='#'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={34}
                  height={14}
                  viewBox='0 0 34 14'
                  fill='none'
                >
                  <g clipPath='url(#clip0_231_4713)'>
                    <rect width={34} height={3} rx='1.5' fill='#19191B' />
                    <rect
                      y={11}
                      width={34}
                      height={3}
                      rx='1.5'
                      fill='#19191B'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_231_4713'>
                      <rect width={34} height={14} fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <span className='hidden lg:block text-lg font-semibold'>
                  Menu
                </span>
              </a>
              <a
                className='lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2 pr-4 lg:pr-0'
                href='#'
              >
                <img
                  className='h-10'
                  src='mirga-assets/images/logos/mirga-dark-dark.svg'
                  alt=''
                />
              </a>
              <div className='hidden lg:flex items-center gap-5'>
                <a
                  className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-lg focus:text-neutral-900 bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200'
                  href='#'
                >
                  Login
                </a>
                <a
                  className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                  href='#'
                >
                  Sign up free
                </a>
              </div>
            </div>
          </nav>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-black opacity-20' />
            <nav className='relative p-8 w-full h-full bg-white overflow-y-auto'>
              <div className='flex flex-col justify-between h-full'>
                <div className='flex items-center justify-between mb-16'>
                  <a className='pr-4' href='#'>
                    <img
                      className='h-10'
                      src='mirga-assets/images/logos/mirga-dark-dark.svg'
                      alt=''
                    />
                  </a>
                  <a className='navbar-close' href='#'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 18L18 6M6 6L18 18'
                        stroke='#252E4A'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                </div>
                <div className='flex flex-col items-center gap-2'>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-lg focus:text-neutral-900 bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200'
                    href='#'
                  >
                    Login
                  </a>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Sign up free
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className='container mx-auto px-4'>
            <div className='relative mt-32 mb-20 lg:mt-64 lg:mb-40'>
              <h1 className='font-heading tracking-tight text-7xl sm:text-8xl md:text-10xl xl:text-12xl 2xl:text-15xl text-center font-semibold'>
                Digital Frontier
              </h1>
              <div className='hidden sm:block absolute -top-6 lg:-top-8 xl:-top-12 -left-2 sm:left-12 md:left-16 lg:left-32 xl:left-40 2xl:left-16 3xl:left-40'>
                <h6 className='font-heading md:text-xl lg:text-2xl font-semibold w-40 md:w-48 lg:w-56 tracking-tight'>
                  Empowering Brands in the
                </h6>
              </div>
              <div className='hidden sm:block absolute -bottom-12 lg:-bottom-16 xl:-bottom-18 right-2 md:right-8 lg:right-20 2xl:right-24 3xl:right-48'>
                <h6 className='font-heading md:text-xl lg:text-2xl font-semibold w-32 md:w-48 text-right tracking-tight'>
                  Don’t wait again — start now
                </h6>
              </div>
              <div className='absolute left-1/2 transform -translate-x-1/2 sm:transform-none sm:left-auto -top-16 sm:-top-4 sm:right-12 md:right-16 lg:right-48 xl:right-48 2xl:top-2 2xl:right-16 3xl:right-48'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={48}
                  height={48}
                  viewBox='0 0 48 48'
                  fill='none'
                >
                  <path
                    d='M48 24C48 19.2532 46.5924 14.6131 43.9553 10.6663C41.3181 6.71953 37.5698 3.64339 33.1844 1.82689C28.799 0.010388 23.9734 -0.464892 19.3178 0.461153C14.6623 1.3872 10.3859 3.67298 7.02944 7.02944C3.67298 10.3859 1.3872 14.6623 0.461153 19.3178C-0.464892 23.9734 0.0103881 28.799 1.82689 33.1844C3.64339 37.5698 6.71953 41.3181 10.6663 43.9553C14.6131 46.5924 19.2532 48 24 48V24H48Z'
                    fill='#FF8C68'
                  />
                  <circle cx={24} cy={24} r={19} fill='#19191B' />
                  <line
                    x1='30.4727'
                    y1='13.1763'
                    x2='18.9422'
                    y2='24.7068'
                    stroke='white'
                    strokeWidth={2}
                  />
                  <line
                    x1={30}
                    y1={25}
                    x2={18}
                    y2={25}
                    stroke='white'
                    strokeWidth={2}
                  />
                  <line
                    x1='30.4727'
                    y1='24.7071'
                    x2='18.9422'
                    y2='36.2376'
                    stroke='white'
                    strokeWidth={2}
                  />
                </svg>
              </div>
            </div>
            <div className='flex flex-wrap justify-center -mx-4'>
              <div className='w-full sm:w-1/2 lg:w-3/12 p-4'>
                <div className='relative h-48 sm:h-full'>
                  <img
                    className='absolute inset-0 w-full h-full object-cover rounded-3xl'
                    src='mirga-assets/images/hero/background4.jpg'
                    alt=''
                  />
                  <div className='absolute left-3 right-3 bottom-5'>
                    <div className='flex items-center justify-between flex-wrap gap-4'>
                      <h6 className='font-heading text-white font-semibold w-40 tracking-tight'>
                        Empowering Brands in the DF.
                      </h6>
                      <img
                        className='object-cover w-20 h-20 rounded-full'
                        src='mirga-assets/images/hero/logo-dark.svg'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/2 xl:w-5/12 2xl:w-4/12 p-4'>
                <div className='bg-neutral-900 rounded-3xl py-8 px-12 max-w-md lg:max-w-none mx-auto flex flex-col items-center h-full'>
                  <h2 className='font-heding text-center text-white text-xl font-semibold mb-7 tracking-tight'>
                    Subscription level
                  </h2>
                  <div className='flex lg:items-center justify-between flex-wrap -m-2'>
                    <div className='w-full sm:w-1/2 p-2'>
                      <img
                        className='mb-3 w-14 h-14 object-cover rounded-full'
                        src='mirga-assets/images/hero/avatar1.png'
                        alt=''
                      />
                      <h2 className='text-white font-semibold mb-2 tracking-tight'>
                        Julia Hamsdale
                      </h2>
                      <a href='#'>
                        <div className='w-6 h-6 rounded-full bg-white border border-neutral-50 group-hover:border-neutral-200 transition duration-200 inline-flex items-center justify-center'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={12}
                            height={12}
                            viewBox='0 0 12 12'
                            fill='none'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z'
                              fill='#19191B'
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div className='w-full sm:w-1/2 p-2'>
                      <div className='flex flex-wrap sm:justify-end -m-2'>
                        <div className='w-auto p-2'>
                          <img
                            className='w-16 h-16 object-cover rounded-2xl'
                            src='mirga-assets/images/hero/battery.png'
                            alt=''
                          />
                        </div>
                        <div className='w-auto p-2'>
                          <img
                            className='w-16 h-16 object-cover rounded-2xl'
                            src='mirga-assets/images/hero/foto.png'
                            alt=''
                          />
                        </div>
                        <div className='w-auto p-2'>
                          <img
                            className='w-16 h-16 object-cover rounded-2xl'
                            src='mirga-assets/images/hero/play.png'
                            alt=''
                          />
                        </div>
                        <div className='w-auto p-2'>
                          <img
                            className='w-16 h-16 object-cover rounded-2xl'
                            src='mirga-assets/images/hero/social.png'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-3/12 p-4'>
                <div className='rounded-3xl relative overflow-hidden h-full py-14 px-10'>
                  <img
                    className='absolute top-0 left-0 object-cover w-full h-full'
                    src='mirga-assets/images/hero/background5.jpg'
                    alt=''
                  />
                  <div className='relative z-10'>
                    <div className='flex justify-center mb-2'>
                      <img
                        className='w-14 h-14 object-cover rounded-full'
                        src='mirga-assets/images/hero/icon.svg'
                        alt=''
                      />
                    </div>
                    <h5 className='font-heading text-center text-5xl sm:text-7xl font-semibold mb-2 tracking-tight'>
                      Pro plan
                    </h5>
                    <div className='flex justify-center'>
                      <a
                        className='inline-flex text-neutral-600 hover:text-neutral-800 transition duration-200 font-semibold tracking-tight'
                        href='#'
                      >
                        Start now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap justify-center -mx-4'>
              <div className='w-full sm:w-1/2 lg:w-1/3 xl:flex-1 p-4'>
                <div className='h-full bg-white rounded-3xl pt-10 pb-8 px-12'>
                  <div className='flex flex-wrap -m-4 mb-5'>
                    <div className='w-full lg:w-full xl:w-1/2 p-4'>
                      <h6 className='font-heading text-4xl font-semibold tracking-tight'>
                        Shape tommorow.
                      </h6>
                    </div>
                    <div className='w-full lg:w-full xl:w-1/2 p-4'>
                      <img
                        className='mx-auto w-28 h-28 xl:mr-0 object-cover rounded-full'
                        src='mirga-assets/images/hero/circle3.svg'
                        alt=''
                      />
                    </div>
                  </div>
                  <a
                    className='inline-flex items-center gap-3 group mr-auto'
                    href='#'
                  >
                    <span className='text-neutral-600 font-semibold group-hover:text-neutral-800 transition duration-200 tracking-tight'>
                      Learn more now
                    </span>
                    <div>
                      <div className='w-6 h-6 rounded-full border border-neutral-50 group-hover:border-neutral-200 transition duration-200 flex items-center justify-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={12}
                          height={12}
                          viewBox='0 0 12 12'
                          fill='none'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z'
                            fill='#19191B'
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/3 xl:max-w-sm p-4'>
                <div className='h-full lg:h-auto flex flex-col justify-center bg-white rounded-3xl py-12 px-9'>
                  <img
                    className='mx-auto w-16 h-16 object-cover mb-5 rounded-2xl'
                    src='mirga-assets/images/hero/checked.svg'
                    alt=''
                  />
                  <h6 className='font-heading text-center text-4xl font-semibold tracking-tight'>
                    Connecting notes
                  </h6>
                </div>
              </div>
              <div className='w-full lg:w-1/3 xl:flex-1 p-4'>
                <div className='h-full bg-white rounded-3xl pt-10 pb-8 px-12'>
                  <div className='flex flex-wrap -m-4 mb-5'>
                    <div className='w-full sm:w-1/2 lg:w-full xl:w-1/2 p-4'>
                      <h6 className='font-heading text-4xl font-semibold tracking-tight'>
                        Font starter pack
                      </h6>
                    </div>
                    <div className='w-full sm:w-1/2 lg:w-full xl:w-1/2 p-4'>
                      <img
                        className='mx-auto w-36 h-28 object-cover sm:mr-0 lg:mx-auto xl:mr-0'
                        src='mirga-assets/images/hero/draw1.svg'
                        alt=''
                      />
                    </div>
                  </div>
                  <a
                    className='inline-flex items-center gap-3 group mr-auto'
                    href='#'
                  >
                    <span className='text-neutral-600 font-semibold group-hover:text-neutral-800 transition duration-200 tracking-tight'>
                      Learn more now
                    </span>
                    <div>
                      <div className='w-6 h-6 rounded-full border border-neutral-50 group-hover:border-neutral-200 transition duration-200 flex items-center justify-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={12}
                          height={12}
                          viewBox='0 0 12 12'
                          fill='none'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z'
                            fill='#19191B'
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='pb-24 bg-no-repeat bg-cover'
          style={{
            backgroundImage: 'url("mirga-assets/images/hero/background6.png")',
          }}
        >
          <nav className='relative px-10 md:px-12 py-7 lg:py-4'>
            <div className='flex items-center justify-between'>
              <a
                className='navbar-burger flex items-center order-1 lg:order-none gap-10'
                href='#'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={34}
                  height={14}
                  viewBox='0 0 34 14'
                  fill='none'
                >
                  <g clipPath='url(#clip0_231_4713)'>
                    <rect width={34} height={3} rx='1.5' fill='#19191B' />
                    <rect
                      y={11}
                      width={34}
                      height={3}
                      rx='1.5'
                      fill='#19191B'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_231_4713'>
                      <rect width={34} height={14} fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <span className='hidden lg:block text-lg font-semibold'>
                  Menu
                </span>
              </a>
              <a
                className='lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2 pr-4 lg:pr-0'
                href='#'
              >
                <img
                  className='h-10'
                  src='mirga-assets/images/logos/mirga-dark-dark.svg'
                  alt=''
                />
              </a>
              <div className='hidden lg:flex items-center gap-5'>
                <a
                  className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-lg focus:text-neutral-900 bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200'
                  href='#'
                >
                  Login
                </a>
                <a
                  className='inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                  href='#'
                >
                  Sign up free
                </a>
              </div>
            </div>
          </nav>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-black opacity-20' />
            <nav className='relative p-8 w-full h-full bg-white overflow-y-auto'>
              <div className='flex flex-col justify-between h-full'>
                <div className='flex items-center justify-between mb-16'>
                  <a className='pr-4' href='#'>
                    <img
                      className='h-10'
                      src='mirga-assets/images/logos/mirga-dark-dark.svg'
                      alt=''
                    />
                  </a>
                  <a className='navbar-close' href='#'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 18L18 6M6 6L18 18'
                        stroke='#252E4A'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                </div>
                <div className='flex flex-col items-center gap-2'>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-lg focus:text-neutral-900 bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200'
                    href='#'
                  >
                    Login
                  </a>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Sign up free
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className='container mx-auto px-4'>
            <div className='relative mt-32 mb-20 lg:mt-64 lg:mb-40'>
              <h1 className='font-heading tracking-tight text-7xl sm:text-8xl md:text-10xl xl:text-12xl 2xl:text-15xl text-center font-semibold'>
                Digital Frontier
              </h1>
              <div className='hidden sm:block absolute -top-6 lg:-top-8 xl:-top-12 -left-2 sm:left-12 md:left-16 lg:left-32 xl:left-40 2xl:left-16 3xl:left-40'>
                <h6 className='font-heading md:text-xl lg:text-2xl font-semibold w-40 md:w-48 lg:w-56 tracking-tight'>
                  Empowering Brands in the
                </h6>
              </div>
              <div className='hidden sm:block absolute -bottom-12 lg:-bottom-16 xl:-bottom-18 right-2 md:right-8 lg:right-20 2xl:right-24 3xl:right-48'>
                <h6 className='font-heading md:text-xl lg:text-2xl font-semibold w-32 md:w-48 text-right tracking-tight'>
                  Don’t wait again — start now
                </h6>
              </div>
              <div className='absolute left-1/2 transform -translate-x-1/2 sm:transform-none sm:left-auto -top-16 sm:-top-4 sm:right-12 md:right-16 lg:right-48 xl:right-48 2xl:top-2 2xl:right-16 3xl:right-48'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={48}
                  height={48}
                  viewBox='0 0 48 48'
                  fill='none'
                >
                  <path
                    d='M48 24C48 19.2532 46.5924 14.6131 43.9553 10.6663C41.3181 6.71953 37.5698 3.64339 33.1844 1.82689C28.799 0.010388 23.9734 -0.464892 19.3178 0.461153C14.6623 1.3872 10.3859 3.67298 7.02944 7.02944C3.67298 10.3859 1.3872 14.6623 0.461153 19.3178C-0.464892 23.9734 0.0103881 28.799 1.82689 33.1844C3.64339 37.5698 6.71953 41.3181 10.6663 43.9553C14.6131 46.5924 19.2532 48 24 48V24H48Z'
                    fill='#FF8C68'
                  />
                  <circle cx={24} cy={24} r={19} fill='#19191B' />
                  <line
                    x1='30.4727'
                    y1='13.1763'
                    x2='18.9422'
                    y2='24.7068'
                    stroke='white'
                    strokeWidth={2}
                  />
                  <line
                    x1={30}
                    y1={25}
                    x2={18}
                    y2={25}
                    stroke='white'
                    strokeWidth={2}
                  />
                  <line
                    x1='30.4727'
                    y1='24.7071'
                    x2='18.9422'
                    y2='36.2376'
                    stroke='white'
                    strokeWidth={2}
                  />
                </svg>
              </div>
            </div>
            <div className='flex flex-wrap justify-center -mx-4'>
              <div className='w-full sm:w-1/2 lg:w-3/12 p-4'>
                <div className='relative h-48 sm:h-full'>
                  <img
                    className='absolute inset-0 w-full h-full object-cover rounded-3xl'
                    src='mirga-assets/images/hero/background4.jpg'
                    alt=''
                  />
                  <div className='absolute left-3 right-3 bottom-5'>
                    <div className='flex items-center justify-between flex-wrap gap-4'>
                      <h6 className='font-heading text-white font-semibold w-40 tracking-tight'>
                        Empowering Brands in the DF.
                      </h6>
                      <img
                        className='object-cover w-20 h-20 rounded-full'
                        src='mirga-assets/images/hero/logo-dark.svg'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/2 xl:w-5/12 2xl:w-4/12 p-4'>
                <div className='bg-neutral-900 rounded-3xl py-8 px-12 max-w-md lg:max-w-none mx-auto flex flex-col items-center h-full'>
                  <h2 className='font-heding text-center text-white text-xl font-semibold mb-7 tracking-tight'>
                    Subscription level
                  </h2>
                  <div className='flex lg:items-center justify-between flex-wrap -m-2'>
                    <div className='w-full sm:w-1/2 p-2'>
                      <div className='pt-6 pb-5 px-4 bg-neutral-800 rounded-3xl'>
                        <img
                          className='mb-3 w-14 h-14 object-cover rounded-full'
                          src='mirga-assets/images/hero/avatar1.png'
                          alt=''
                        />
                        <h2 className='text-white font-semibold mb-2 tracking-tight'>
                          Julia Hamsdale
                        </h2>
                        <a href='#'>
                          <div className='w-6 h-6 rounded-full bg-white border border-neutral-50 group-hover:border-neutral-200 transition duration-200 inline-flex items-center justify-center'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={12}
                              height={12}
                              viewBox='0 0 12 12'
                              fill='none'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z'
                                fill='#19191B'
                              />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className='w-full sm:w-1/2 p-2'>
                      <div className='flex flex-wrap sm:justify-end -m-2'>
                        <div className='w-auto p-2'>
                          <img
                            className='w-16 h-16 object-cover rounded-2xl'
                            src='mirga-assets/images/hero/battery.png'
                            alt=''
                          />
                        </div>
                        <div className='w-auto p-2'>
                          <img
                            className='w-16 h-16 object-cover rounded-2xl'
                            src='mirga-assets/images/hero/foto.png'
                            alt=''
                          />
                        </div>
                        <div className='w-auto p-2'>
                          <img
                            className='w-16 h-16 object-cover rounded-2xl'
                            src='mirga-assets/images/hero/play.png'
                            alt=''
                          />
                        </div>
                        <div className='w-auto p-2'>
                          <img
                            className='w-16 h-16 object-cover rounded-2xl'
                            src='mirga-assets/images/hero/social.png'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-3/12 p-4'>
                <div className='rounded-3xl relative overflow-hidden h-full py-14 px-10'>
                  <img
                    className='absolute top-0 left-0 object-cover w-full h-full'
                    src='mirga-assets/images/hero/background5.jpg'
                    alt=''
                  />
                  <div className='relative z-10'>
                    <div className='flex justify-center mb-2'>
                      <img
                        className='w-14 h-14 object-cover rounded-full'
                        src='mirga-assets/images/hero/bell-image.png'
                        alt=''
                      />
                    </div>
                    <h5 className='font-heading text-center text-5xl sm:text-7xl font-semibold mb-2 tracking-tight'>
                      Pro plan
                    </h5>
                    <div className='flex justify-center'>
                      <a
                        className='inline-flex text-neutral-600 hover:text-neutral-800 transition duration-200 font-semibold tracking-tight'
                        href='#'
                      >
                        Start now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap justify-center -mx-4'>
              <div className='w-full sm:w-1/2 lg:w-1/3 xl:flex-1 p-4'>
                <div className='h-full bg-white rounded-3xl pt-10 pb-8 px-12'>
                  <div className='flex flex-wrap -m-4 mb-5'>
                    <div className='w-full lg:w-full xl:w-1/2 p-4'>
                      <h6 className='font-heading text-4xl font-semibold tracking-tight'>
                        Shape tommorow.
                      </h6>
                    </div>
                    <div className='w-full lg:w-full xl:w-1/2 p-4'>
                      <img
                        className='mx-auto w-28 h-28 xl:mr-0 object-cover rounded-full'
                        src='mirga-assets/images/hero/circle3.svg'
                        alt=''
                      />
                    </div>
                  </div>
                  <a
                    className='inline-flex items-center gap-3 group mr-auto'
                    href='#'
                  >
                    <span className='text-neutral-600 font-semibold group-hover:text-neutral-800 transition duration-200 tracking-tight'>
                      Learn more now
                    </span>
                    <div>
                      <div className='w-6 h-6 rounded-full border border-neutral-50 group-hover:border-neutral-200 transition duration-200 flex items-center justify-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={12}
                          height={12}
                          viewBox='0 0 12 12'
                          fill='none'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z'
                            fill='#19191B'
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/3 xl:max-w-sm p-4'>
                <div className='h-full lg:h-auto flex flex-col justify-center bg-white rounded-3xl py-12 px-9'>
                  <img
                    className='mx-auto w-16 h-16 object-cover mb-5 rounded-2xl'
                    src='mirga-assets/images/hero/checked.svg'
                    alt=''
                  />
                  <h6 className='font-heading text-center text-4xl font-semibold tracking-tight'>
                    Connecting notes
                  </h6>
                </div>
              </div>
              <div className='w-full lg:w-1/3 xl:flex-1 p-4'>
                <div className='h-full bg-white rounded-3xl pt-10 pb-8 px-12'>
                  <div className='flex flex-wrap -m-4 mb-5'>
                    <div className='w-full sm:w-1/2 lg:w-full xl:w-1/2 p-4'>
                      <h6 className='font-heading text-4xl font-semibold tracking-tight'>
                        Font starter pack
                      </h6>
                    </div>
                    <div className='w-full sm:w-1/2 lg:w-full xl:w-1/2 p-4'>
                      <img
                        className='mx-auto w-36 h-28 object-cover sm:mr-0 lg:mx-auto xl:mr-0'
                        src='mirga-assets/images/hero/draw1.svg'
                        alt=''
                      />
                    </div>
                  </div>
                  <a
                    className='inline-flex items-center gap-3 group mr-auto'
                    href='#'
                  >
                    <span className='text-neutral-600 font-semibold group-hover:text-neutral-800 transition duration-200 tracking-tight'>
                      Learn more now
                    </span>
                    <div>
                      <div className='w-6 h-6 rounded-full border border-neutral-50 group-hover:border-neutral-200 transition duration-200 flex items-center justify-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={12}
                          height={12}
                          viewBox='0 0 12 12'
                          fill='none'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M6 1L5.2825 1.6965L9.086 5.5H1V6.5H9.086L5.293 10.293L6 11L11 6L6 1Z'
                            fill='#19191B'
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-24 xl:pb-64 bg-neutral-900'>
          <div className='container mx-auto px-4'>
            <div className='mb-12 md:mb-20 max-w-5xl'>
              <h1 className='relative text-6xl sm:text-9xl xl:text-11xl text-white font-semibold font-heading'>
                <span className='mr-3'>Innovate, educate, and</span>
                <span className='relative inline-block'>
                  <span className='relative z-10'>Dominate Online</span>
                  <span className='absolute -bottom-2 left-0 h-2.5 w-full bg-green-100 rounded-full' />
                </span>
              </h1>
            </div>
            <h3 className='mb-8 text-4xl text-white font-semibold tracking-tight font-heading'>
              The most important news
            </h3>
            <div className='flex flex-wrap -m-3'>
              <div className='w-full md:w-1/2 xl:w-1/3 p-3'>
                <div className='flex flex-col h-full justify-center p-10 bg-white rounded-5xl'>
                  <div className='flex flex-wrap items-center -m-3 mb-5'>
                    <div className='w-auto p-3'>
                      <div className='flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full'>
                        <img
                          src='mirga-assets/images/features/sticker.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex-1 p-3'>
                      <h4 className='text-4xl font-medium tracking-tight font-heading max-w-xs'>
                        Customized Campaigns
                      </h4>
                    </div>
                  </div>
                  <p className='text-neutral-600 font-medium tracking-tight max-w-sm'>
                    Tailor your marketing approach with our customizable
                    campaigns. We work closely with you to understand your
                    unique goals and audience, designing personalized strategies
                    that ensure your message reaches the right people at the
                    right time.
                  </p>
                </div>
              </div>
              <div className='relative xl:top-20 w-full md:w-1/2 xl:w-1/3 p-3'>
                <div className='mb-6 p-10 bg-white rounded-5xl'>
                  <div className='flex flex-wrap items-center -m-3 mb-5'>
                    <div className='w-auto p-3'>
                      <div className='flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full'>
                        <img
                          src='mirga-assets/images/features/sticker.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex-1 p-3'>
                      <h4 className='text-4xl font-medium tracking-tight font-heading max-w-xs'>
                        Data-Driven Insights
                      </h4>
                    </div>
                  </div>
                  <p className='text-neutral-600 font-medium tracking-tight max-w-sm'>
                    Unlock the power of data with our advanced analytics tools.
                    Gain actionable insights into customer behavior, market
                    trends, and campaign performance
                  </p>
                </div>
                <div className='p-10 bg-white rounded-5xl'>
                  <div className='flex flex-wrap items-center -m-3 mb-5'>
                    <div className='w-auto p-3'>
                      <div className='flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full'>
                        <img
                          src='mirga-assets/images/features/sticker.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex-1 p-3'>
                      <h4 className='text-4xl font-medium tracking-tight font-heading max-w-xs'>
                        Customer Support
                      </h4>
                    </div>
                  </div>
                  <p className='text-neutral-600 font-medium tracking-tight max-w-sm'>
                    We're here for you around the clock. Our dedicated support
                    team is ready to assist with any questions or concerns you
                    may have.
                  </p>
                </div>
              </div>
              <div className='relative xl:top-40 w-full xl:w-1/3 p-3'>
                <div className='flex flex-col h-full justify-center p-10 bg-white rounded-5xl'>
                  <div className='flex flex-wrap items-center -m-3 mb-5'>
                    <div className='w-auto p-3'>
                      <div className='flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full'>
                        <img
                          src='mirga-assets/images/features/sticker.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex-1 p-3'>
                      <h4 className='text-4xl font-medium tracking-tight font-heading max-w-xs'>
                        A/B Testing and Optimization
                      </h4>
                    </div>
                  </div>
                  <p className='text-neutral-600 font-medium tracking-tight max-w-sm'>
                    Maximize the effectiveness of your digital campaigns through
                    A/B testing and continuous optimization. We fine-tune your
                    content, ads, and user experience to increase engagement,
                    conversions, and overall success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-24 bg-neutral-50'>
          <div className='container mx-auto px-4'>
            <div className='mb-12 md:mb-20 max-w-5xl'>
              <h1 className='relative text-6xl sm:text-9xl xl:text-11xl font-semibold font-heading'>
                <span className='mr-3'>Innovate, educate, and</span>
                <span className='relative inline-block'>
                  <span className='relative z-10'>Dominate Online</span>
                  <span className='absolute -bottom-2 left-0 h-2.5 w-full bg-green-100 rounded-full' />
                </span>
              </h1>
            </div>
            <h3 className='mb-8 text-4xl font-semibold tracking-tight font-heading'>
              The most important news
            </h3>
            <div className='flex flex-wrap -m-3 mb-16'>
              <div className='w-full md:w-1/2 xl:w-1/3 p-3'>
                <div className='flex flex-col h-full justify-center p-10 bg-white rounded-5xl'>
                  <div className='flex flex-wrap items-center -m-3 mb-5'>
                    <div className='w-auto p-3'>
                      <div className='flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full'>
                        <img
                          src='mirga-assets/images/features/sticker.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex-1 p-3'>
                      <h4 className='text-4xl font-medium tracking-tight font-heading'>
                        Customized Campaigns
                      </h4>
                    </div>
                  </div>
                  <p className='text-neutral-600 font-medium tracking-tight'>
                    Tailor your marketing approach with our customizable
                    campaigns. We work closely with you to understand your
                    unique goals and audience, designing personalized strategies
                    that ensure your message reaches the right people at the
                    right time.
                  </p>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/3 p-3'>
                <div className='mb-6 p-10 bg-white rounded-5xl'>
                  <div className='flex flex-wrap items-center -m-3 mb-5'>
                    <div className='w-auto p-3'>
                      <div className='flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full'>
                        <img
                          src='mirga-assets/images/features/sticker.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex-1 p-3'>
                      <h4 className='text-4xl font-medium tracking-tight font-heading'>
                        Data-Driven Insights
                      </h4>
                    </div>
                  </div>
                  <p className='text-neutral-600 font-medium tracking-tight'>
                    Unlock the power of data with our advanced analytics tools.
                    Gain actionable insights into customer behavior, market
                    trends, and campaign performance
                  </p>
                </div>
                <div className='p-10 bg-white rounded-5xl'>
                  <div className='flex flex-wrap items-center -m-3 mb-5'>
                    <div className='w-auto p-3'>
                      <div className='flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full'>
                        <img
                          src='mirga-assets/images/features/sticker.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex-1 p-3'>
                      <h4 className='text-4xl font-medium tracking-tight font-heading'>
                        Customer Support
                      </h4>
                    </div>
                  </div>
                  <p className='text-neutral-600 font-medium tracking-tight'>
                    We're here for you around the clock. Our dedicated support
                    team is ready to assist with any questions or concerns you
                    may have.
                  </p>
                </div>
              </div>
              <div className='w-full xl:w-1/3 p-3'>
                <div className='flex flex-col h-full justify-center p-10 bg-white rounded-5xl'>
                  <div className='flex flex-wrap items-center -m-3 mb-5'>
                    <div className='w-auto p-3'>
                      <div className='flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full'>
                        <img
                          src='mirga-assets/images/features/sticker.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex-1 p-3'>
                      <h4 className='text-4xl font-medium tracking-tight font-heading'>
                        A/B Testing and Optimization
                      </h4>
                    </div>
                  </div>
                  <p className='text-neutral-600 font-medium tracking-tight'>
                    Maximize the effectiveness of your digital campaigns through
                    A/B testing and continuous optimization. We fine-tune your
                    content, ads, and user experience to increase engagement,
                    conversions, and overall success.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap justify-center'>
              <div className='w-auto'>
                <a
                  className='inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                  href='#'
                >
                  Get consultation
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-24 bg-neutral-900'>
          <div className='container mx-auto px-4'>
            <div className='mb-12 md:mb-20 max-w-3xl'>
              <h1 className='mb-10 text-6xl sm:text-9xl xl:text-11xl text-white font-semibold font-heading'>
                Pricing
              </h1>
              <p className='text-2xl text-neutral-300 font-semibold tracking-tight'>
                Simple pricing that fits for everyone for the price of a cup of
                coffee.Start for free, no credit card required.
              </p>
            </div>
            <div className='max-w-8xl mx-auto'>
              <div className='mx-auto overflow-x-auto overflow-y-hidden'>
                <div className='min-w-max'>
                  <div className='flex flex-wrap'>
                    <div className='w-1/3 p-3'>
                      <div className='flex flex-wrap'>
                        <div className='w-full'>
                          <div style={{ height: 64 }} />
                        </div>
                        <div className='w-full'>
                          <div style={{ height: 114 }}>
                            <div className='w-64'>
                              <h5 className='mb-4 text-5xl sm:text-6xl text-white font-semibold font-heading'>
                                Lite
                              </h5>
                              <p className='text-lg text-neutral-300 font-medium tracking-tight'>
                                The house by the pond cras ornare.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='w-full'>
                          <div
                            className='py-6 flex flex-col justify-end'
                            style={{ height: 123 }}
                          >
                            <p className='text-lg text-white font-medium tracking-tight'>
                              Cloud storage
                            </p>
                          </div>
                        </div>
                        <div className='w-full'>
                          <div
                            className='py-5 flex flex-col justify-center'
                            style={{ height: 74 }}
                          >
                            <p className='text-lg text-white font-medium tracking-tight'>
                              Users
                            </p>
                          </div>
                        </div>
                        <div className='w-full'>
                          <div
                            className='py-5 flex flex-col justify-center'
                            style={{ height: 74 }}
                          >
                            <p className='text-lg text-white font-medium tracking-tight'>
                              Commercial rights
                            </p>
                          </div>
                        </div>
                        <div className='w-full' />
                      </div>
                    </div>
                    <div className='w-1/3 p-3'>
                      <div className='w-full'>
                        <div
                          className='flex items-center px-10 bg-neutral-700 rounded-t-4xl border-b border-neutral-500'
                          style={{ height: 64 }}
                        >
                          <h5 className='text-2xl text-white font-semibold tracking-tight font-heading'>
                            Starter
                          </h5>
                        </div>
                      </div>
                      <div className='w-full'>
                        <div
                          className='px-10 pt-14 flex flex-col justify-center bg-neutral-800'
                          style={{ height: 114 }}
                        >
                          <h5 className='text-5xl text-white font-semibold tracking-tight font-heading'>
                            $19.99
                            <span className='ml-6 text-base text-neutral-300 font-medium'>
                              /per mo
                            </span>
                          </h5>
                        </div>
                      </div>
                      <div className='w-full'>
                        <div
                          className='px-10 py-6 flex flex-col justify-end bg-neutral-800'
                          style={{ height: 123 }}
                        >
                          <div className='flex items-center -m-2'>
                            <div className='w-auto p-2'>
                              <svg
                                width={28}
                                height={28}
                                viewBox='0 0 28 28'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <circle
                                  cx={14}
                                  cy={14}
                                  r='13.5'
                                  stroke='white'
                                />
                                <line
                                  x1='7.35355'
                                  y1='14.6464'
                                  x2='11.3536'
                                  y2='18.6464'
                                  stroke='white'
                                />
                                <line
                                  x1='21.3536'
                                  y1='9.35355'
                                  x2='11.3536'
                                  y2='19.3536'
                                  stroke='white'
                                />
                              </svg>
                            </div>
                            <div className='w-auto p-2'>
                              <p className='text-white font-medium tracking-tight'>
                                10TB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-full'>
                        <div
                          className='px-10 flex flex-col justify-center bg-neutral-800'
                          style={{ height: 74 }}
                        >
                          <div className='flex items-center -m-2'>
                            <div className='w-auto p-2'>
                              <svg
                                width={28}
                                height={28}
                                viewBox='0 0 28 28'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <circle
                                  cx={14}
                                  cy={14}
                                  r='13.5'
                                  stroke='white'
                                />
                                <line
                                  x1='7.35355'
                                  y1='14.6464'
                                  x2='11.3536'
                                  y2='18.6464'
                                  stroke='white'
                                />
                                <line
                                  x1='21.3536'
                                  y1='9.35355'
                                  x2='11.3536'
                                  y2='19.3536'
                                  stroke='white'
                                />
                              </svg>
                            </div>
                            <div className='w-auto p-2'>
                              <p className='text-white font-medium tracking-tight'>
                                20 team members
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-full'>
                        <div
                          className='px-10 flex flex-col justify-center bg-neutral-800'
                          style={{ height: 74 }}
                        >
                          <div className='flex items-center -m-2'>
                            <div className='w-auto p-2'>
                              <svg
                                width={28}
                                height={28}
                                viewBox='0 0 28 28'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <circle
                                  cx={14}
                                  cy={14}
                                  r='13.5'
                                  stroke='white'
                                />
                                <line
                                  x1='7.35355'
                                  y1='14.6464'
                                  x2='11.3536'
                                  y2='18.6464'
                                  stroke='white'
                                />
                                <line
                                  x1='21.3536'
                                  y1='9.35355'
                                  x2='11.3536'
                                  y2='19.3536'
                                  stroke='white'
                                />
                              </svg>
                            </div>
                            <div className='w-auto p-2'>
                              <p className='text-white font-medium tracking-tight'>
                                Yes
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-full'>
                        <div style={{ height: 237 }}>
                          <div className='bg-neutral-800 w-full h-full rounded-b-4xl' />
                        </div>
                      </div>
                    </div>
                    <div className='w-1/3 p-3'>
                      <div className='w-full'>
                        <div
                          className='flex items-center px-10 bg-neutral-700 rounded-t-4xl border-b border-neutral-500'
                          style={{ height: 64 }}
                        >
                          <h5 className='text-2xl text-white font-semibold tracking-tight font-heading'>
                            Professional
                          </h5>
                        </div>
                      </div>
                      <div className='w-full'>
                        <div
                          className='px-10 pt-14 flex flex-col justify-center bg-neutral-800'
                          style={{ height: 114 }}
                        >
                          <h5 className='text-5xl text-white font-semibold tracking-tight font-heading'>
                            $19.99
                            <span className='ml-6 text-base text-neutral-300 font-medium'>
                              /per mo
                            </span>
                          </h5>
                        </div>
                      </div>
                      <div className='w-full'>
                        <div
                          className='px-10 py-6 flex flex-col justify-end bg-neutral-800'
                          style={{ height: 123 }}
                        >
                          <div className='flex items-center -m-2'>
                            <div className='w-auto p-2'>
                              <svg
                                width={28}
                                height={28}
                                viewBox='0 0 28 28'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <circle
                                  cx={14}
                                  cy={14}
                                  r='13.5'
                                  stroke='white'
                                />
                                <line
                                  x1='7.35355'
                                  y1='14.6464'
                                  x2='11.3536'
                                  y2='18.6464'
                                  stroke='white'
                                />
                                <line
                                  x1='21.3536'
                                  y1='9.35355'
                                  x2='11.3536'
                                  y2='19.3536'
                                  stroke='white'
                                />
                              </svg>
                            </div>
                            <div className='w-auto p-2'>
                              <p className='text-white font-medium tracking-tight'>
                                10TB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-full'>
                        <div
                          className='px-10 flex flex-col justify-center bg-neutral-800'
                          style={{ height: 74 }}
                        >
                          <div className='flex items-center -m-2'>
                            <div className='w-auto p-2'>
                              <svg
                                width={28}
                                height={28}
                                viewBox='0 0 28 28'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <circle
                                  cx={14}
                                  cy={14}
                                  r='13.5'
                                  stroke='white'
                                />
                                <line
                                  x1='7.35355'
                                  y1='14.6464'
                                  x2='11.3536'
                                  y2='18.6464'
                                  stroke='white'
                                />
                                <line
                                  x1='21.3536'
                                  y1='9.35355'
                                  x2='11.3536'
                                  y2='19.3536'
                                  stroke='white'
                                />
                              </svg>
                            </div>
                            <div className='w-auto p-2'>
                              <p className='text-white font-medium tracking-tight'>
                                20 team members
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-full'>
                        <div
                          className='px-10 flex flex-col justify-center bg-neutral-800'
                          style={{ height: 74 }}
                        >
                          <div className='flex items-center -m-2'>
                            <div className='w-auto p-2'>
                              <svg
                                width={28}
                                height={28}
                                viewBox='0 0 28 28'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <circle
                                  cx={14}
                                  cy={14}
                                  r='13.5'
                                  stroke='white'
                                />
                                <line
                                  x1='7.35355'
                                  y1='14.6464'
                                  x2='11.3536'
                                  y2='18.6464'
                                  stroke='white'
                                />
                                <line
                                  x1='21.3536'
                                  y1='9.35355'
                                  x2='11.3536'
                                  y2='19.3536'
                                  stroke='white'
                                />
                              </svg>
                            </div>
                            <div className='w-auto p-2'>
                              <p className='text-white font-medium tracking-tight'>
                                Yes
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-full'>
                        <div style={{ height: 237 }}>
                          <div className='bg-neutral-800 w-full h-full rounded-b-4xl' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-24 bg-neutral-900'>
          <div className='container mx-auto px-4'>
            <h1 className='flex flex-wrap mb-2 pb-14 text-6xl sm:text-9xl xl:text-11xl text-white font-semibold border-b border-neutral-600 font-heading'>
              <span className='mr-4'>Pricing</span>
              <svg
                width={30}
                height={31}
                viewBox='0 0 30 31'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M22.1104 0H7.89656C3.53541 0 0 3.54358 0 7.9148V22.1614C0 26.5327 3.53541 30.0763 7.89656 30.0763H22.1104C26.4715 30.0763 30.0069 26.5327 30.0069 22.1614V7.9148C30.0069 3.54358 26.4715 0 22.1104 0Z'
                  fill='#FEE34E'
                />
                <path
                  d='M15.3529 7.38071C14.3388 6.36424 12.6946 6.36424 11.6805 7.38071C10.6663 8.39718 10.6663 10.0452 11.6805 11.0617L15.812 15.2028C16.8261 16.2192 18.4704 16.2192 19.4845 15.2028C20.4986 14.1863 20.4986 12.5383 19.4845 11.5218L15.3529 7.38071Z'
                  fill='#19191B'
                />
                <path
                  d='M13.4047 14.3978C12.3906 13.3813 10.7464 13.3813 9.73223 14.3978C8.71811 15.4143 8.71811 17.0623 9.73223 18.0788L13.8638 22.2199C14.8779 23.2363 16.5221 23.2363 17.5362 22.2199C18.5504 21.2034 18.5504 19.5554 17.5362 18.5389L13.4047 14.3978Z'
                  fill='#19191B'
                />
              </svg>
            </h1>
            <p className='mb-20 text-2xl text-neutral-300 font-semibold tracking-tight max-w-3xl'>
              Simple pricing that fits for everyone for the price of a cup of
              coffee. Start for free, no credit card required.
            </p>
            <div className='flex flex-wrap items-end -m-2'>
              <div className='w-full md:w-1/2 xl:w-1/4 p-2'>
                <div className='p-10 bg-white rounded-4xl'>
                  <p className='mb-4 text-4xl font-semibold tracking-tight'>
                    Free
                  </p>
                  <p className='mb-12 flex items-center'>
                    <span className='mr-3 text-5xl font-semibold tracking-tight'>
                      $0
                    </span>
                    <span className='text-neutral-500 font-medium tracking-tight'>
                      /per mo
                    </span>
                  </p>
                  <ul className='mb-16 md:mb-36'>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium'>
                        Private board sharing
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium'>
                        Private mode
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium'>
                        1 user
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium'>
                        No commercial rights
                      </span>
                    </li>
                  </ul>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Try it now
                  </a>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/4 p-2'>
                <div className='bg-white overflow-hidden rounded-4xl'>
                  <div className='py-2 px-10 bg-orange-500'>
                    <p className='text-lg font-medium tracking-tight'>
                      The most popular
                    </p>
                  </div>
                  <div className='p-10'>
                    <p className='mb-4 text-4xl font-semibold tracking-tight'>
                      Starter
                    </p>
                    <p className='mb-12 flex items-center'>
                      <span className='mr-3 text-5xl font-semibold tracking-tight'>
                        $19.99
                      </span>
                      <span className='text-neutral-500 font-medium tracking-tight'>
                        /per mo
                      </span>
                    </p>
                    <ul className='mb-16 md:mb-36'>
                      <li className='mb-2.5 flex items-center'>
                        <div className='mr-4'>
                          <svg
                            width={28}
                            height={28}
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                            <line
                              x1='7.35355'
                              y1='14.6464'
                              x2='11.3536'
                              y2='18.6464'
                              stroke='#19191B'
                            />
                            <line
                              x1='21.3536'
                              y1='9.35355'
                              x2='11.3536'
                              y2='19.3536'
                              stroke='#19191B'
                            />
                          </svg>
                        </div>
                        <span className='text-neutral-600 font-medium'>
                          Private board sharing
                        </span>
                      </li>
                      <li className='mb-2.5 flex items-center'>
                        <div className='mr-4'>
                          <svg
                            width={28}
                            height={28}
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                            <line
                              x1='7.35355'
                              y1='14.6464'
                              x2='11.3536'
                              y2='18.6464'
                              stroke='#19191B'
                            />
                            <line
                              x1='21.3536'
                              y1='9.35355'
                              x2='11.3536'
                              y2='19.3536'
                              stroke='#19191B'
                            />
                          </svg>
                        </div>
                        <span className='text-neutral-600 font-medium'>
                          Private mode
                        </span>
                      </li>
                      <li className='mb-2.5 flex items-center'>
                        <div className='mr-4'>
                          <svg
                            width={28}
                            height={28}
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                            <line
                              x1='7.35355'
                              y1='14.6464'
                              x2='11.3536'
                              y2='18.6464'
                              stroke='#19191B'
                            />
                            <line
                              x1='21.3536'
                              y1='9.35355'
                              x2='11.3536'
                              y2='19.3536'
                              stroke='#19191B'
                            />
                          </svg>
                        </div>
                        <span className='text-neutral-600 font-medium'>
                          1 user
                        </span>
                      </li>
                      <li className='mb-2.5 flex items-center'>
                        <div className='mr-4'>
                          <svg
                            width={28}
                            height={28}
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                            <line
                              x1='7.35355'
                              y1='14.6464'
                              x2='11.3536'
                              y2='18.6464'
                              stroke='#19191B'
                            />
                            <line
                              x1='21.3536'
                              y1='9.35355'
                              x2='11.3536'
                              y2='19.3536'
                              stroke='#19191B'
                            />
                          </svg>
                        </div>
                        <span className='text-neutral-600 font-medium'>
                          No commercial rights
                        </span>
                      </li>
                    </ul>
                    <a
                      className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                      href='#'
                    >
                      Try it now
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/4 p-2'>
                <div className='p-10 bg-white rounded-4xl'>
                  <p className='mb-4 text-4xl font-semibold tracking-tight'>
                    Student
                  </p>
                  <p className='mb-12 flex items-center'>
                    <span className='mr-3 text-5xl font-semibold tracking-tight'>
                      $22.21
                    </span>
                    <span className='text-neutral-500 font-medium tracking-tight'>
                      /per mo
                    </span>
                  </p>
                  <ul className='mb-16 md:mb-36'>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium'>
                        Private board sharing
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium'>
                        Private mode
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium'>
                        1 user
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium'>
                        No commercial rights
                      </span>
                    </li>
                  </ul>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Try it now
                  </a>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/4 p-2'>
                <div className='p-10 bg-white rounded-4xl'>
                  <p className='mb-4 text-4xl font-semibold tracking-tight'>
                    Pro
                  </p>
                  <p className='mb-12 flex items-center'>
                    <span className='mr-3 text-5xl font-semibold tracking-tight'>
                      $38.66
                    </span>
                    <span className='text-neutral-500 font-medium tracking-tight'>
                      /per mo
                    </span>
                  </p>
                  <ul className='mb-16 md:mb-36'>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium'>
                        Private board sharing
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium'>
                        Private mode
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium'>
                        1 user
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium'>
                        No commercial rights
                      </span>
                    </li>
                  </ul>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Try it now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-12 md:py-24'>
          <div className='container mx-auto px-4'>
            <div className='mb-24 text-center max-w-6xl mx-auto'>
              <h1 className='mb-6 text-6xl sm:text-9xl font-semibold font-heading'>
                Pricing
              </h1>
              <p className='mb-12 text-xl font-medium text-neutral-600 tracking-tight'>
                Your journey to digital excellence starts here.
              </p>
              <div className='max-w-max mx-auto p-3 border border-neutral-100 rounded-2xl md:rounded-full'>
                <div className='flex flex-wrap'>
                  <div className='w-full sm:w-auto'>
                    <a
                      className='block px-9 text-center border border-orange-500 hover:border-orange-800 rounded-full shadow-3xl transition duration-200'
                      href='#'
                    >
                      <div className='flex items-center justify-center h-14'>
                        <svg
                          className='inline-block mr-4'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                        <span className='text-lg font-medium tracking-tight'>
                          Annualy
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className='w-full sm:w-auto'>
                    <a
                      className='block px-9 text-center border border-transparent rounded-full'
                      href='#'
                    >
                      <div className='flex items-center justify-center h-14'>
                        <svg
                          className='inline-block mr-4'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                        <span className='text-lg text-neutral-500 font-medium tracking-tight'>
                          Monthly
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap items-end -m-2 mb-20'>
              <div className='w-full md:w-1/2 xl:w-1/4 p-2'>
                <div className='p-10 bg-white rounded-4xl border border-neutral-100'>
                  <p className='mb-4 text-4xl font-semibold tracking-tight'>
                    Free
                  </p>
                  <p className='mb-12 flex items-center'>
                    <span className='mr-3 text-5xl font-semibold tracking-tight'>
                      $0
                    </span>
                    <span className='text-neutral-500 font-medium tracking-tight'>
                      /per mo
                    </span>
                  </p>
                  <ul className='mb-16 md:mb-36'>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium tracking-tight'>
                        Private board sharing
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium tracking-tight'>
                        Private mode
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium tracking-tight'>
                        1 user
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium tracking-tight'>
                        No commercial rights
                      </span>
                    </li>
                  </ul>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Try it now
                  </a>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/4 p-2'>
                <div className='bg-white overflow-hidden rounded-4xl border border-neutral-100'>
                  <div className='py-2 px-10 bg-orange-500'>
                    <p className='text-lg font-medium tracking-tight'>
                      The most popular
                    </p>
                  </div>
                  <div className='p-10'>
                    <p className='mb-4 text-4xl font-semibold tracking-tight'>
                      Starter
                    </p>
                    <p className='mb-12 flex items-center'>
                      <span className='mr-3 text-5xl font-semibold tracking-tight'>
                        $19.99
                      </span>
                      <span className='text-neutral-500 font-medium tracking-tight'>
                        /per mo
                      </span>
                    </p>
                    <ul className='mb-16 md:mb-36'>
                      <li className='mb-2.5 flex items-center'>
                        <div className='mr-4'>
                          <svg
                            width={28}
                            height={28}
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                            <line
                              x1='7.35355'
                              y1='14.6464'
                              x2='11.3536'
                              y2='18.6464'
                              stroke='#19191B'
                            />
                            <line
                              x1='21.3536'
                              y1='9.35355'
                              x2='11.3536'
                              y2='19.3536'
                              stroke='#19191B'
                            />
                          </svg>
                        </div>
                        <span className='text-neutral-600 font-medium tracking-tight'>
                          Private board sharing
                        </span>
                      </li>
                      <li className='mb-2.5 flex items-center'>
                        <div className='mr-4'>
                          <svg
                            width={28}
                            height={28}
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                            <line
                              x1='7.35355'
                              y1='14.6464'
                              x2='11.3536'
                              y2='18.6464'
                              stroke='#19191B'
                            />
                            <line
                              x1='21.3536'
                              y1='9.35355'
                              x2='11.3536'
                              y2='19.3536'
                              stroke='#19191B'
                            />
                          </svg>
                        </div>
                        <span className='text-neutral-600 font-medium tracking-tight'>
                          Private mode
                        </span>
                      </li>
                      <li className='mb-2.5 flex items-center'>
                        <div className='mr-4'>
                          <svg
                            width={28}
                            height={28}
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                            <line
                              x1='7.35355'
                              y1='14.6464'
                              x2='11.3536'
                              y2='18.6464'
                              stroke='#19191B'
                            />
                            <line
                              x1='21.3536'
                              y1='9.35355'
                              x2='11.3536'
                              y2='19.3536'
                              stroke='#19191B'
                            />
                          </svg>
                        </div>
                        <span className='text-neutral-600 font-medium tracking-tight'>
                          1 user
                        </span>
                      </li>
                      <li className='mb-2.5 flex items-center'>
                        <div className='mr-4'>
                          <svg
                            width={28}
                            height={28}
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                            <line
                              x1='7.35355'
                              y1='14.6464'
                              x2='11.3536'
                              y2='18.6464'
                              stroke='#19191B'
                            />
                            <line
                              x1='21.3536'
                              y1='9.35355'
                              x2='11.3536'
                              y2='19.3536'
                              stroke='#19191B'
                            />
                          </svg>
                        </div>
                        <span className='text-neutral-600 font-medium tracking-tight'>
                          No commercial rights
                        </span>
                      </li>
                    </ul>
                    <a
                      className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                      href='#'
                    >
                      Try it now
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/4 p-2'>
                <div className='p-10 bg-white rounded-4xl border border-neutral-100'>
                  <p className='mb-4 text-4xl font-semibold tracking-tight'>
                    Student
                  </p>
                  <p className='mb-12 flex items-center'>
                    <span className='mr-3 text-5xl font-semibold tracking-tight'>
                      $22.21
                    </span>
                    <span className='text-neutral-500 font-medium tracking-tight'>
                      /per mo
                    </span>
                  </p>
                  <ul className='mb-16 md:mb-36'>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium tracking-tight'>
                        Private board sharing
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium tracking-tight'>
                        Private mode
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium tracking-tight'>
                        1 user
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium tracking-tight'>
                        No commercial rights
                      </span>
                    </li>
                  </ul>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Try it now
                  </a>
                </div>
              </div>
              <div className='w-full md:w-1/2 xl:w-1/4 p-2'>
                <div className='p-10 bg-white rounded-4xl border border-neutral-100'>
                  <p className='mb-4 text-4xl font-semibold tracking-tight'>
                    Pro
                  </p>
                  <p className='mb-12 flex items-center'>
                    <span className='mr-3 text-5xl font-semibold tracking-tight'>
                      $38.66
                    </span>
                    <span className='text-neutral-500 font-medium tracking-tight'>
                      /per mo
                    </span>
                  </p>
                  <ul className='mb-16 md:mb-36'>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium tracking-tight'>
                        Private board sharing
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium tracking-tight'>
                        Private mode
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium tracking-tight'>
                        1 user
                      </span>
                    </li>
                    <li className='mb-2.5 flex items-center'>
                      <div className='mr-4'>
                        <svg
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx={14} cy={14} r='13.5' stroke='#19191B' />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                      <span className='text-neutral-600 font-medium tracking-tight'>
                        No commercial rights
                      </span>
                    </li>
                  </ul>
                  <a
                    className='inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200'
                    href='#'
                  >
                    Try it now
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full max-w-8xl mx-auto overflow-x-auto'>
              <table className='w-full min-w-max'>
                <tbody>
                  <tr className='text-left'>
                    <th className='p-0'>
                      <div className='pb-9 px-9'>
                        <p className='text-4xl font-semibold tracking-tight'>
                          Features
                        </p>
                      </div>
                    </th>
                    <th className='p-0'>
                      <div className='pb-9 px-12'>
                        <p className='text-lg text-center font-medium tracking-tight'>
                          Free
                        </p>
                      </div>
                    </th>
                    <th className='p-0'>
                      <div className='pb-9 px-12'>
                        <p className='text-lg text-center font-medium tracking-tight'>
                          Starter
                        </p>
                      </div>
                    </th>
                    <th className='p-0'>
                      <div className='pb-9 px-12'>
                        <p className='text-lg text-center font-medium tracking-tight'>
                          Student
                        </p>
                      </div>
                    </th>
                    <th className='p-0'>
                      <div className='pb-9 px-12'>
                        <p className='text-lg text-center font-medium tracking-tight'>
                          Professional
                        </p>
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <div
                        className='flex items-center px-9 bg-green-100 rounded-l-lg'
                        style={{ height: 56 }}
                      >
                        <p className='font-medium text-xl text-neutral-600 tracking-tight'>
                          Free forever
                        </p>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-green-100'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-green-100'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-green-100'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-green-100 rounded-r-lg'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div
                        className='flex items-center px-9 bg-white rounded-l-lg'
                        style={{ height: 56 }}
                      >
                        <p className='font-medium text-xl text-neutral-600 tracking-tight'>
                          Unlimited boards
                        </p>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-white'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-white'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-white'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-white rounded-r-lg'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div
                        className='flex items-center px-9 bg-green-100 rounded-l-lg'
                        style={{ height: 56 }}
                      >
                        <p className='font-medium text-xl text-neutral-600 tracking-tight'>
                          30 team members
                        </p>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-green-100'
                        style={{ height: 56 }}
                      />
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-green-100'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-green-100'
                        style={{ height: 56 }}
                      />
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-green-100 rounded-r-lg'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div
                        className='flex items-center px-9 bg-white rounded-l-lg'
                        style={{ height: 56 }}
                      >
                        <p className='font-medium text-xl text-neutral-600 tracking-tight'>
                          Mirga Smart Diagramming
                        </p>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-white'
                        style={{ height: 56 }}
                      />
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-white'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-white'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-white rounded-r-lg'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div
                        className='flex items-center px-9 bg-green-100 rounded-l-lg'
                        style={{ height: 56 }}
                      >
                        <p className='font-medium text-xl text-neutral-600 tracking-tight'>
                          Custom templates
                        </p>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-green-100'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-green-100'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-green-100'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-green-100 rounded-r-lg'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div
                        className='flex items-center px-9 bg-white rounded-l-lg'
                        style={{ height: 56 }}
                      >
                        <p className='font-medium text-xl text-neutral-600 tracking-tight'>
                          Font pack starter
                        </p>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-white'
                        style={{ height: 56 }}
                      />
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-white'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-white'
                        style={{ height: 56 }}
                      />
                    </td>
                    <td>
                      <div
                        className='flex justify-center items-center px-12 bg-white rounded-r-lg'
                        style={{ height: 56 }}
                      >
                        <svg
                          className='inline-block'
                          width={28}
                          height={28}
                          viewBox='0 0 28 28'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle
                            cx={14}
                            cy={14}
                            r='13.5'
                            fill='white'
                            stroke='#19191B'
                          />
                          <line
                            x1='7.35355'
                            y1='14.6464'
                            x2='11.3536'
                            y2='18.6464'
                            stroke='#19191B'
                          />
                          <line
                            x1='21.3536'
                            y1='9.35355'
                            x2='11.3536'
                            y2='19.3536'
                            stroke='#19191B'
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

