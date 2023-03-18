import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { portfolioFetch } from '../redux/action/action';




export default function SideList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(portfolioFetch());
  }, []);
  const sideListData = useSelector((state) => state.portfolio);
  // console.log(sideListData)


  return (
    <div>Sidelist</div>
  )
}
