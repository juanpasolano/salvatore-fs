import queryString from "query-string";

export const getPreference = async id => {
  try {
    const prefRes = await fetch(`/.netlify/functions/getPreference?id=${id}`);
    return prefRes.json();
  } catch (err) {}
};

export const createPreference = async params => {
  try {
    const prefRes = await fetch(
      `/.netlify/functions/createPreference?${queryString.stringify(params)}`
    );
    return prefRes.json();
  } catch (err) {}
};
