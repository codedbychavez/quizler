import Card from "react-bootstrap/Card";
import { StyledSmallSpacer } from "../molecules/Spacer";
import Instructions from "../organisms/Instructions";

const QuizTemplate = (props) => {
    const instructions = [
        "Read all instructions carefully.",
        "Submit your quiz when completed by clicking the submit button at the end of the quiz."
    ]

    return (
        <div>
            <StyledSmallSpacer>
                <Instructions instructions={instructions} quiz={props.name}/>
            </StyledSmallSpacer>

            <StyledSmallSpacer>
                <Card>
                    <Card.Header>
                        <Card.Title>
                            Math 101
                        </Card.Title>
                    </Card.Header>

                    <Card.Body>
                        Some Content
                    </Card.Body>
                </Card>
            </StyledSmallSpacer>
        </div>
    )
}

export default QuizTemplate;