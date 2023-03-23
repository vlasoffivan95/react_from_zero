import queryString from "query-string";

export function getUsers(options) {
  const defaultOptions = {
    page: 1,
    results: 10,
    seed: "foobar",
    nat: "ua",
    inc: ["gender", "name", "location", "email", "login"],
  };

  const finalOptions = { ...defaultOptions, ...options };

  const query = queryString.stringify(finalOptions, { arrayFormat: "comma" });
  console.log(query);

  const promise = fetch(`https://randomuser.me/api/?${query}`)
    .then((res) => res.json())
    .then((data) => data.results);

  return promise;
}
