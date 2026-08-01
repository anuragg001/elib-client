import Banner from '@/app/(home)/components/Banner';
import BookList from './components/BookList';

export default async function Home() {

  return (
    <>
      <Banner />
      <BookList />
    </>
  );
}