import { useEffect, useState } from "react";

export function useFetchData(method, post, token){
  const [res, setRes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts',{
      method: method,
      headers: {Authorization: `Bearer ${token}`},
      body: post
    })
    .then(data => data.json())
    .then(info => setRes(info.data))
  }, [])

  return res
}

