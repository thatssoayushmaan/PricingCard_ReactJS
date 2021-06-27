import React from "react";

export default function PlanCard({ plan, features }) {
  //console.log(plan);
  console.log(features);
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">
            {plan.plan}
          </h5>
          <h6 class="card-price text-center">
            ${plan.fee}
            <span class="period">/month</span>
          </h6>
          <hr />
          <ul class="fa-ul">
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              {plan.plan !== "Free" ? <strong>{plan.user}</strong> : plan.user}
            </li>
            <li>
              <span class="fa-li">
                <i class="fas fa-check"></i>
              </span>
              {plan.storage}
            </li>
          </ul>
          {features.map((feature, index) => {
            return (
              <div key={index}>
                {plan.feature_flags[index] !== 0 ? (
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    {feature === "Free Subdomain" && plan.plan === "PRO" ? (
                      <>
                        <strong>Unlimited</strong> {feature}{" "}
                      </>
                    ) : (
                      feature
                    )}
                  </li>
                ) : (
                  <li class="text-muted">
                    <span class="fa-li">
                      <i class="fas fa-times"></i>
                    </span>
                    {feature === "Free Subdomain" && plan.plan === "PRO" ? (
                      <>
                        <strong>Unlimited</strong> {feature}{" "}
                      </>
                    ) : (
                      feature
                    )}
                  </li>
                )}
              </div>
            );
          })}
          <hr />
          <button class="btn btn-block btn-primary text-uppercase">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}
