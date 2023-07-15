import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import moment from "moment";

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
          <h2>
            <Badge bg="secondary"> {news.source.title}</Badge>
          </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className=" text-center LoraFontArticles">
          <h4 className="text-truncate">{news.title}</h4>
          <br />
          <h6> {moment(news.dateTimePub).format("DD MMMM YYYY")}</h6>
          <Image src={news?.image} fluid />
          <br />
          <br />
        </Container>
        <p className="border border-secondary p-3 mb-2 LoraFontArticles">
          {news.body}
        </p>
        <Container className=" text-center LoraFontArticles">
          <Button variant="outline-light">
            <a href={news.url} target="blank" rel="norefferer">
              {news.source.uri}
            </a>
          </Button>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
export default NewsModal;
