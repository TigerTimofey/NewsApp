import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DataList from "./DataList";
import { setErrorMessage } from "../Services/stateService";
import { getArticles } from "../Services/apiService";

function News({ info, setInfo }) {
  const dispatch = useDispatch();
  const { keyword } = useParams();

  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(1);

  const searchData = useSelector((state) => state.searchData);

  useEffect(() => {
    getArticles({
      ...searchData,
      articlesPage: page,
      ...(keyword ? { keyword } : {}),
    })
      .then(({ articles, info }) => {
        articles &&
          setDataList((prevDataList) => [...prevDataList, ...articles.results]);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => {
        dispatch(setErrorMessage(error.toString()));
      });
  }, [setDataList, setInfo, page, keyword, searchData, dispatch]);

  return (
    <DataList page={page} setPage={setPage} info={info} dataList={dataList} />
  );
}

export default News;
