import moment from "moment";

const apiUrl = "http://eventregistry.org/api/v1";

const apiKey = process.env.REACT_APP_API_KEY;

export const defaultData = {
  keyword: "Tallinn",
  resultType: "articles",
  articlesSortBy: "date",
  dataType: ["news"],
  lang: ["rus"],
  dateStart: moment().subtract(1, "months").format("YYYY-MM-DD"),
  dateEnd: moment().format("YYYY-MM-DD"),
  articlesCount: 8,
};
export const clearData = {
  keyword: "",
  resultType: "",
  articlesSortBy: "",
  dataType: [""],
  lang: [""],
  dateStart: "",
  dateEnd: "",
};

export async function getArticles(params = {}) {
  const urlParams = new URLSearchParams({
    ...defaultData,
    ...params,
    apiKey,
  });
  const response = await fetch(`${apiUrl}/article/getArticles?${urlParams}`);
  if (!response.ok) {
    throw new Error("Error in response. Status code: " + response.status);
  }
  const data = await response.json();
  if (data.error) {
    throw new Error("API error. Status code: " + data.error);
  }
  return data;
}
