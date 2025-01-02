function PizzaInfo({
  isim,
  fiyat,
  pizzaAciklamasi,
  puanOrtalaması,
  puanVerenSayisi,
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-2xl">{isim}</p>
      <div className="flex justify-between ">
        <p className="font-bold text-2xl">{fiyat}₺</p>
        <div className="flex gap-2">
          <p className="text-base">{puanOrtalaması}</p>
          <p className="text-base">{puanVerenSayisi}</p>
        </div>
      </div>
      <div>{pizzaAciklamasi}</div>
    </div>
  );
}

export default PizzaInfo;
