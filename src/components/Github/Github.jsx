import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect (()=>{
        fetch('https://api.github.com/users/satyam998115')
        .then(Response=>Response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <>
    <div className="max-w-md mx-auto my-8 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-center">
  <img
    src={data.avatar_url}
    alt="GitHub Avatar"
    className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-md mb-4"
  />
  <h2 className="text-2xl font-bold mb-2">{data.login}</h2>
  <p className="italic mb-4">{data.bio}</p>

  <div className="text-left space-y-2">
    <p><span className="font-semibold">Location:</span> {data.location}</p>
    <p><span className="font-semibold">Email:</span> {data.email || 'Not Available'}</p>
    <p><span className="font-semibold">Blog:</span> 
      {data.blog ? (
        <a href={data.blog} target="_blank" rel="noopener noreferrer" className="underline ml-1">{data.blog}</a>
      ) : (
        ' Not Available'
      )}
    </p>
    <p><span className="font-semibold">Twitter:</span> @{data.twitter_username || 'Not Available'}</p>
    <p><span className="font-semibold">Followers:</span> {data.followers}</p>
    <p><span className="font-semibold">Following:</span> {data.following}</p>
    <p><span className="font-semibold">GitHub Profile:</span> 
      <a 
        href={data.html_url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="underline ml-1 text-blue-200 hover:text-white"
      >
        Visit Profile
      </a>
    </p>
  </div>
</div>

    </>
  )
}

export default Github 
