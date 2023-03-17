const SERVER_URL = "dev.obtenmas.com";
const BASE_URL = `https://${SERVER_URL}/catom/api/challenge/`;

async function makeRequest(
  sufix = "/",
  method = "GET",
  payload = {},
  multipart = false
) {
  const contentType = "application/json";
  const general = {
    method,
    headers: {
      Accept: "*/*",
      "Cache-Control": "no-cache",
      Host: SERVER_URL,
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
      "Content-Type": contentType,
    },
  };

  if (method === "POST" || method === "PUT" || method === "DELETE") {
    general.body = JSON.stringify(payload);
  }
  console.log(general);
  return await fetch(`${BASE_URL}${sufix}`, general)
    .then((response) => {
      console.log(method, response.status, `${BASE_URL}${sufix}`);
      if (!response.ok) {
        return response.text();
      }
      return response.json();
    })
    .then((jsonresponse) => jsonresponse)
    .catch((err) => {
      console.log("error with status ", err);
    });
}

const API = {
  getBanksFromServer: async () => {
    return await makeRequest(`banks`, `GET`);
  },
};

export default API;
