# Тестовое задание от компании DataSub

### Задание:
Создать приложение приема платежей (ReactJS + Ant Design или MUI или другое)
1. Приложение должно выводить форму с полями:
- Card Number
- Expiration Date
- CVV
- Amount
2. Валидация:
- Card Number - (только цифры, длина значения 16)
- Expiration Date (формат даты MM/YYYY)
- CVV (только цифры, длина значения 3)
- Amount (только цифры)
3. Кнопка "оплатить":
- должна быть активно если все поля введены корректно
- при нажатии идет запрос на сервер с данными формы в формате JSON
4. сервер: (expess/featherjs)
- должен сохранять данные в mongoDB
- при успешном сохранении должнен возвращать ответ ID записи и Amount в формате JSON
  пример запроса { "CardNumber": '0000000000000000', ExpDate: '04/2022', Cvv: '123', Amount: 100 }
  пример ответа { "RequestId": '61b248040041bc64b411a691', Amount: 100 } (edited)
---
### Технологии:
- React, axios, antd, node express, mongoDB
---
### Установка и запуск:
```
git clone https://github.com/mustkov/test-payments.git
cd test-payments
```
#### Клиент:
```
cd client
npm install
npm start
```
#### Сервер:
```
cd server
Создать .env PORT=ваш порт DB_URL=ссылка на DB
npm install
npm run dev

```
---
