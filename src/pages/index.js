import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

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
