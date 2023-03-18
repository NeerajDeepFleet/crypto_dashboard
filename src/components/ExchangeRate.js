import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { exchangeRateFetch } from '../redux/action/action';


export default function ExchangeRate() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exchangeRateFetch());
  }, []);

  const exchangeRateData = useSelector((state) => state.exchangeRate);
  console.log(exchangeRateData)

  return (
    <div>exchangerate</div>
  )
}
