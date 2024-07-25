import { useCallback, useEffect, useState } from "react";

export function useFetchData(method, url, post, token){
  const [res, setRes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/${url}`,
    {
      method: method,
      headers: {Authorization: `Bearer ${token}`},
      body: post 
    }
  )
    .then(data => data.json())
    .then(info => {
      if (method === 'POST'){
        setRes([...res, info.data])
      } else {
        setRes(info.data)
      }
    })
  }, [url])

  const refetch = () => {
    fetch(`http://localhost:5000/api/${url}`,
      {
        method: method,
        headers: {Authorization: `Bearer ${token}`},
        body: post 
      }
    )
      .then(data => data.json())
      .then(info => {
        if (method === 'POST'){
          setRes([...res, info.data])
        } else {
          setRes(info.data)
        }
    })
  }

  return {res, refetch}
}

