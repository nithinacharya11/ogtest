import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
// import { Metadata } from 'next'

export const Metadata = {
  title: 'product one',
  description: 'test description for product one',
  openGraph: {
    images: ['/https://ik.imagekit.io/egrcxziyv/avatar/mercedez_home.jpg'],
    title: "opengrapgh title for product 1",
    description:"opengrapoh descrioption for prodcut 1"
  },
}


const Product = () => {
  const router = useRouter()

     return (
    <div>
      <Head>
        <meta property='og:type' content='website' />
				<meta property='og:title' content={'Boundless-Commerce Shop Example'} />
				<meta property='og:url' content={"https://gohype.in/"} />
				<meta property='og:image' content={"https://ik.imagekit.io/egrcxziyv/avatar/mercedez_home.jpg"} />
      </Head>
      <p>product page for {router.query.name}</p>
    </div>
  )
}

export default Product
