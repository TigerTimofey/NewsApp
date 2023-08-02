import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getEvents } from "../Services/apiService";

import ErrorModal from "../ErrorModal";
import DataList from "./DataList";
import { setErrorMessage } from "../Services/stateService";

import { useDispatch, useSelector } from "react-redux";

function Events({ info, setInfo }) {
  const searchData = useSelector((state) => state.searchData);
  const dispatch = useDispatch();

  const [dataList, setDataList] = useState(null);
  // const [errorMessage, setErrorMessage] = useState(null);
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
        events && setDataList(events.results);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => {
        dispatch(setErrorMessage(error.toString()));
      });
  }, [setDataList, setInfo, page, keyword, searchData, setErrorMessage]);

  return (
    <>
      <DataList page={page} setPage={setPage} info={info} dataList={dataList} />
      {/* {info && (
        <Alert className="my-3" variant="info">
          {info}
        </Alert> */}
    </>
  );
}

export default Events;
