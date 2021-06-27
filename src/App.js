import "./styles.css";
import React from "react";
import Header from "./Components/Header";
import PriceCard from "./Components/PriceCard";

export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="pricing py-5">
        <PriceCard />
      </div>
    </div>
  );
}
