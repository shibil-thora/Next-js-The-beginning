import React from 'react' 
import { useRouter } from 'next/router'

function page() {

    const router = useRouter(); 
    const {postId} = router.query

  return (
    <div>{postId}</div>
  )
}

export default page