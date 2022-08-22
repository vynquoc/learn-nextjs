import { LayoutProps } from '@/models/index';
import Link from 'next/link';

export function EmptyLayout(props: LayoutProps) {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
}
