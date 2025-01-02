import React, { useEffect, useState } from "react";
import Select from "react-select";

const errorMessage = "Hamur Seçimi Yapmak Zorunludur!";

function HamurKalinligi({
  hamurSecenekleri,
  hamurKalinligi,
  setHamurKalinligi,
}) {
  const [error, setError] = useState("");

  useEffect(() => {
    if (!hamurKalinligi && hamurSecenekleri.length > 0) {
      setError(errorMessage);
    } else {
      setError("");
    }
  }, [hamurSecenekleri, hamurKalinligi]);

  const handleSelectChange = (selectedOption) => {
    setHamurKalinligi(selectedOption.value);
    console.log("hamur kalınlığı: ", selectedOption.value);
  };

  const options = hamurSecenekleri.map((hamur) => ({
    value: hamur,
    label: hamur,
  }));

  return (
    <div className="flex flex-col items-center">
      <label
        htmlFor="options"
        className="font-bold pb-4"
        data-cy="errorMessage"
      >
        Hamur Seç <span className="text-red-600">*</span>
      </label>

      <Select
        id="options"
        name="hamurKalinligiTest"
        value={options.find((option) => option.value === hamurKalinligi)}
        onChange={handleSelectChange}
        options={options}
        placeholder="Seçiniz..."
        className="w-full"
        menuPortalTarget={document.body}
      />

      {error && (
        <p className="text-red-600" aria-live="assertive">
          {error}
        </p>
      )}
    </div>

  );
}

export default HamurKalinligi;
