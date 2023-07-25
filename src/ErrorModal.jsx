import Alert from "react-bootstrap/Alert";

function ErrorModal({ handleClose, errorMessage }) {
  return (
    <Alert
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="LoraFontArticles my-4 "
      variant="warning"
      onClose={() => handleClose}
      dismissible
    >
      <Alert.Heading>
        Oh snap! Something goes wrong!
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="my-4 mx-2"
            src="./source.gif"
            style={{ width: "200px" }}
            alt="sadPaperclip"
          />
        </div>
      </Alert.Heading>
      <br />
      <p>{errorMessage}</p>
    </Alert>
  );
}

export default ErrorModal;
