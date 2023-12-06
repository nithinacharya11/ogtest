import { useRouter } from 'next/router'
import React from 'react'

const index = () => {
  const router = useRouter()
  return (
    <div>
      <p>product page for {router.query.name}</p>
    </div>
  )
}

export default index
