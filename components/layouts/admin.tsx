import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import { Auth } from '../common';

export function AdminLayout(props: LayoutProps) {
  return (
    <Auth>
      <h1>Admin Layout</h1>
      <Link href='/'>Home</Link>
      <div>{props.children}</div>
    </Auth>
  );
}
