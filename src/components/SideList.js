import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { portfolioFetch } from '../redux/action/action';



export default function SideList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(portfolioFetch());
  }, []);
  const sideListData = useSelector((state) => state.portfolio);
  console.log(sideListData.portfolioData)
  const data = sideListData.portfolioData

  return (
    <div>Sidelist
      {(data.length !== 0) ? (
        <div>
          {data.map(coin => (
            <div key={coin.id}>
              <img src={coin.image} alt={coin.name} width="25" height="25" />
              <span>{coin.name}</span>
              <span>Market Cap: {coin.market_cap}</span>
              {coin.price_change_percentage_24h > 0 ? <span>up</span> : <span>down</span>}
              {Math.abs(coin.price_change_percentage_24h)}%
            </div>
          ))}
        </div>) : (
        <div>loading</div>)}


    </div>
  )
}
