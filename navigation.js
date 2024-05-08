// import {
//   createLocalizedPathnamesNavigation,
  
// } from 'next-intl/navigation';
 
// export const locales = ['en', 'ar'];
// export const localePrefix = 'always'; // Default
 
// // The `pathnames` object holds pairs of internal
// // and external paths, separated by locale.
// export const pathnames = {
// //   '/': '/',
// //   '/blog': '/blog',
//   '/cart': {
//     en: '/cart',
//     ar: '/cart'
//   },
//   // If locales use different paths, you can
//   // specify each external path per locale.
//   '/categories': {
//     en: '/categories',
//     ar: '/categories'
//   },
 
// //   Dynamic params are supported via square brackets
//   '/product/[productId]': {
//     en: '/product/[productId]',
//     ar: '/product/[productId]'
//   },

// }
 
// export const {Link, redirect, usePathname, useRouter, getPathname} =
//   createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});


import { createSharedPathnamesNavigation } from 'next-intl/navigation';
    
    export const locales = ['en', 'ar'];
    export const localePrefix = 'always'; // Default
    
    export const { Link, redirect, usePathname, useRouter } =
        createSharedPathnamesNavigation({ locales, localePrefix });