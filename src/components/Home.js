import React, { useState } from "react";
import Cardcontainer from "./Cardscontainer";
import data from "../database/data";

function Home() {
  const [selectedState, setSelectedState] = useState("");

  const uniqueStates = [
    "Uttar Pradesh",
    "Rajasthan",
    "Goa",
    "West Bengal",
    "Kerala",
    "Maharashtra",
    "Himachal Pradesh",
    "Bihar",
    "Jharkhand",
  ];

  const filterHandler = (stateName) => {
    setSelectedState(stateName);
  };
  const filterData = selectedState ?
  data.filter((item)=>item.state === selectedState) :data;

  return (
  <>
   <div className="filter-option">
      <select onChange={(e) => filterHandler(e.target.value)}
      className={selectedState ? "active-select":"inactive-select"}
    >
        <option value="">show all states</option>
        {uniqueStates.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>

    <Cardcontainer data={filterData} />
  </>
  );
}
<footer>

<div class="footer-container">
    <div class="footer-left-part">
        <h1>Created by PURAB SINGH</h1>
        <p> <b>Made with ❤ with Tech Tribe</b></p>
        <p>Note: this project is made for educational purposes only.</p>
    </div>
    <div class="footer-right-part">
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="https://www.instagram.com/mr_purabsingh__18/"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
    </div>
</div>
</footer>
export default Home;