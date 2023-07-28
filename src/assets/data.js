import { Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { default: Link } = require('next/link');

// all menu
export const allMenuItems = [
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
    label: <Link href="/pcBuilder">PC Builder</Link>,
  },
];

// categories
export const allCategories = [
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
