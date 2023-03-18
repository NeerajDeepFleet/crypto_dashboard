import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { portfolioFetch } from '../redux/action/action';

export default function Portfolio() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(portfolioFetch());
  }, []);

  const portfolioData = useSelector((state) => state.portfolio);
  console.log(portfolioData)
  return (
    <div>Portfolio</div>
  )
}
