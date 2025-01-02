import React, { useEffect, useState } from "react";
import Header from "../Header";
import PizzaInfo from "./orderPizzaPageAltComponents/PizzaInfo";
import axios from "axios";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import PizzaSizes from "./orderPizzaPageAltComponents/PizzaSizes";
import DoughType from "./orderPizzaPageAltComponents/DoughType";
import AdditionalIngredients from "./orderPizzaPageAltComponents/AdditionalIngredients";
import NameAndOrderNote from "./orderPizzaPageAltComponents/NameAndOrderNote";
import { Form } from "reactstrap";
import SupplyAndBill from "./orderPizzaPageAltComponents/SupplyAndBill";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import pizzas from "../../../pizzaInfo";
const errorMessages = {
  consumerNameHata: "İsminiz 3 harften kısa olamaz!",
  sizeHata: "Lütfen bir boyut seçin!",
  hamurTypeHata: "Lütfen hamur kalınlığını seçiniz!",
};

function OrderMain() {
  const { pizzaId } = useParams();
  const history = useHistory();
  const [error, setError] = useState({});
  const [consumerName, setConsumerName] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [selectedPizzaData, setSelectedPizzaData] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [hamurType, setHamurType] = useState("");
  const [selectedMalzemeler, setSelectedMalzemeler] = useState([]);
  const [adet, setAdet] = useState(1);
  const [eklenenMalzemeSayisi, setEklenenMalzemeSayisi] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  /* useEffect(() => {
    const fetchPizzaData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/pizzas/${pizzaId}`
        );
        setSelectedPizzaData(response.data);
      } catch (error) {
        console.error("Yüklenirken hata oluştu: ", error);
      }
    };
    fetchPizzaData();
  }, [pizzaId]);*/
  useEffect(() => {
    const pizzaData = pizzas.find((pizza) => pizza.id === pizzaId);
    setSelectedPizzaData(pizzaData || pizzas[0]);
  }, [pizzaId]);

  const validateForm = () => {
    const newError = {};

    if (!consumerName || consumerName.length < 3) {
      newError.consumerNameHata = errorMessages.consumerNameHata;
    }

    if (!selectedSize) {
      newError.sizeHata = errorMessages.sizeHata;
    }

    if (!hamurType) {
      newError.hamurTypeHata = errorMessages.hamurTypeHata;
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      await siparisVerSubmit();
    }
  };

  /*  const siparisVerSubmit = async () => {
    const newOrder = {
      isim: selectedPizzaData.isim,
      hamurKalinligi: hamurType,
      boyut: selectedSize,
      malzemeler: selectedMalzemeler,
      musteriIsim: consumerName,
      siparisNotu: orderNote,
      fiyat: totalPrice,
      adet: adet,
      eklenenMalzemeSayisi: eklenenMalzemeSayisi,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/orders",
        newOrder
      );
      toast.success("Sipariş detayları ekranına yönlendiriliyorsunuz!", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => {
        history.push("/order-summary", { orderForm: response.data });
      }, 3000);
    } catch (error) {
      console.error("Sipariş gönderim hatası:", error);
      toast.error("Sipariş gönderiminde bir hata oluştu.");
    }
  };
*/

  const siparisVerSubmit = () => {
    const newOrder = {
      isim: selectedPizzaData.isim,
      hamurKalinligi: hamurType,
      boyut: selectedSize,
      malzemeler: selectedMalzemeler,
      musteriIsim: consumerName,
      siparisNotu: orderNote,
      fiyat: totalPrice,
      adet: adet,
      eklenenMalzemeSayisi: eklenenMalzemeSayisi,
    };

    console.log("Sipariş Verildi:", newOrder);
    toast.success("Sipariş başarılı!", {
      position: "top-right",
      autoClose: 3000,
    });

    setTimeout(() => {
      history.push("/order-summary", { orderForm: newOrder });
    }, 3000);
  };

  if (!selectedPizzaData) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <Header />
      <Form onSubmit={handleSubmit}>
        <PizzaInfo selectedPizzaData={selectedPizzaData} />
        <div className="flex flex-wrap justify-center gap-4 p-4 lg:w-144 mx-auto">
          <div className="flex-1 min-w-200">
            <PizzaSizes
              pizzaSizes={selectedPizzaData.boyutSecenekleri}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              error={error}
              setError={setError}
            />
          </div>
          <div className="flex-1 min-w-200">
            <DoughType
              hamurOptions={selectedPizzaData.hamurSecenekleri}
              hamurType={hamurType}
              setHamurType={setHamurType}
              error={error}
              setError={setError}
            />
          </div>
        </div>
        <AdditionalIngredients
          selectedMalzemeler={selectedMalzemeler}
          setSelectedMalzemeler={setSelectedMalzemeler}
          tumMalzemeler={selectedPizzaData.tumMalzemeler}
          varsayilanMalzemeler={selectedPizzaData.varsayilanMalzemeler}
        />
        <NameAndOrderNote
          consumerName={consumerName}
          setConsumerName={setConsumerName}
          orderNote={orderNote}
          setOrderNote={setOrderNote}
          error={error}
          setError={setError}
        />
        <SupplyAndBill
          adet={adet}
          setAdet={setAdet}
          consumerName={consumerName}
          selectedSize={selectedSize}
          hamurType={hamurType}
          varsayilanMalzemeler={selectedPizzaData.varsayilanMalzemeler}
          price={selectedPizzaData.fiyat}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          selectedMalzemeler={selectedMalzemeler}
          handleSubmit={handleSubmit}
          eklenenMalzemeSayisi={eklenenMalzemeSayisi}
          setEklenenMalzemeSayisi={setEklenenMalzemeSayisi}
        />
      </Form>
      <ToastContainer />
    </div>
  );
}

export default OrderMain;

/*

 <AdditionalIngredients
          selectedMalzemeler={selectedMalzemeler}
          setSelectedMalzemeler={setSelectedMalzemeler}
          tumMalzemeler={selectedPizzaData.tumMalzemeler}
          varsayilanMalzemeler={selectedPizzaData.varsayilanMalzemeler}
        />

*/
