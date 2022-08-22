import { useRouter } from 'next/router';
// import Header from '@/components/common/header';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { AdminLayout, MainLayout } from '@/components/layouts';
import { Box, Typography } from '@mui/material';

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter();
  const [postList, setPostList] = useState([]);
  const page = router.query?.page;

  function handleNextClick() {
    router.push(
      {
        pathname: '/about',
        query: {
          page: Number(page || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  }
  useEffect(() => {
    if (!page) return;
    (async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
      const data = await response.json();
      setPostList(data.data);
    })();
  }, [page]);
  return (
    <Box>
      <Typography component='h1' variant='h3' color='primary.main'>
        About Page
      </Typography>

      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextClick}>Next Page</button>
    </Box>
  );
}

AboutPage.Layout = AdminLayout;
