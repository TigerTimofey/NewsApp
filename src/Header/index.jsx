import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="secondary" className="sticky-top" data-bs-theme="dark">
        <Container>
          <Nav className=" MenuFontRegular">
            <Link className=" mx-auto nav-link logoFontStyle" to="/NewsApp">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                className="bi bi-paperclip"
                viewBox="-4 1 17 16"
              >
                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
              </svg>{" "}
              Paperclip
            </Link>

            <Link className="nav-link  mt-1" to="/NewsApp">
              News
            </Link>
            <Link className="nav-link  mt-1" to="/NewsApp/events">
              Wiki Events
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
