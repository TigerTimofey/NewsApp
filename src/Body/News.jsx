import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NewsCard from "./NewsCard";
import { getArticles } from "../Services/apiService";
import ErrorModal from "../ErrorModal";
import Alert from "react-bootstrap/Alert";

function News({ newsList, setNewsList, info, setInfo }) {
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getArticles()
      .then(({ articles, info }) => {
        articles && setNewsList(articles.results);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => {
        setErrorMessage(error.toString());
      });
  }, [setNewsList, setInfo]);

  return (
    <>
      <Row xs={1} md={2} lg={4} className="g-4">
        {newsList?.map((news, idx) => (
          <Col key={idx}>
            <NewsCard news={news} />
          </Col>
        ))}
      </Row>
      {info && (
        <Alert className="my-3" variant="info">
          {info}
        </Alert>
      )}
      {errorMessage && <ErrorModal errorMessage={errorMessage} />}
    </>
  );
}

export default News;
