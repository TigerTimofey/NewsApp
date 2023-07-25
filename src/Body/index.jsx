import { useState } from "react";
import Button from "react-bootstrap/Button";

import { Routes, Route } from "react-router-dom";

import News from "./News";
import SideBar from "./SideBar";
import Events from "./Events";

function Body() {
  const [dataList, setDataList] = useState(null);

  const [info, setInfo] = useState(null);
  const scrollToTop2 = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SideBar setDataList={setDataList} setInfo={setInfo} />
      <Routes>
        <Route
          path="/"
          element={
            <News
              dataList={dataList}
              setDataList={setDataList}
              info={info}
              setInfo={setInfo}
            />
          }
        />

        <Route
          path="/:keyword"
          element={
            <News
              dataList={dataList}
              setDataList={setDataList}
              info={info}
              setInfo={setInfo}
            />
          }
        />

        <Route
          path="/events"
          element={
            <Events
              dataList={dataList}
              setDataList={setDataList}
              info={info}
              setInfo={setInfo}
            />
          }
        />
        <Route
          path="/events/:keyword"
          element={
            <Events
              dataList={dataList}
              setDataList={setDataList}
              info={info}
              setInfo={setInfo}
            />
          }
        />
      </Routes>

      <div className="ScrollToTop">
        <Button variant="light" onClick={scrollToTop2}>
          <h4>🔝</h4>
        </Button>
      </div>
    </>
  );
}

export default Body;
