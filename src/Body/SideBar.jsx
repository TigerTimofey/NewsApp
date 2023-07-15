import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";
import Container from "react-bootstrap/Container";
import { clearData, defaultData } from "../Services/apiService";

function SideBar({ setNewsList }) {
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
          <Offcanvas.Title>Search form</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SearchForm
            setNewsList={setNewsList}
            handleClose={handleClose}
            sumbitData={sumbitData}
            setSumbitData={setSumbitData}
            handleClear={handleClear}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
