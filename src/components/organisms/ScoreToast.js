import Toast from "react-bootstrap/Toast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ScoreToast = (props) => {
    return (
      <Row>
        <Col md={6} className="mb-2">
          <Toast show={props.showScoreToast} onClose={props.toggleShowScoreToast}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Score Report</strong>
              <small>Just now</small>
            </Toast.Header>
            <Toast.Body>You scored: {props.score}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
  }
  
export default ScoreToast;