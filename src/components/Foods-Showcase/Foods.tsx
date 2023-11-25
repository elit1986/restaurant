import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import FoodItem from './FoodItem';
import Skeleton from './Skeleton';

interface IFood {
  _id: string;
  foodType: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

const Foods: React.FC = () => {
  const [menuTab, setMenuTab] = useState<string>('Breakfast');
  const [loading, setLoading] = useState<boolean>(false);
  const [foods, setFoods] = useState<IFood[]>([]);

  useEffect(() => {
    setLoading(true);
    useFetch('http://localhost:5000/foods')
      .then((data: IFood[]) => setFoods(data))
      .finally(() => setLoading(false));
  }, []);

  const handleMenuTabs = (type: string) => {
    setMenuTab(type);
  };

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      {/* food Menu tab  */}
      <div className="flex items-center justify-center space-x-6">
        <p
          className={
            menuTab === 'Breakfast'
              ? 'active_menu_tab poppins bg-primary'
              : 'menu_tab poppins'
          }
          onClick={() => handleMenuTabs('Breakfast')}
        >
          Breakfast
        </p>
        <p
          className={
            menuTab === 'Lunch'
              ? 'active_menu_tab poppins bg-primary'
              : 'menu_tab poppins'
          }
          onClick={() => handleMenuTabs('Lunch')}
        >
          Lunch
        </p>
        <p
          className={
            menuTab === 'Dinner'
              ? 'active_menu_tab poppins bg-primary'
              : 'menu_tab poppins'
          }
          onClick={() => handleMenuTabs('Dinner')}
        >
          Dinner
        </p>
      </div>

      {/* all foods  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {foods
          .filter((item: IFood) => menuTab === item.foodType)
          .map((item: IFood) =>
            loading ? (
              <Skeleton key={item._id} />
            ) : (
              <FoodItem key={item._id} {...item} />
            )
          )}
      </div>
    </section>
  );
};

export default Foods;
