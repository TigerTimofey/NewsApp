import { useState } from "react";
import Card from "react-bootstrap/Card";
import NewsModal from "./NewsModal";
import moment from "moment";

function NewsCard({ news }) {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  return (
    <>
      <Card onClick={() => setShowModal(true)} className="NewsCard">
        <Card.Img variant="top" src={news?.image} />

        <Card.Body>
          <Card.Title>
            <h6 className="LoraFontArticles">{news.title}</h6>
          </Card.Title>
          <Card.Text>
            {news.authors?.map((author, idx) => (
              <span key={idx}>
                <b>Author: </b> {author.name || news.source.uri} <br />
              </span>
            ))}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {moment(news.dateTimePub).format("DD.MM.YYYY HH:mm")}
          </small>
        </Card.Footer>
      </Card>

      {showModal && <NewsModal news={news} handleClose={handleClose} />}
    </>
  );
}
export default NewsCard;
