export const getValidCityName = (query) => {
  if (query.indexOf("-") > -1)
    return query
      .split("-")
      .map((string) => string[0].toUpperCase() + string.slice(1).toLowerCase())
      .join("-");
  if (query.indexOf(" ") > -1)
    return query
      .split(" ")
      .map((string) => string[0].toUpperCase() + string.slice(1).toLowerCase())
      .join(" ");
  return query[0].toUpperCase() + query.slice(1).toLowerCase();
};
