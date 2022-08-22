import * as React from 'react';
import useSWR from 'swr';
export function StudentDetail({ studentId }: any) {
  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
    revalidateOnMount: false,
  });
  return <div>{data?.name}</div>;
}
