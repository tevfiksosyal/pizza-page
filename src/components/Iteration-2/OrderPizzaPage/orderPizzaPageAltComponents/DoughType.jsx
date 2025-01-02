import React, { useEffect } from "react";
import Select from "react-select";

const errorMessage = "Lütfen hamur tipi seçin!";

function DoughType({
  hamurOptions = [],
  hamurType,
  setHamurType,
  error,
  setError,
}) {
  const options = hamurOptions.map((option) => ({
    value: option,
    label: option,
  }));

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      setHamurType(selectedOption.value);
    }
  };

  useEffect(() => {
    if (!hamurType) {
      setError((prev) => ({
        ...prev,
        hamurTypeHata: errorMessage,
      }));
    } else {
      setError((prev) => ({
        ...prev,
        hamurTypeHata: "",
      }));
    }
  }, [hamurType, setError]);

  return (
    <div className="flex flex-col items-center gap-6">
      <section className="flex justify-center mt-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-lg">
            Hamur Seç <span className="text-red-600">*</span>
          </h1>
          <Select
            value={options.find((option) => option.value === hamurType)}
            onChange={handleChange}
            options={options}
            placeholder="-Hamur Kalınlığı Seç-"
            className="react-select-container"
            classNamePrefix="react-select"
            styles={{
              control: (base) => ({
                ...base,
                borderColor: "#ccc",
                "&:hover": { borderColor: "#ff6347" },
                borderRadius: "8px",
              }),
              menu: (base) => ({
                ...base,
                zIndex: 100,
              }),
            }}
          />
        </div>
      </section>
      {error.hamurTypeHata && (
        <p className="text-red-600">{error.hamurTypeHata}</p>
      )}
    </div>
  );
}

export default DoughType;
