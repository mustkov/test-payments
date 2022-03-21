import React, { useState, useEffect } from "react";
import { InputNumber, Space } from "antd";
import Date from "../Date/Date";
import "antd/dist/antd.css";
import { useIsMount } from "../Hooks/useIsMount";
import { dropDatas } from "../../actions/dropDatas";

const dataSample = {
  cardNumber: null,
  date: "",
  cvv: null,
  amount: null,
};

export default function Card() {
  const [data, setData] = useState(dataSample);

  const [validCard, setValidCard] = useState(false);
  const [validCvv, setValidCvv] = useState(false);

  const isMount = useIsMount();

  const handleSubmit = (e) => {
    dropDatas(data.cardNumber, data.date, data.cvv, data.amount);
    e.preventDefault();
  };

  const onChange = (e) => {
    setData({ ...data, date: e });
  };

  useEffect(() => {
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
      className="card"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Space direction="vertical" size={30}>
        <Space direction="vertical" size={0}>
          <InputNumber
            style={{ width: "300px" }}
            controls={false}
            onChange={(e) => setData({ ...data, cardNumber: e })}
            maxLength={16}
            placeholder="Card Number"
          />
          {validCard && (
            <div className="alert">Некорректно введены данные карты!</div>
          )}
        </Space>
        <Space
          direction="horizontal"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Date onChange={onChange} />
          <div>
            <InputNumber
              style={{ width: "50%" }}
              controls={false}
              onChange={(e) => setData({ ...data, cvv: e })}
              maxLength={3}
              placeholder="CVV"
            />
          </div>
        </Space>
        {validCvv && (
          <div className="alert">Некорректно введены данные CVV!</div>
        )}
        <InputNumber
          style={{ width: "50%" }}
          controls={false}
          onChange={(e) => setData({ ...data, amount: e })}
          placeholder="Amount"
        />
        <button
          disabled={
            validCard || validCvv || data.date === "" || data.amount === null
          }
        >
          Оплатить
        </button>
      </Space>
    </form>
  );
}
