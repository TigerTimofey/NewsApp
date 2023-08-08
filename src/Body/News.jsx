import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArticles } from "../Services/apiService";
import DataList from "./DataList";
import { setErrorMessage } from "../Services/stateService";
import { useDispatch, useSelector } from "react-redux";

function News({ info, setInfo }) {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.searchData);

  const [dataList, setDataList] = useState([]);
  const { keyword } = useParams();
  const [page, setPage] = useState(1);

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
