import { useEffect, useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";

const errorMessage = "Pizza Boyutunu Seçmek Zorundasınız!";

function Boyutlar({ boyutSecenekleri, boyut, setBoyut }) {
  const [error, setError] = useState("");

  useEffect(() => {
    if (!boyut) {
      setError(errorMessage);
    } else {
      setError("");
    }
  }, [boyut]);

  const handleBoyutChange = (event) => {
    const { checked, value } = event.target;

    if (checked) {
      setBoyut(value);
    }
  };

  return (
    <div>
      <label className="font-bold pb-4">
        Boyut Seç <span className="text-red-600">*</span>
      </label>
      {error && (
        <p className="text-red-600" data-cy="errorMessage">
          {error}
        </p>
      )}
      {boyutSecenekleri.map((boyutlar, index) => (
        <FormGroup check key={index}>
          <Input
            data-cy="boyutlar"
            name="boyutSecimi"
            type="radio"
            id={`boyut-${index}`}
            value={boyutlar}
            onChange={handleBoyutChange}
            checked={boyut === boyutlar}
          />

          <Label htmlFor={`boyut-${index}`}>{boyutlar}</Label>
        </FormGroup>
      ))}

    </div>
  );
}

export default Boyutlar;
