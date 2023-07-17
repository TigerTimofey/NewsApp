import { useState } from "react";
import News from "./News";
import SideBar from "./SideBar";
import Button from "react-bootstrap/Button";
function Body() {
  const [newsList, setNewsList] = useState(null);
  const [info, setInfo] = useState(null);
  const scrollToTop2 = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SideBar setNewsList={setNewsList} setInfo={setInfo} />
      <News
        newsList={newsList}
        setNewsList={setNewsList}
        info={info}
        setInfo={setInfo}
      />

      <div className="ScrollToTop">
        <Button variant="light" onClick={scrollToTop2}>
          <h4>🔝</h4>
        </Button>
      </div>
    </>
  );
}

export default Body;
