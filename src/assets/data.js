const { default: Link } = require('next/link');

// all categories
export const allCategories = [
  {
    id: 'processor',
    label: 'CPU / Processor',
    image: '/images/categories/processor.png',
  },
  {
    id: 'motherboard',
    label: 'Motherboard',
    image: '/images/categories/motherboard.png',
  },
  {
    id: 'ram',
    label: 'RAM',
    image: '/images/categories/ram.png',
  },
  {
    id: 'powerSupply',
    label: 'Power Supply Unit',
    image: '/images/categories/powerSupply.png',
  },
  {
    id: 'storage',
    label: 'Storage Device',
    image: '/images/categories/storage.png',
  },
  {
    id: 'monitor',
    label: 'Monitor',
    image: '/images/categories/monitor.png',
  },
  {
    id: 'others',
    label: 'Others',
    image: '/images/categories/headphone.png',
  },
];

// all menu
export const allMenuItems = [
  {
    key: '0',
    label: <Link href="/">Home</Link>,
  },
  {
    key: '1',
    label: 'Categories',
    children: [
      {
        label: <Link href="/categories/processor">CPU / Processor</Link>,
        key: '1-1',
      },
      {
        label: <Link href="/categories/motherboard">Motherboard</Link>,
        key: '1-2',
      },
      {
        label: <Link href="/categories/ram">RAM</Link>,
        key: '1-3',
      },
      {
        label: <Link href="/categories/powerSupply">Power Supply Unit</Link>,
        key: '1-4',
      },
      {
        label: <Link href="/categories/storage">Storage Device</Link>,
        key: '1-5',
      },
      {
        label: <Link href="/categories/monitor">Monitor</Link>,
        key: '1-6',
      },
      {
        label: <Link href="/categories/others">Others</Link>,
        key: '1-7',
      },
    ],
  },
  {
    key: '2',
    label: <Link href="/pc-builder">PC Builder</Link>,
  },
];

// menu categories
export const menuCategories = [
  {
    label: <Link href="/categories/processor">CPU / Processor</Link>,
    key: 'processor',
  },
  {
    label: <Link href="/categories/motherboard">Motherboard</Link>,
    key: 'motherboard',
  },
  {
    label: <Link href="/categories/ram">RAM</Link>,
    key: 'ram',
  },
  {
    label: <Link href="/categories/powerSupply">Power Supply Unit</Link>,
    key: 'powerSupply',
  },
  {
    label: <Link href="/categories/storage">Storage Device</Link>,
    key: 'storage',
  },
  {
    label: <Link href="/categories/monitor">Monitor</Link>,
    key: 'monitor',
  },
  {
    label: <Link href="/categories/others">Others</Link>,
    key: 'others',
  },
];
