import Alert from "react-bootstrap/Alert";

function ErrorModal({ handleClose, errorMessage }) {
  return (
    <Alert
      className="LoraFontArticles my-4"
      variant="danger"
      onClose={() => handleClose}
      dismissible
    >
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <br />
      <p>{errorMessage}</p>
    </Alert>
  );
}

export default ErrorModal;
