import React, { useState, useEffect } from "react";
import { InputNumber, Space } from "antd";
import Date from "./Date/Date";
import "antd/dist/antd.css";
import { useIsMount } from "../Hooks/useIsMount";

const dataSample = {
  cardNumber: null,
  date: "",
  cvv: null,
  amount: null,
};

export default function Demo() {
  const [data, setData] = useState(dataSample);

  const [validCard, setValidCard] = useState(false);
  const [validCvv, setValidCvv] = useState(false);

  const isMount = useIsMount();

  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
  };

  const onChange = (e) => {
    setData({ ...data, date: e });
  };

  useEffect(() => {
    console.log(validCvv, validCard);
    if (!isMount) {
      if (
        data.cardNumber !== null &&
        data.cardNumber.toString().length === 16
      ) {
        setValidCard(false);
      } else {
        setValidCard(true);
      }
    }
  }, [data.cardNumber]);

  useEffect(() => {
    if (!isMount) {
      if (data.cvv !== null && data.cvv.toString().length === 3) {
        setValidCvv(false);
      } else {
        setValidCvv(true);
      }
    }
  }, [data.cvv]);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Space direction="vertical" size={35}>
        <Space direction="vertical" size={0}>
          <InputNumber
            style={{ width: "100%" }}
            controls={false}
            onChange={(e) => setData({ ...data, cardNumber: e })}
            maxLength={16}
          />
          {validCard && (
            <div
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Некорректно введены данные карты!
            </div>
          )}
        </Space>
        <Space direction="horizontal">
          <Date onChange={onChange} />
          <InputNumber
            style={{ width: "50%" }}
            controls={false}
            onChange={(e) => setData({ ...data, cvv: e })}
            maxLength={3}
          />
          {validCvv && (
            <div
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Некорректно введены данные CVV!
            </div>
          )}
        </Space>
        <InputNumber
          style={{ width: "50%" }}
          controls={false}
          onChange={(e) => setData({ ...data, amount: e })}
        />
        <button
          disabled={
            validCard || validCvv || data.date == "" || data.amount === null
          }
        >
          Оплатить!
        </button>
      </Space>
      {/* {validDate && <div>Некорректно введены данные даты!</div>} */}
    </form>
  );
}
