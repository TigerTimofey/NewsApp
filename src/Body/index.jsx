import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Routes, Route } from "react-router-dom";
import News from "./News";
import SideBar from "./SideBar";
import Events from "./Events";

function Body() {
  const [info, setInfo] = useState(null);
  const props = {
    info,
    setInfo,
  };

  const scrollToTop2 = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/NewsApp" element={<News {...props} />} />
        <Route path="/NewsApp/:keyword" element={<News {...props} />} />
        <Route path="/NewsApp/events" element={<Events {...props} />} />
        <Route
          path="/NewsApp/events/:keyword"
          element={<Events {...props} />}
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
