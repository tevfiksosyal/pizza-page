import { ToastContainer } from "react-toastify";
import OrderHeader from "../createOrder/orderPageComponents/orderHeader";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function SiparisDetaylari() {
  const location = useLocation();
  const { orderDetails } = location.state || {}; // State'i al
  return (
    <div className="bg-red-700 h-screen flex flex-col items-center justify-center gap-10">
      <OrderHeader />

      <div
        className="text-white text-center font-thin flex flex-col items-center justify-center "
        style={{ fontSize: "70px" }}
      >
        <h1>
          TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI !
        </h1>
        {orderDetails && (
          <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Sipariş Detayları
            </h2>
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-700">
                İsim:{" "}
                <span className="font-normal">{orderDetails.musteriIsim}</span>
              </h2>
              <h2 className="text-lg font-semibold text-gray-700">
                Boyut: <span className="font-normal">{orderDetails.boyut}</span>
              </h2>
              <h2 className="text-lg font-semibold text-gray-700">
                Hamur Kalınlığı:{" "}
                <span className="font-normal">
                  {orderDetails.hamurKalinligi}
                </span>
              </h2>
              <h2 className="text-lg font-semibold text-gray-700">
                Adet: <span className="font-normal">{orderDetails.adet}</span>
              </h2>
              <h2 className="text-lg font-semibold text-gray-700">
                Fiyat:{" "}
                <span className="font-normal">{orderDetails.fiyat} TL</span>
              </h2>
              <h2 className="text-lg font-semibold text-gray-700">
                Sipariş Notu:{" "}
                <span className="font-normal">{orderDetails.siparisNotu}</span>
              </h2>
            </div>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

export default SiparisDetaylari;
