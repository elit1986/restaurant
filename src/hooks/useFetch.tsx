import { useEffect, useState } from 'react';
import axios from 'axios';

interface IFood {
  // Define the properties of a food item
  id: number;
  name: string;
  // Add other properties as needed
}

const useFetch = () => {
  const [foods, setFoods] = useState<IFood[]>([]);

  useEffect(() => {
    axios
      .get<IFood[]>('http://localhost:5000/foods')
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return [foods, setFoods];
};

export default useFetch;
