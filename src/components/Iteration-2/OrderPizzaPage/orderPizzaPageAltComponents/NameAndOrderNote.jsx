import React, { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

function NameAndOrderNote({
  consumerName,
  setConsumerName,
  error,
  setError,
  orderNote,
  setOrderNote,
}) {
  const consumerNameHandler = (event) => {
    const value = event.target.value;
    setConsumerName(value);
  };
  const consumerNoteHandler = (event) => {
    const value = event.target.value;
    setOrderNote(value);
  };

  useEffect(() => {
    if (!consumerName || consumerName.length < 3) {
      setError((prev) => ({
        ...prev,
        consumerNameHata: "İsminiz 3 harften kısa olamaz !",
      }));
    } else {
      setError((prev) => ({ ...prev, consumerNameHata: "" }));
    }
  }, [consumerName, setError]);

  return (
    <div>
      <section className="flex flex-col items-center gap-10 font-barlow mt-8">
        <div className="flex flex-col lg:w-144 ">
          <FormGroup>
            <Label htmlFor="musteriIsim" className="font-semibold text-xl">
              İsminiz{" "}
            </Label>
            <Input
              className="bg-mainBgColor"
              type="name"
              id="musteriIsim"
              value={consumerName}
              onChange={consumerNameHandler}
              placeholder="İsminizi Giriniz"
              invalid={!!error.consumerNameHata}
            />
          </FormGroup>
          {error.consumerNameHata && (
            <p className="text-red-600">{error.consumerNameHata}</p>
          )}
          <FormGroup>
            <Label htmlFor="orderNote" className="font-semibold text-xl">
              Sipariş Notu{" "}
            </Label>
            <Input
              className="bg-mainBgColor"
              type="textarea"
              id="orderNote"
              value={orderNote}
              onChange={consumerNoteHandler}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </FormGroup>
        </div>
      </section>
    </div>
  );
}

export default NameAndOrderNote;
