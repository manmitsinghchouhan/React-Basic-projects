import React, { useState } from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router'

const Github = () => {
  const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/manmitsinghchouhan")
    //       .then((res) => res.json())
    //       .then((data) => {setData(data); console.log(data)});
    // },[])
  return (
    <>
      <div className="bg-gray-600 text-white text-3xl text-center p-3 m-3">
        Github User Name : {data.login}
        <img src={data.avatar_url} alt="" srcset="" />
      </div>
    </>
  );
}

export default Github

export const getGitInfo =  async() => {
  const response = await fetch("https://api.github.com/users/manmitsinghchouhan")
  return response.json()
}