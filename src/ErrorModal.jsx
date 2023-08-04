import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { setErrorMessage } from "./Services/stateService";
import { useSelector, useDispatch } from "react-redux";

function ErrorModal() {
  const errorMessage = useSelector((state) => state.errorMessage);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setErrorMessage(null));

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
        <h6>Loading...</h6>
        <Spinner animation="border" variant="secondary" className="ms-3" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </Alert.Heading>
      <br />
      <p>{errorMessage}</p>
    </Alert>
  );
}

export default ErrorModal;
