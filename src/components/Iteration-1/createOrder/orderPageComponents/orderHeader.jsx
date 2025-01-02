import React from "react";
import { toast } from "react-toastify";
import logo from "../../../../../../Assets/Iteration-1-assets/logo.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function OrderHeader() {
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
      <section className="bg-red-700 flex flex-col items-center pt-8">
        <div className="flex flex-col items-center mx-4">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex gap-4 py-4 justify-start text-gray-300">
            <button
              className="hover:text-white"
              data-cy="anasayfaRouter"
              onClick={handleAnasayfa}
            >
              Anasayfa
            </button>
            <span>-</span>
            <button
              data-cy="siparisOlusturRouter"
              onClick={handleSiparis}
              className={`text-white ${
                isOrderPage ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isOrderPage}
            >
              Sipariş Oluştur
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderHeader;
