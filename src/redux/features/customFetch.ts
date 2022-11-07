import axios from "axios";

const baseUrl = "https://api.test/";

const fetchDataQuery = async (endpoint: string, params?: any, token?: any) => {
  const searchParams = Object.entries(params || {})
    .map((pair: any) => pair.map(encodeURIComponent).join("="))
    .join("&");

  const url = `${baseUrl}${endpoint}?${searchParams}`;
  let object = {
    method: "GET",
    headers: {
      "access-token": token,
      "Cache-Control": "no-cache",
    },
  };

  let res = await fetch(url, object);
  let json = await res.json();
  return json;
};

export { fetchDataQuery };
