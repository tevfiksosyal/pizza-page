import React from "react";

import lezzetus from "../../../../../public/assets/Iteration-2-assets/cta/kart-1.png";
import hackat from "../../../../../public/assets/Iteration-2-assets/cta/kart-2.png";
import npmkurye from "../../../../../public/assets/Iteration-2-assets/cta/kart-3.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Recommended() {
  const history = useHistory();
  return (
    <div>
      <div>
        <section className="mt-10">
          <div className="flex flex-col md:flex-row justify-center gap-4 p-4">
            <div className="relative">
              <img
                src={lezzetus}
                className="rounded-2xl w-full md:w-80 lg:w-128"
                alt="ozel-lezzetus"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start rounded-2xl p-4 gap-4">
                <h1 className="font-quattrocento text-white text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-snug lg:leading-tight">
                  Özel <br /> Lezzetus
                </h1>
                <p className="font-barlow text-white text-left text-xs md:text-sm lg:text-base font-bold break-words">
                  Position: Absolute Acı Burger
                </p>
                <button
                  className="font-barlow bg-white text-red-700 hover:text-blue-700 rounded-3xl p-2 px-4 mt-2"
                  onClick={() => history.push("/order/1")}
                >
                  Sipariş Ver
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <img
                  src={hackat}
                  className="rounded-2xl w-full md:w-80 lg:w-128"
                  alt="hackathlon-menu"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center rounded-2xl p-4 gap-4">
                  <h1 className="font-barlow text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
                    Hackathlon <br />
                    Burger Menü
                  </h1>
                  <button
                    className="font-barlow bg-white text-red-700 hover:text-blue-700 rounded-3xl p-2 px-4"
                    onClick={() => history.push("/order/3")}
                  >
                    Sipariş Ver
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={npmkurye}
                  className="rounded-2xl w-full md:w-80 lg:w-128"
                  alt="npm-gibi-kurye"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-25 rounded-2xl p-4 gap-4">
                  <h1 className="font-barlow text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight break-words">
                    <span className="text-red-700">Çoooook</span> hızlı <br />
                    npm gibi kurye
                  </h1>
                  <button
                    className="font-barlow bg-white text-red-700 hover:text-blue-700 rounded-3xl p-2 px-4 mt-2"
                    onClick={() => history.push("/order/2")}
                  >
                    Sipariş Ver
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-6">
            <p className="text-red-700 font-satisfy text-xl md:text-2xl lg:text-3xl">
              en çok paketlenen menüler
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Recommended;
