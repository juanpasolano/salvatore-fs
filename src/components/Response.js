import React, { useEffect, useState } from "react";
import queryString from "query-string";
import checkSVG from "../assets/check.svg";
import crossSvg from "../assets/cross.svg";
import { Link } from "react-router-dom";
import { getPreference } from "../lib/endpoints";
import currencyFormatter from "currency-formatter";

const Success = ({ response, collectionId }) => {
  return (
    <div className="text-center">
      <img src={checkSVG} className="success-icon" alt="check" />
      <h1
        style={{
          lineHeight: "2.4rem"
        }}
      >
        {process.env.REACT_APP_NAME}
        <br />
        Gracias por tu compra
      </h1>
      <p>Muy pronto estaremos en contacto</p>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th colSpan="2">Resumen de transaccion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No. operación:</td>
            <td>{collectionId}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>
              {currencyFormatter.format(response.amount, {
                precision: 0,
                symbol: "$",
                spaceBetweenAmountAndSymbol: false
              })}
            </td>
          </tr>
          <tr>
            <td>Nombre:</td>
            <td>{response.name}</td>
          </tr>
          <tr>
            <td>Teléfono:</td>
            <td>{response.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Error = ({ response }) => {
  return (
    <div className="text-center">
      <img src={crossSvg} className="error-icon" alt="check" />
      <h1
        style={{
          lineHeight: "2.4rem"
        }}
      >
        {process.env.REACT_APP_NAME}
        <br />
        Algo salio mal
      </h1>
      <p>el pago no fue exitoso</p>
      <Link to={`/?${queryString.stringify(response)}`}>Volver a intentar</Link>
    </div>
  );
};

const Response = () => {
  const data = queryString.parse(window.location.search);
  const [response, setResponse] = useState();
  useEffect(() => {
    const makeRequest = async () => {
      const res = await getPreference(data.preference_id);
      setResponse({
        amount: res.items[0].unit_price,
        name: res.payer.name,
        phone: res.payer.phone.number
      });
    };
    makeRequest();
  }, [data.preference_id]);
  if (!response) return null;
  return (
    <div className="container">
      <div className="container__box">
        {data.collection_status === "approved" && (
          <Success response={response} collectionId={data.collection_id} />
        )}
        {data.collection_status === "rejected" && <Error response={response} />}
      </div>
    </div>
  );
};
export default Response;
