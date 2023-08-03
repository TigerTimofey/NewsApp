import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getEvents } from "../Services/apiService";

import DataList from "./DataList";
import { setErrorMessage } from "../Services/stateService";

import { useDispatch, useSelector } from "react-redux";

function Events({ info, setInfo }) {
  const searchData = useSelector((state) => state.searchData);
  const dispatch = useDispatch();

  const [dataList, setDataList] = useState(null);
  const [page, setPage] = useState(1);
  const { keyword } = useParams();

  useEffect(() => {
    getEvents({
      ...searchData,
      resultType: "events",
      articlesPage: page,
      ...(keyword ? { keyword } : {}),
    })
      .then(({ events, info }) => {
        events &&
          setDataList(
            dataList ? [...dataList, ...events.results] : events.results
          );
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

export default Events;
