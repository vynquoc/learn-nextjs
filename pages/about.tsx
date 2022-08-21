import { useRouter } from 'next/router';
// import Header from '@/components/common/header';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { MainLayout } from '@/components/layouts';

const Header = dynamic(() => import('@/components/common/header'), { ssr: false });
export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter();
  const [postList, setPostList] = useState([]);
  const page = router.query?.page;
  console.log(router.query);
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
    <MainLayout>
      <div>About Page</div>
      <Header />
      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextClick}>Next Page</button>
    </MainLayout>
  );
}

// export async function getServerSideProps() {
//   return {
//     props: {},
//   };
// }
