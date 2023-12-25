import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import scss from './Product.module.scss';
import Form from '../components/Form/Form';
import { IoMdArrowDropdown } from 'react-icons/io';
import Card from '../components/Card/Card';
import Favorite from '../components/Favorite/Favorite';
//import axios from 'axios';

const Product = () => {
  const products = [
    {
      id: 0,
      img: [],
      title: 'Бишкек, Парк Ататюрк, Масануева 58',
      desc: '3 комнаты',
      price: '4,000,000',
      new: true,
      added: '11.12.2023'
    },
    {
      id: 1,
      img: [],
      title: 'Бишкек, Парк Ататюрк, Масануева 57',
      desc: '3 комнаты',
      price: '2,000,000',
      new: true,
      added: '11.12.2023'
    }
  ]
  //const [products, setProducts] = useState([]);

  //useEffect(() => {
  //  // Функция для получения данных о продуктах с бэкенда
  //  const fetchProducts = async () => {
  //    try {
  //      const response = await axios.get('YOUR_BACKEND_URL/products'); // Замените YOUR_BACKEND_URL на ваш URL бэкенда
  //      setProducts(response.data); // Устанавливаем полученные данные в состояние
  //    } catch (error) {
  //      console.error('Error fetching products:', error);
  //    }
  //  };

  //  fetchProducts(); // Вызываем функцию при монтировании компонента
  //}, []); // Пустой массив зависимостей, чтобы useEffect сработал только один раз при монтировании компонента

  return (
    <>
      <Favorite />
      <Header />
      <Form />
      <div className={scss.Filter}>
        <h4>{products.length} Результатов</h4> {/* Отображаем количество продуктов */}
        <p>Новые <IoMdArrowDropdown /></p>
      </div>
      

      {/* Отображаем продукты */}
      <div className={scss.ProductList}>
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default Product;