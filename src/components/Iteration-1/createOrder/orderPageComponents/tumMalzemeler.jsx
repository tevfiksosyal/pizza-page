import { useState, useEffect } from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

const errorMessage = {
  ondanFazlaHatasi: "En Fazla 10 Malzeme Seçebilirsiniz !",
  dorttenAzHatasi: "En Az 4 Malzeme Olmalı",
};

function TumMalzemeler({
  tumMalzemeler,
  varsayilanMalzemeler,
  selectedMalzemeler,
  setSelectedMalzemeler,
}) {
  const [error, setError] = useState("");

  useEffect(() => {
    setSelectedMalzemeler(varsayilanMalzemeler);
  }, [varsayilanMalzemeler]);

  useEffect(() => {
    if (selectedMalzemeler.length >= 10) {
      setError(errorMessage.ondanFazlaHatasi);
    } else if (selectedMalzemeler.length < 4) {
      setError(errorMessage.dorttenAzHatasi);
    } else {
      setError("");
    }
  }, [selectedMalzemeler]);

  const handleCheckboxChange = (event, eklenenMalzeme) => {
    if (event.target.checked) {
      if (selectedMalzemeler.length < 10) {
        setSelectedMalzemeler([...selectedMalzemeler, eklenenMalzeme]);
      }
    } else {
      setSelectedMalzemeler(
        selectedMalzemeler.filter((item) => item !== eklenenMalzeme)
      );
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <p className="font-bold text-xl">Ek Malzemeler</p>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      </div>
      {error && (
        <p className="hata-mesaji" style={{ color: "red" }}>
          {error}
        </p>
      )}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {tumMalzemeler.map((malzeme, index) => (
          <FormGroup check key={index}>
            <Input
              id={`malzeme-${index}`}
              type="checkbox"
              checked={selectedMalzemeler.includes(malzeme)}
              onChange={(e) => handleCheckboxChange(e, malzeme)}
              invalid={!!error}
            />
            <Label htmlFor={`malzeme-${index}`} check>
              {malzeme}
            </Label>
          </FormGroup>
        ))}
      </div>
    </div>
  );
}

export default TumMalzemeler;
