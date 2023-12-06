import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'product one',
  description: 'test description for product one',
  openGraph: {
    images: ['/https://ik.imagekit.io/egrcxziyv/avatar/mercedez_home.jpg'],
    title: "opengrapgh title for product 1",
    description:"opengrapoh descrioption for prodcut 1"
  },
}

export default function Home() {
  const router = useRouter();
  return (
   <div>
    <h1>Homepage</h1>
    <button className='p-2 m-8 text-white bg-black' onClick={() => router.push('/product/one')}>check product one</button>
    <button className='p-2 m-8 text-white bg-black' onClick={() => router.push('/product/one')}>check product one</button>
    <button className='p-2 m-8 text-white bg-black' onClick={() => router.push('/product/one')}>check product one</button>
    <button className='p-2 m-8 text-white bg-black' onClick={() => router.push('/product/one')}>check product one</button>
    <button className='p-2 m-8 text-white bg-black' onClick={() => router.push('/product/one')}>check product one</button>
   </div>
  )
}
