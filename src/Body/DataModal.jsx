import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import moment from "moment";

const TitleNews = ({ dateTimePub }) => (
  <>{moment(dateTimePub).format("DD MMMM YYYY")}</>
);
const TitleEvents = ({ eventDate, eventDateEnd, title }) => (
  <>
    {" "}
    <h2 className="text-wrap"> {title[Object.keys(title)[0]]}</h2>
    <br />
    {moment(eventDate).format("DD MMMM YYYY")} -{" "}
    {moment(eventDateEnd).format("DD MMMM YYYY")}
  </>
);
const BodyNews = ({ title, image, body, source, url }) => (
  <>
    {" "}
    <h4 className="text-center">{title}</h4>
    <div>
      <Image src={image} fluid className="mb-3 rounded" />
      <p className="border border-secondary p-3">{body}</p>

      <p className="text-center ">
        <a href={url} target="_blank" rel="noreferrer">
          {source.title}
        </a>
      </p>
    </div>
  </>
);

// We have free API and it's cut summary, so we can see all answer. In this case we cut info when he sees last dot.
function truncateText(text, delimiter) {
  const lastDotIndex = text.lastIndexOf(delimiter);
  return lastDotIndex !== -1 ? text.slice(0, lastDotIndex + 1) : text;
}
const BodyEvent = ({ summary, concepts }) => (
  <>
    <p className="border border-secondary p-3 ">
      {/* {summary[Object.keys(summary)[0]]} */}
      {truncateText(summary[Object.keys(summary)[0]], ".")}
    </p>
    <Container className="text-center">
      {" "}
      <a href={concepts[0].uri} target="_blank" rel="noreferrer">
        {concepts[0].uri}
      </a>
    </Container>
  </>
);

function DataModal({ handleClose, data }) {
  const ViewData = {
    Title: data.dateTimePub ? TitleNews : TitleEvents,
    Body: data.image ? BodyNews : BodyEvent,
  };
  return (
    <Modal show size="lg" centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Container className=" d-flex justify-content-center align-items-center">
          <Modal.Title id="contained-modal-title-vcenter">
            <Badge bg="secondary">
              <ViewData.Title {...data} />
            </Badge>
          </Modal.Title>
        </Container>
      </Modal.Header>
      <Container className="d-flex justify-content-center align-items-center  ">
        <Modal.Body>
          <ViewData.Body {...data} />
        </Modal.Body>
      </Container>
    </Modal>
  );
}

export default DataModal;
