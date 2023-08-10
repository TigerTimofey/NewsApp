import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

import InfiniteScroll from "react-infinite-scroll-component";

import DataCard from "./DataCard";
function DataList({ info, dataList, setPage, page }) {
  return (
    <>
      {dataList?.length && (
        <InfiniteScroll
          dataLength={dataList?.length}
          next={() => setPage(page + 1)}
          hasMore
          scrollThreshold={1}
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
            {dataList?.map((data, idx) => (
              <Col key={idx}>{<DataCard data={data} />}</Col>
            ))}
          </Row>
        </InfiniteScroll>
      )}
      {info && (
        <Alert className="my-3" variant="info">
          {info}
        </Alert>
      )}
    </>
  );
}

export default DataList;
