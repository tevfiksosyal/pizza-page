import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input, Label } from "reactstrap";

function SupplyAndBill({
  adet,
  setAdet,
  price,
  selectedMalzemeler,
  varsayilanMalzemeler,
  totalPrice,
  setTotalPrice,
  handleSubmit,
  consumerName,
  selectedSize,
  hamurType,
  eklenenMalzemeSayisi,
  setEklenenMalzemeSayisi,
}) {
  const [fastDelivery, setFastDelivery] = useState(false);
  useEffect(() => {
    const selectedCount = selectedMalzemeler.filter(
      (item) => !varsayilanMalzemeler.includes(item)
    ).length;
    setEklenenMalzemeSayisi(selectedCount);
    let bill = (adet * price + selectedCount * 5).toFixed(2);

    if (selectedSize === "M") {
      bill = (parseFloat(bill) + 20).toFixed(2);
    } else if (selectedSize === "L") {
      bill = (parseFloat(bill) + 40).toFixed(2);
    }
    if (fastDelivery) {
      bill = (parseFloat(bill) + 50).toFixed(2);
    }
    setTotalPrice(bill);
  }, [
    adet,
    varsayilanMalzemeler,
    selectedMalzemeler,
    price,
    fastDelivery,
    selectedSize,
  ]);

  const isButtonDisabled =
    !selectedSize ||
    !hamurType ||
    consumerName.length < 3 ||
    selectedMalzemeler.length < 4;

  return (
    <div>
      <section className="flex flex-col items-center gap-10 font-barlow mt-8 p-4">
        <div className="flex flex-col sm:flex-row items-start gap-4 mt-4 md:justify-center lg:w-144 ">
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex items-center gap-3">
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
            <div className="font-barlow font-semibold text-lg ">
              <Input
                id="fast-delivery"
                type="checkbox"
                checked={fastDelivery}
                onChange={() => setFastDelivery(!fastDelivery)}
              />
              <Label htmlFor="fast-delivery" className="px-2">
                Hızlı Teslimat: <span>50 TL</span>
              </Label>
            </div>
          </div>
          <div className="flex-1 flex flex-col sm:mt-0 sm:ml-4">
            <div className="flex flex-col justify-between border border-gray-300 rounded-lg shadow-lg p-4">
              <div className="flex flex-col justify-center p-2">
                <p className="text-xl font-semibold mb-4">Sipariş Toplamı</p>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between w-full">
                    <p className="text-lg font-medium">Seçimler</p>
                    <p className="text-lg font-medium">
                      {(eklenenMalzemeSayisi * 5).toFixed(2)}₺
                    </p>
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
                className="w-[100%] bg-yellow-400 cursor-pointer text-black py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
              >
                Sipariş Ver
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SupplyAndBill;
