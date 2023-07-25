import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import { getArticles } from "../Services/apiService";

function SearchForm({
  handleClose,
  sumbitData,
  setSumbitData,
  handleClear,
  setErrorMessage,
  setDataList,
  setInfo,
}) {
  const [articlesSortDisabled, setArticlesSortDisabled] = useState(false);

  const resultType = [
    "articles",
    "uriWgtList",
    "langAggr",
    "timeAggr",
    "sourceAggr",
    "sourceExAggr",
    "authorAggr",
    "keywordAggr",
    "locAggr",
    "conceptAggr",
    "conceptGraph",
    "categoryAggr",
    "dateMentionAggr",
    "sentimentAggr",
    "recentActivityArticles",
  ];
  const articlesSortBy = [
    "date",
    "rel",
    "sourceImportance",
    "sourceAlexaGlobalRank",
    "sourceAlexaCountryRank",
    "socialScore",
    "facebookShares",
  ];
  const languages = [
    {
      label: "English",
      value: "eng",
    },
    {
      label: "Estonian",
      value: "est",
    },
    { label: "Russian", value: "rus" },
    { label: "Georgian", value: "kat" },
  ];
  const dataType = ["news", "pr", "blog"];
  const handleSumbit = (event) => {
    event.preventDefault();
    console.log("event", event.target.keyword.value);

    const data = {
      keyword: event.target.keyword.value,
      resultType: event.target.resultType.value,
      articlesSortBy: event.target.articlesSortBy.value,
      dataType: event.target.dataType.value,
      lang: event.target.lang.value,
      dateStart: event.target.dateStart.value,
      dateEnd: event.target.dateEnd.value,
    };
    setSumbitData(data);
    console.log("data", data);

    getArticles(data)
      .then(({ articles, info }) => {
        articles && setDataList(articles.results);
        info ? setInfo(info) : setInfo(null);
        handleClose();
      })
      .catch((error) => {
        setErrorMessage(error.toString());
      });
  };
  const handleResultTypeChange = (event) => {
    if (event.target.value !== "articles") {
      setArticlesSortDisabled(true);
    } else {
      setArticlesSortDisabled(false);
    }
  };

  // const handleClearSearch = (event) => {
  //   event.preventDefault();

  //   const form = event.target.closest("form");
  //   const inputs = form.getElementsByTagName("input");
  //   const selects = form.getElementsByTagName("select");
  //   const checkboxes = form.querySelectorAll('input[type="checkbox"]');

  //   for (let i = 0; i < inputs.length; i++) {
  //     const input = inputs[i];
  //     if (input.type !== "submit") {
  //       input.value = "";
  //     }
  //   }

  //   for (let i = 0; i < selects.length; i++) {
  //     const select = selects[i];
  //     select.selectedIndex = 0;
  //   }

  //   for (let i = 0; i < checkboxes.length; i++) {
  //     const checkbox = checkboxes[i];
  //     checkbox.checked = false;
  //   }
  // };

  return (
    <>
      <Form onSubmit={handleSumbit}>
        <Form.Group className="mb-3">
          <Form.Label>Keywords</Form.Label>
          <Form.Control
            type="text"
            name="keyword"
            defaultValue={sumbitData?.keyword}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Result type</Form.Label>
          <Form.Select
            className="mb-3"
            name="resultType"
            onChange={handleResultTypeChange}
            defaultValue={sumbitData?.resultType}
          >
            {resultType.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </Form.Select>

          <Form.Label>Arcticles sort by</Form.Label>
          <Form.Select
            className="mb-3"
            name="articlesSortBy"
            disabled={articlesSortDisabled}
            defaultValue={sumbitData?.articlesSortBy}
          >
            {articlesSortBy.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </Form.Select>

          <Form.Group className="mb-3">
            <Form.Label>Date start</Form.Label>
            <Form.Control
              type="date"
              name="dateStart"
              defaultValue={sumbitData?.dateStart}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date end</Form.Label>
            <Form.Control
              type="date"
              name="dateEnd"
              defaultValue={sumbitData?.dateEnd}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Data type</Form.Label>
            {dataType.map((type) => (
              <Form.Check
                value={type}
                type="radio"
                defaultChecked={sumbitData?.dataType.includes(type)}
                label={type}
                key={type}
                name="dataType"
              ></Form.Check>
            ))}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Language</Form.Label>
            <Form.Select name="lang" required defaultValue={sumbitData?.lang}>
              {languages.map(({ value, label }) => (
                <option value={value} key={value}>
                  {label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Container className="d-flex justify-content-end align-items-center">
            <Button
              // onClick={handleClearSearch}
              onClick={handleClear}
              type="submit"
              variant="danger"
              className="w-300 me-1"
            >
              Clear
            </Button>
            <Button type="submit" variant="success" className="w-100 ms-1">
              Search
            </Button>
          </Container>
        </Form.Group>
      </Form>
    </>
  );
}
export default SearchForm;
