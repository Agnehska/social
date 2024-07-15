import { useEffect, useState } from "react";

export const useFetchData = (param) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/${param}`)
      .then((data) => data.json())
      .then((info) => setData(info.data))
      .catch((error) => {
        console.log(error);

        setData([]);
      });
  }, [param]);

  return data;
};
