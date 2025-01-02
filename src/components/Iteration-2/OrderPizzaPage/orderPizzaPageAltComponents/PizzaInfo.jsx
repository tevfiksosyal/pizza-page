import React from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { toast } from "react-toastify";
function PizzaInfo({ selectedPizzaData }) {
  if (!selectedPizzaData) {
    return <div>Yükleniyor...</div>;
  }
  const history = useHistory();
  const isOrderPage = history.location.pathname.startsWith("/order"); // 'order/' sayfasında olup olmadığını kontrol eder

  const handleAnasayfa = () => {
    toast.success("Anasayfa'ya yönlendiriliyorsunuz", {
      position: "top-right",
      autoClose: 2000,
    });

    setTimeout(() => {
      history.push("/");
    }, 2000);
  };

  const handleSiparis = () => {
    if (!isOrderPage) {
      toast.success("Sipariş Sayfasına Yönlendiriliyorsunuz", {
        position: "top-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        history.goBack();
      }, 2000);
    } else {
      toast.info("Zaten sipariş sayfasındasınız.", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };
  return (
    <div>
      <section className="flex flex-col items-center bg-mainBgColor gap-10 font-barlow ">
        <img src={selectedPizzaData.image} alt="" />
        <div className="flex lg:w-144 px-4">
          <nav>
            <button
              type="button"
              className="hover:text-red-600"
              data-cy="anasayfaRouter"
              onClick={handleAnasayfa}
            >
              Anasayfa
            </button>
            <span>-</span>
            <button
              data-cy="siparisOlusturRouter"
              onClick={handleSiparis}
              className={`text-red-600 ${
                isOrderPage ? " cursor-not-allowed" : ""
              }`}
              disabled={isOrderPage}
            >
              Sipariş Oluştur
            </button>
          </nav>
        </div>
        <article className="flex flex-col lg:w-144 mb-4 ">
          <div className="flex flex-col gap-4 px-4  ">
            <h1 className="font-semibold text-xl">{selectedPizzaData.isim}</h1>
            <div className="flex justify-between">
              <p className="font-bold text-xl">{selectedPizzaData.fiyat}₺</p>
              <div className="flex gap-8">
                <p>{selectedPizzaData.puan}</p>
                <p>{selectedPizzaData.puanVerenSayisi}</p>
              </div>
            </div>
            <p>{selectedPizzaData.pizzaAciklamasi}</p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default PizzaInfo;
