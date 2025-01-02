import React, { useEffect, useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";

const errorMessage = {
  ondanFazlaHatasi: "En Fazla 10 Malzeme Seçebilirsiniz !",
  dorttenAzHatasi: "En Az 4 Malzeme Olmalı",
};

function AdditionalIngredients({
  tumMalzemeler,
  varsayilanMalzemeler,
  selectedMalzemeler,
  setSelectedMalzemeler,
}) {
  const [error, setError] = useState("");

  useEffect(() => {
    setSelectedMalzemeler(varsayilanMalzemeler);
  }, [varsayilanMalzemeler, setSelectedMalzemeler]);

  useEffect(() => {
    if (selectedMalzemeler.length >= 10) {
      setError(errorMessage.ondanFazlaHatasi);
    } else if (selectedMalzemeler.length < 4) {
      setError(errorMessage.dorttenAzHatasi);
    } else {
      setError("");
    }
  }, [selectedMalzemeler]);

  const handleCheckboxChange = (e, eklenen) => {
    const checked = e.target.checked;

    if (checked) {
      if (selectedMalzemeler.length < 10) {
        setSelectedMalzemeler([...selectedMalzemeler, eklenen]);
      }
    } else {
      setSelectedMalzemeler(
        selectedMalzemeler.filter((item) => item !== eklenen)
      );
    }
  };

  return (
    <div>
      <section className="flex flex-col items-center gap-10 font-barlow mt-4">
        <div className="flex flex-col lg:w-144">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-xl">Ek Malzemeler</h1>
            <p className="text-lg">En Fazla 10 malzeme seçebilirsiniz. 5₺ </p>
          </div>
          {error && (
            <p className="hata-mesaji" style={{ color: "red" }}>
              {error}
            </p>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {tumMalzemeler.map((item, index) => (
              <FormGroup key={index} className="flex gap-2 items-center">
                <Input
                  className="hidden"
                  id={`malzeme-${index}`}
                  type="checkbox"
                  checked={selectedMalzemeler.includes(item)}
                  onChange={(e) => handleCheckboxChange(e, item)}
                />
                <Label
                  htmlFor={`malzeme-${index}`}
                  className={`flex items-center cursor-pointer font-semibold relative pl-12`}
                >
                  <span
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 border-2 rounded-md transition-colors duration-300 ease-in-out ${
                      selectedMalzemeler.includes(item)
                        ? "bg-yellow-500 border-yellow-500"
                        : "bg-mainBgColor border-gray-300"
                    }`}
                  >
                    {selectedMalzemeler.includes(item) && (
                      <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-lg">
                        ✔
                      </span>
                    )}
                  </span>
                  {item}
                </Label>
              </FormGroup>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdditionalIngredients;
