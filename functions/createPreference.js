const mercadopago = require("mercadopago");
let config;
if (process.env.IS_SANDBOX) {
  config = {
    access_token: process.env.MERCADO_TEST_TOKEN,
    sandbox: true
  };
} else {
  config = {
    access_token: process.env.MERCADO_TOKEN,
    sandbox: true
  };
}

mercadopago.configure(config);

exports.handler = async (event, context) => {
  const backUrl = `${event.host || "localhost:8888"}/payment-response`;
  const amount = Number(event.queryStringParameters.amount);
  const name = event.queryStringParameters.name;
  const phone = event.queryStringParameters.phone;
  let preference = {
    items: [
      {
        title: "Pago Online Flexible",
        unit_price: amount,
        quantity: 1
      }
    ],
    payer: {
      name: name,
      phone: {
        number: Number(phone)
      }
    },
    additional_info: event.queryStringParameters.amount,
    back_urls: {
      success: backUrl,
      failure: backUrl,
      pending: backUrl
    }
  };
  try {
    const res = await mercadopago.preferences.create(preference);
    return {
      statusCode: 200,
      body: JSON.stringify(res.response)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString()
    };
  }
};
