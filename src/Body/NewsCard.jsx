import { useState } from "react";
import Card from "react-bootstrap/Card";
import NewsModal from "./NewsModal";
function NewsCard({ news }) {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  return (
    <>
      <Card onClick={() => setShowModal(true)}>
        <Card.Img variant="top" src={news?.image} />
        <Card.Body>
          <Card.Title>
            <h6>{news.title}</h6>
          </Card.Title>
          <Card.Text>
            {news.authors?.map((author, idx) => (
              <span key={idx}>
                <b>Author: </b> {author.name} <br />
              </span>
            ))}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{news.dateTime}</small>
        </Card.Footer>
      </Card>

      {showModal && <NewsModal news={news} handleClose={handleClose} />}
    </>
  );
}
export default NewsCard;
