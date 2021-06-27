import React from "react";
import PlanCard from "./PlanCard";
import { plans, features } from "../Plans";
export default function PriceCard() {
  //console.log(plans);
  return (
    <div className="container">
      <div className="row">
        {plans.map((plan, index) => {
          return <PlanCard key={index} plan={plan} features={features} />;
        })}
      </div>
    </div>
  );
}
