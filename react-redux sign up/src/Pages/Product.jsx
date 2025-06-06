import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REJECT, REQUEST, SUCCESS } from '../redux/actionType';
import { toast } from 'react-toastify';
import ProductCard from '../Components/ProductCard';

const Product = () => {
  const { isLoading, isError, data } = useSelector((state) => state.Product);
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch({ type: REQUEST });
    axios.get('http://localhost:3000/Products')
      .then((res) => {
        dispatch({ type: SUCCESS, payload: res.data });
        toast.success("Data Fetched Successfully");
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: REJECT });
        toast.error("Error fetching data");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {data.length > 0 && data.map((el) => <ProductCard key={el.id} {...el} />)}
      </div>
    </div>
  );
};

export default Product;
