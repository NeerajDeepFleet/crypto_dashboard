import React from "react";
import "./App.css";
import ExchangeRate from "./components/ExchangeRate";
import Portfolio from "./components/Portfolio";
import SideList from "./components/SideList";
import CryptoChart from "./components/CryptoChart";

function App() {
  return (
    <div >
      <CryptoChart />
      <Portfolio />
      <ExchangeRate />
      <SideList />


    </ div >
  );
}

export default App;
