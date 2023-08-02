import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArticles } from "../Services/apiService";
import ErrorModal from "../ErrorModal";
import DataList from "./DataList";
import { setErrorMessage } from "../Services/stateService";
import { useDispatch, useSelector } from "react-redux";

function News({ info, setInfo }) {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.searchData);

  const [dataList, setDataList] = useState(null);
  // const [errorMessage, setErrorMessage] = useState(null);
  const { keyword } = useParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getArticles({
      ...searchData,
      articlesPage: page,
      ...(keyword ? { keyword } : {}),
    })
      .then(({ articles, info }) => {
        articles && setDataList(articles.results);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => {
        dispatch(setErrorMessage(error.toString()));
      });
  }, [setDataList, setInfo, page, keyword, searchData, setErrorMessage]);

  return (
    <>
      <DataList page={page} setPage={setPage} info={info} dataList={dataList} />
      {/* 
      {/* {info && (
        <Alert className="my-3" variant="info">
          {info}
        </Alert> */}{" "}
    </>
  );
}

export default News;
