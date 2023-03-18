import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { chartFetch } from '../redux/action/action';

export default function CryptoChart() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chartFetch());
  }, []);

  const chartData = useSelector((state) => state.chart);
  console.log(chartData)

  return (
    <div>CryptoChart</div>
  )
}
