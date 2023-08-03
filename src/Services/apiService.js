import moment from "moment";

const apiUrl = "https://eventregistry.org/api/v1";

const apiKey = process.env.REACT_APP_API_KEY;

const handleResponse = async (get) => {
  const response = await get();
  if (!response.ok) {
    throw new Error("Error in response. Status code: " + response.status);
  }
  const data = await response.json();
  if (data.error) {
    throw new Error("API error. Status code: " + data.error);
  }
  return data;
};

export const eventsData = {
  keyword: "Estonia",
  resultType: "events",
  eventsSortBy: "date",
  dataType: "news",
  lang: "est",
  dateStart: moment().subtract(1, "months").format("YYYY-MM-DD"),
  dateEnd: moment().format("YYYY-MM-DD"),
  articlesCount: 8,
};
export const defaultData = {
  keyword: "Estonia",
  resultType: "articles",
  articlesSortBy: "date",
  dataType: "news",
  lang: "rus",
  dateStart: moment().subtract(2, "months").format("YYYY-MM-DD"),
  dateEnd: moment().format("YYYY-MM-DD"),
  articlesCount: 8,
};
export async function getEvents(params = {}) {
  return handleResponse(() => {
    const urlParams = new URLSearchParams({
      ...eventsData,
      ...params,
      apiKey,
    });

    return fetch(`${apiUrl}/event/getEvents?${urlParams}`);
  });
}

export async function getArticles(params = {}) {
  return handleResponse(() => {
    const urlParams = new URLSearchParams({
      ...defaultData,
      ...params,
      apiKey,
    });
    return fetch(`${apiUrl}/article/getArticles?${urlParams}`);
  });
}
