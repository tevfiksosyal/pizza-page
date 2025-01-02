import React, { useEffect } from "react";

const errorMessage = "Lütfen bir boyut seçin!";

function PizzaSizes({
  pizzaSizes = [],
  selectedSize,
  setSelectedSize,
  error,
  setError,
}) {
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    if (!selectedSize) {
      setError((prev) => ({
        ...prev,
        sizeHata: errorMessage,
      }));
    } else {
      setError((prev) => ({
        ...prev,
        sizeHata: "",
      }));
    }
  }, [selectedSize, setError]);

  return (
    <div>
      <section className="flex justify-center gap-10 font-barlow mt-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-lg">
            Boyut Seç <span className="text-red-600">*</span>
          </h1>
          <p className="font-semibold text-center text-red-600">
            S=0₺ M=+20₺ L=+40₺
          </p>
          <div className="flex flex-col items-center md:flex-row gap-4">
            {Array.isArray(pizzaSizes) && pizzaSizes.length > 0 ? (
              pizzaSizes.map((item, index) => (
                <button
                  type="button"
                  key={index}
                  className={`flex items-center bg-mainBgColor text-black font-mono text-lg border-0 rounded-3xl py-2 px-3 cursor-pointer shadow-md relative ${
                    selectedSize === item ? "bg-selectedColor text-black" : ""
                  }`}
                  onClick={() => handleSizeSelect(item)}
                >
                  <span>{item}</span>
                </button>
              ))
            ) : (
              <p className="text-red-600">Boyutlar yükleniyor...</p>
            )}
          </div>
          {error.sizeHata && <p className="text-red-600">{error.sizeHata}</p>}
        </div>
      </section>
    </div>
  );
}

export default PizzaSizes;
