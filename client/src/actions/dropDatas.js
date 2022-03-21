import axios from "axios";

export const dropDatas = async (card_number, date, cvv, amount) => {
  try {
    const response = await axios.post("http://localhost:5000/api/payments", {
      card_number,
      date,
      cvv,
      amount,
    });
    console.log(response.data);
    alert(JSON.stringify(response.data));
  } catch (e) {
    console.log(e, new Error("Ошибка соединения с сервером!"));
  }
};
