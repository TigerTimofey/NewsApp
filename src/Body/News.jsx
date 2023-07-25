import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArticles } from "../Services/apiService";
import ErrorModal from "../ErrorModal";
import DataList from "./DataList";

function News({ dataList, info, setInfo, setDataList }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const { keyword } = useParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getArticles({
      articlesPage: page,
      ...(keyword ? { keyword } : {}),
    })
      .then(({ articles, info }) => {
        articles && setDataList([...(dataList || []), ...articles.results]);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => {
        setErrorMessage(error.toString());
      });
  }, [setDataList, setInfo, page, keyword]);

  return (
    <>
      <DataList page={page} setPage={setPage} info={info} dataList={dataList} />
      {/* 
      {/* {info && (
        <Alert className="my-3" variant="info">
          {info}
        </Alert> */}{" "}
      {errorMessage && <ErrorModal errorMessage={errorMessage} />}
    </>
  );
}

export default News;
