import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    const {userid} = useParams()
  return (
    <h1 className='bg-gray-600 text-white text-3xl text-center p-3 m-3'> 
      user:{userid}
    </h1>
  )
}

export default User
