import Image from 'next/image';
import { Inter } from 'next/font/google';
import Content from './components/Content/page';
import Menu from './components/Menu/page';
import Trend from './components/Trends/page';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className=' w-full h-screen main'>
      <Menu />
      <Content />
      <Trend />
    </main>
  );
}
