import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";
import Container from "react-bootstrap/Container";

function SideBar() {
  const [show, setShow] = useState(false);
  const [sumbitData, setSumbitData] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center">
        <Button variant="dark" className="my-4" onClick={handleShow}>
          Search
        </Button>
      </Container>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search form</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SearchForm
            handleClose={handleClose}
            sumbitData={sumbitData}
            setSumbitData={setSumbitData}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
