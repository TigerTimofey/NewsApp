import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getEvents } from "../Services/apiService";

import ErrorModal from "../ErrorModal";
import DataList from "./DataList";

function Events({ dataList, setDataList, info, setInfo }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [page, setPage] = useState(1);
  const { keyword } = useParams();

  useEffect(() => {
    getEvents({
      resultType: "events",
      articlesPage: page,
      ...(keyword ? { keyword } : {}),
    })
      .then(({ events, info }) => {
        events && setDataList([...(dataList || []), ...events.results]);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => {
        setErrorMessage(error.toString());
      });
  }, [setDataList, setInfo, page, keyword]);

  return (
    <>
      <DataList page={page} setPage={setPage} info={info} dataList={dataList} />
      {/* {info && (
        <Alert className="my-3" variant="info">
          {info}
        </Alert> */}
      {errorMessage && <ErrorModal errorMessage={errorMessage} />}
    </>
  );
}

export default Events;
