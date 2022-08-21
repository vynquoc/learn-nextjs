import { LayoutProps } from '@/models/index';
import Link from 'next/link';

export function EmptyLayout(props: LayoutProps) {
  return (
    <div>
      <h1>Empty</h1>
      <div>{props.children}</div>
    </div>
  );
}
