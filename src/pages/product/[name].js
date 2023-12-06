import { useRouter } from 'next/router'
import React from 'react'

export const metadata = {
  title: 'product one',
  description: 'test description for product one',
  openGraph: {
    images: ['/https://ik.imagekit.io/egrcxziyv/avatar/mercedez_home.jpg', ...previousImages],
    title: "opengrapgh title for product 1",
    description:"opengrapoh descrioption for prodcut 1"
  },
}


const Product = () => {
  const router = useRouter()



     return (
    <div>
      <p>product page for {router.query.name}</p>
    </div>
  )
}

export default Product
