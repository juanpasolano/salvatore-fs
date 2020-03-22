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
  const id = event.queryStringParameters.id;
  try {
    const res = await mercadopago.preferences.get(id);
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
