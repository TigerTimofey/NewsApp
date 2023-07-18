import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";
import Container from "react-bootstrap/Container";
import { clearData, defaultData } from "../Services/apiService";

function SideBar({ setNewsList, setInfo }) {
  const [show, setShow] = useState(false);
  const [sumbitData, setSumbitData] = useState(defaultData);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClear = (event) => {
    event.preventDefault();
    setSumbitData(clearData);
  };

  return (
    <>
      <Container className="sticky-top d-flex justify-content-end align-items-center">
        <Button
          variant="secondary"
          className="mb-3 mt-2 w-10"
          onClick={handleShow}
        >
          Search
        </Button>
      </Container>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="black"
              className="bi bi-paperclip"
              viewBox="0 0 16 16"
            >
              <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
            </svg>
            Search form
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SearchForm
            setNewsList={setNewsList}
            handleClose={handleClose}
            sumbitData={sumbitData}
            setSumbitData={setSumbitData}
            handleClear={handleClear}
            setInfo={setInfo}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
