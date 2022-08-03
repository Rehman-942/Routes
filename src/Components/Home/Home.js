import React from "react";
import { Data } from "../Data";

export default function Home() {
  return (
    <div class="data-div">
      {Data.map((item) => {
        return (
          <div class="cards">
            <h1>{item.packageName}</h1>
            <h2>{item.datapkg}</h2>
            <h2>{item.description}</h2>
            <h2>{item.min}</h2>
            <h2>{item.amount}</h2>
            <button class="subscribe-btn">Subscribe Now</button>
          </div>
        );
      })}
    </div>
  );
}
