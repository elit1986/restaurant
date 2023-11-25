import React from 'react';
// Import Swiper core and required modules
import SwiperCore from 'swiper';
import Keyboard from 'swiper';
import Navigation from 'swiper';
import Pagination from 'swiper';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import useFetch from '../../hooks/useFetch';
import './Slider.css';
import { IFood } from '../../types/food.type';

SwiperCore.use([Keyboard, Pagination, Navigation]);

const Slider: React.FC = () => {
  const foods = useFetch<IFood[]>('http://localhost:5000/foods');

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      {foods.map((item: IFood, index: number) => (
        <SwiperSlide key={index}>
          <img className="w-36" src={item.image} alt={item.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
