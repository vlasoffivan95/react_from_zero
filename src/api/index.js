import queryString from "query-string";
import API_CONSTANTS from "../configs";

export async function getUsers(options) {
  const defaultOptions = {
    page: API_CONSTANTS.PAGE,
    results: API_CONSTANTS.RESULTS,
    seed: API_CONSTANTS.SEED,
    nat: API_CONSTANTS.NATIONALITY,
    inc: API_CONSTANTS.INCLUDES,
  };

  const finalOptions = { ...defaultOptions, ...options };

  const query = queryString.stringify(finalOptions, { arrayFormat: "comma" });
  console.log(query);

  const response = await fetch(`${API_CONSTANTS.BASE_URL}?${query}`);
  const data = await response.json();

  return data.results;
}

export function getOtherUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
}
