import React from "react";
import Header from "../Header";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function OrderSummary() {
  const location = useLocation();
  const { orderForm } = location.state || {};
  console.log(orderForm);
  return (
    <div>
      <Header />
      <div className="bg-mainColor flex flex-col items-center justify-center w-full h-full p-2">
        <div className="flex flex-col text-center border-b    w-full max-w-2xl">
          <p className="font-satisfy text-2xl text-yellow-600 ">
            lezzetin yolda
          </p>
          <h1 className="text-4xl lg:text-6xl font-barlow font-light text-white p-4">
            SİPARİŞ ALINDI
          </h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col p-4 font-barlow items-center gap-6 w-full max-w-md">
            <h1 className="text-white font-semibold text-2xl">
              {orderForm.isim}
            </h1>
          </div>
          <div className="flex flex-col items-center  p-4  w-full">
            <div className="flex flex-col items-start w-52  gap-2">
              <p className=" text-gray-400">
                Boyut:{" "}
                <span className="text-white font-semibold">
                  {orderForm.boyut}
                </span>
              </p>
              <p className=" text-gray-400">
                Hamur:{" "}
                <span className="text-white font-semibold">
                  {orderForm.hamurKalinligi}
                </span>
              </p>
              <p className=" text-gray-400">
                Ek Malzemeler:{" "}
                <span className="text-white font-semibold ">
                  {orderForm.malzemeler.join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div className="flex border p-8 items-center text-white rounded-xl font-semibold w-full">
            <div className="flex flex-col  gap-3 w-full">
              <p>Sipariş Toplamı</p>
              <div className=" flex flex-col gap-2">
                <p className="flex  justify-between">
                  Seçimler{" "}
                  <span>
                    {(orderForm.eklenenMalzemeSayisi * 5).toFixed(2)}₺
                  </span>
                </p>
                <p className="flex justify-between">
                  Toplam <span>{orderForm.fiyat}₺</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
