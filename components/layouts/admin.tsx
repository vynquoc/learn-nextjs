import { LayoutProps } from '@/models/index';
import Link from 'next/link';

export function AdminLayout(props: LayoutProps) {
  return (
    <div>
      <h1>Admin Layout</h1>
      <div>{props.children}</div>
    </div>
  );
}
