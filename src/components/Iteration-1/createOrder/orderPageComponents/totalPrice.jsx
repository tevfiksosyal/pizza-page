import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function TotalPrice({
  price,
  selectedMalzemeler,
  varsayilanMalzemeler,
  adet,
  setAdet,
  totalPrice,
  setTotalPrice,
  handleSubmit,
  boyut,
  musteriIsim,
  hamurKalinligi,
}) {
  const [malzemeParasi, setMalzemeParasi] = useState(0);

  useEffect(() => {
    const selectedCount = selectedMalzemeler.filter(
      (malzeme) => !varsayilanMalzemeler.includes(malzeme)
    ).length;
    setMalzemeParasi(selectedCount);
    const bill = price * adet + selectedCount * 5;
    setTotalPrice(bill);
  }, [adet, selectedMalzemeler, price, varsayilanMalzemeler]);

  const isButtonDisabled =
    !boyut ||
    selectedMalzemeler.length < 4 ||
    musteriIsim.length < 3 ||
    !hamurKalinligi;

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center mt-4 md:justify-center ">
        <div className="flex-1 flex items-center gap-2 ">
          <button
            type="button"
            onClick={() => (adet > 0 ? setAdet(adet - 1) : setAdet(adet))}
            disabled={adet <= 1}
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-600"
          >
            -
          </button>
          <span className="text-xl font-bold border border-gray-300 rounded-lg shadow-lg p-2 px-4">
            {adet}
          </span>
          <button
            type="button"
            onClick={() => setAdet(adet + 1)}
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-600"
          >
            +
          </button>
        </div>

        <div className="flex-1 flex flex-col mt-4 sm:mt-0 sm:ml-4">
          <div className="flex flex-col justify-between border border-gray-300 rounded-lg shadow-lg p-4">
            <div className="flex flex-col justify-center p-2">
              <p className="text-xl font-semibold mb-4">Sipariş Toplamı</p>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between w-full">
                  <p className="text-lg font-medium">Seçimler</p>
                  <p className="text-lg font-medium">{malzemeParasi * 5}₺</p>
                </div>
                <div className="text-red-700 flex justify-between w-full font-bold">
                  <p>Toplam</p>
                  <p>{totalPrice}₺</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4 sm:mt-0">
            <button
              data-cy="submitButton"
              type="submit"
              onClick={(e) => {
                if (!isButtonDisabled) {
                  handleSubmit(e);
                }
              }}
              disabled={isButtonDisabled}
              className="w-[100%] bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
            >
              Sipariş Ver
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalPrice;
