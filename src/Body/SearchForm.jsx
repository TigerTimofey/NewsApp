import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchForm({ handleClose }) {
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
      dataType: [...event.target.dataType]
        .filter((e) => e.checked)
        .map((d) => d.value),
      lang: [...event.target.lang]
        .filter((e) => e.selected)
        .map((d) => d.value),
      dateStart: event.target.dateStart.value,
      dateEnd: event.target.dateEnd.value,
    };
    console.log("data", data);
    handleClose();
  };
  const handleResultTypeChange = (event) => {
    if (event.target.value !== "articles") {
      setArticlesSortDisabled(true);
    } else {
      setArticlesSortDisabled(false);
    }
  };

  return (
    <Form onSubmit={handleSumbit}>
      <Form.Group className="mb-3">
        <Form.Label>Keywords</Form.Label>
        <Form.Control type="text" name="keyword" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Result type</Form.Label>
        <Form.Select
          className="mb-3"
          name="resultType"
          onChange={handleResultTypeChange}
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
        >
          {articlesSortBy.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </Form.Select>

        <Form.Group className="mb-3">
          <Form.Label>Date start</Form.Label>
          <Form.Control type="date" name="dateStart" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date end</Form.Label>
          <Form.Control type="date" name="dateEnd" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Data type</Form.Label>
          {dataType.map((type) => (
            <Form.Check
              value={type}
              type="checkbox"
              label={type}
              key={type}
              name="dataType"
            ></Form.Check>
          ))}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Language</Form.Label>
          <Form.Select name="lang" multiple>
            {languages.map(({ value, label }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="outline-danger">
          Close sidebar
        </Button>
      </Form.Group>
    </Form>
  );
}
export default SearchForm;
