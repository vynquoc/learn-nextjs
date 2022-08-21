import { LayoutProps } from '@/models/index';
import Link from 'next/link';

export function MainLayout(props: LayoutProps) {
  return (
    <div>
      <h1>Main Layout</h1>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <div>{props.children}</div>
    </div>
  );
}
