import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchForm({ handleClose }) {
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
  const dataType = ["news", "pr", "blog"];
  const handleSumbit = (event) => {
    event.preventDefault();
    console.log("event", event);
  };
  return (
    <Form onSubmit={handleSumbit}>
      <Form.Group className="mb-3">
        <Form.Label>Keywords</Form.Label>
        <Form.Control type="text" name="keyword" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Result type</Form.Label>

        <Form.Select className="mb-3" name="resultType">
          {resultType.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </Form.Select>
        <Form.Label>Arcticles sort by</Form.Label>

        <Form.Select className="mb-3" name="articlesSortBy">
          {articlesSortBy.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </Form.Select>
        <Form.Group className="mb-3">
          <Form.Label>Data type</Form.Label>
          {dataType.map((type) => (
            <Form.Check
              type="checkbox"
              label={type}
              key={type}
              name="dataType"
            ></Form.Check>
          ))}
        </Form.Group>
        <Button type="submit" variant="outline-danger">
          Close sidebar
        </Button>
      </Form.Group>
    </Form>
  );
}
export default SearchForm;
