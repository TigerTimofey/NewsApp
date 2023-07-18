import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

import { getArticles } from "../Services/apiService";
import ErrorModal from "../ErrorModal";
import NewsCard from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";

function News({ newsList, setNewsList, info, setInfo }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getArticles({ articlesPage: page })
      .then(({ articles, info }) => {
        articles && setNewsList([...(newsList || []), ...articles.results]);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => {
        setErrorMessage(error.toString());
      });
  }, [setNewsList, setInfo, page]);

  return (
    <>
      {newsList?.length && (
        <InfiniteScroll
          dataLength={newsList?.length}
          next={() => setPage(page + 1)}
          hasMore
          loader={
            <div className="d-flex justify-content-center align-items-center wh-100">
              <Spinner animation="grow" size="sm" />
            </div>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Row xs={1} md={2} lg={4} className="g-4">
            {newsList?.map((news, idx) => (
              <Col key={idx}>
                <NewsCard news={news} />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      )}

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
