import React from 'react';
import clsx from 'clsx';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '../styles/globals.css';
import '../styles/base.scss';

const generalSans = localFont({
  src: [
    {
      path: '../assets/fonts/GeneralSans-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/GeneralSans-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/GeneralSans-Semibold.woff2',
      weight: '600',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-general-sans'
});

const euclidCircularA = localFont({
  src: [
    {
      path: '../assets/fonts/EuclidCircularA-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../assets/fonts/EuclidCircularA-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/EuclidCircularA-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/EuclidCircularA-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-euclid-circular-a'
});

export const metadata: Metadata = {
  title: {
    default: 'Linpay',
    template: '%s | Linpay'
  },
  description: 'Linpay'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={clsx(generalSans.variable, euclidCircularA.variable)}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
