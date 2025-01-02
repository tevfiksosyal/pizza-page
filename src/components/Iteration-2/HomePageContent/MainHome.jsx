import React, { useState } from "react";
import HomePage from "./HomePage";
import Recommended from "./HomePageComponents/Recommended";
import ClassifiedCategories from "./HomePageComponents/ClassifiedCategories";
import axios from "axios";

function MainHome() {
  const [pizzaData, setPizzaData] = useState(null);

  const getAllPizzas = async (id) => {
    try {
      const response = await axios.get("http://localhost:3000/pizzas");
      setPizzaData(response.data);
      console.log("Anasayfa Datalar", response.data);
    } catch (error) {
      console.error("Veri Yükleme Hatası : ", error);
    }
  };
  return (
    <div className="bg-mainBgColor">
      <HomePage pizzaData={pizzaData} getAllPizzas={getAllPizzas} />
      <Recommended />
      <ClassifiedCategories />
    </div>
  );
}

export default MainHome;
