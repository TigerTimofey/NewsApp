import { useState } from "react";
import Card from "react-bootstrap/Card";
import DataModal from "./DataModal";
import moment from "moment";

function DataCard({ data }) {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const title = data.title;
  const viewData = {
    image: data.image,
    title: typeof title === "string" ? title : title[Object.keys(title)[0]],
    text: data.authors
      ? data.authors?.map((author, idx) => (
          <span key={idx}>
            <b>Author: </b> {author.name} <br />
          </span>
        ))
      : data.summary[Object.keys(data.summary)[0]],
    footer: moment(data.dateTimePub || data.eventDate).format("DD MMMM YYYY"),
  };

  return (
    <>
      <Card onClick={() => setShowModal(true)} className="NewsCard">
        <Card.Img variant="top" src={viewData?.image} />

        <Card.Body>
          <Card.Title>
            <h6 className="LoraFontArticles">{viewData.title}</h6>
          </Card.Title>
          <Card.Text>{viewData.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{viewData.footer}</small>
        </Card.Footer>
      </Card>

      {showModal && <DataModal data={data} handleClose={handleClose} />}
    </>
  );
}
export default DataCard;
