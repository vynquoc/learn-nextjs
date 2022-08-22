import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function Auth({ children }: { children: any }) {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();

  useEffect(() => {
    console.log(profile);
    if (!firstLoading && !profile?.username) router.push('/login');
  }, [router, profile, firstLoading]);

  if (!profile?.username) return <p>Loading...</p>;
  return <div>{children}</div>;
}
