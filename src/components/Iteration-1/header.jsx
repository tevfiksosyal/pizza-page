import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function Header() {
  const history = useHistory();

  const [pizza, setPizza] = useState(null);

  const getAllPizzas = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/pizzas`);
      setPizza(response.data);
      console.log("anasayfadan gelen datalar", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const routerHandler = () => {
    getAllPizzas();
    const pizzaId = 1;

    toast.success("Sipariş detayları ekranına yönlendiriliyorsunuz!", {
      position: "top-right",
      autoClose: 1000,
    });

    setTimeout(() => {
      history.push(`/order/${pizzaId}`);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen">
      <div
        className="bg-center bg-cover bg-no-repeat h-full"
        style={{
          backgroundImage: "url('Assets/Iteration-1-assets/home-banner.png')",
        }}
      >
        <div className="flex flex-col items-center justify-center m-10 p-6 gap-10">
          <img src="Assets/Iteration-1-assets/logo.svg" alt="" />
          <p className="text-white text-7xl leading-tight-1 text-center font-sans">
            KOD ACIKTIRIR <br />
            PİZZA, DOYURUR
          </p>
          <button
            onClick={routerHandler}
            data-cy="aciktimButon"
            className="rounded-full font-barlow font-medium bg-yellow-400 py-2.5 px-12 hover:bg-red-700 hover:text-white"
          >
            ACIKTIM
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Header;
