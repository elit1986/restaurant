import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = <T,>(url: string): T[] => {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    axios
      .get<T[]>(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [url]);

  return data;
};
export default useFetch;
