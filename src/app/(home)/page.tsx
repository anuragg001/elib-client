import Banner from '@/app/(home)/components/Banner';
import BookList from './components/BookList';
import { Suspense } from 'react';
import Loading from '@/components/Loading';



export default async function Home() {

  const response = await fetch(`${process.env.BACKEND_URL}/books`)

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  //string to json
  const { books } = await response.json();
  console.log(books);

  return (
    <>
      <Banner />
      {/* <Suspense fallback={<Loading />}> */}
        <BookList books={books} />
      {/* </Suspense> */}
    </>
  );
}