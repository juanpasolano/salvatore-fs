import React, { useState, useEffect } from "react";
import queryString from "query-string";
import currencyFormatter from "currency-formatter";
import { createPreference } from "../lib/endpoints";

const isAmountInvalid = amount => {
  if (!amount) {
    return "Ingresa un valor";
  } else if (amount < 15000) {
    return "Ingresa un valor mayor a $15.000";
  }
  return false;
};

function App() {
  const parsed = queryString.parse(window.location.search);
  const [amount, setAmount] = useState(parsed.amount || "");
  const [name, setName] = useState(parsed.name || "");
  const [phone, setPhone] = useState(parsed.phone || "");
  const [invalid, setInvalid] = useState(isAmountInvalid(amount));

  const onSubmitPrice = async e => {
    e.preventDefault();
    const res = await createPreference({ amount, name, phone });
    console.log(res);
    window.location.href = res.init_point;
  };

  useEffect(() => {
    setInvalid(isAmountInvalid(amount));
  }, [amount]);

  return (
    <div className="container">
      <div className="container__box">
        <h1 className="text-center">{process.env.REACT_APP_NAME}</h1>
        <form onSubmit={onSubmitPrice}>
          <div className="form-control">
            <label htmlFor="amount">
              Ingresa el valor que quieres pagar (min: $15.000)
            </label>
            <input
              id="amount"
              type="number"
              name="amount"
              placeholder="Ejemplo: 25000"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              required
            />
            {invalid && <span className="form-control__error">{invalid}</span>}
          </div>

          <div className="form-control">
            <label htmlFor="name">Tu nombre</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Pepita Perez"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="phone">Tu teléfono</label>
            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="3151234567"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="text-center">
            <input
              type="submit"
              disabled={invalid}
              value={`Pagar ${currencyFormatter.format(amount, {
                // code: "COP",
                precision: 0,
                symbol: "$",
                spaceBetweenAmountAndSymbol: false
              })}`}
              className="btn"
            />
          </div>
        </form>
        <form id="theform" action="/procesar-pago" method="POST"></form>
      </div>
    </div>
  );
}

export default App;
