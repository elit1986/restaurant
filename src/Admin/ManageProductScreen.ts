import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useFetch from '../hooks/useFetch';
import Heading from './Heading';

interface IFood {
  _id: string;
  title: string;
  price: string;
  image: string;
  foodType: string;
}

const ManageProductScreen: React.FC = () => {
  const [foods, setFoods] = useFetch<IFood[]>();

  const handleDelete = (id: string) => {
    fetch(`http://localhost:5000/foods/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deleteCount > 0) {
          swal('Successful!', 'Deleted successfully!', 'success');
          const restFoods = foods.filter((item: IFood) => item._id !== id);
          setFoods(restFoods);
        }
      });
  };

  return (
    <div>
      <Heading text="Manage Products" />
      {/* ... remaining JSX code ... */}
    </div>
  );
};

export default ManageProductScreen;
