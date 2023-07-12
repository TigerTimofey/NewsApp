import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";

function NewsModal({ handleClose, news }) {
  return (
    <Modal
      show
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="w-100 ms-1 text-center"
        >
          <h1>
            <Badge bg="secondary"> {news.source.title}</Badge>
          </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className=" text-center">
          <h4 className="text-truncate">{news.title}</h4>
          <br />
          <h6>{news.dateTimePub}</h6>
          <Image src={news?.image} fluid />
          <br />
          <br />
          <div>
            <a href={news.url} target="blank" rel="norefferer">
              {news.source.uri}
            </a>
          </div>

          <br />
        </Container>
        <p className="border border-secondary p-3 mb-2">{news.body}</p>
      </Modal.Body>
    </Modal>
  );
}
export default NewsModal;
