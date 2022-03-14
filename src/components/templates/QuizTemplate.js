import styled from "styled-components";

import Card from "react-bootstrap/Card";
import { StyledSmallSpacer } from "../molecules/Spacer";
import Instructions from "../organisms/Instructions";
import Form from "react-bootstrap/Form"
import { MathQuestions } from "../../data/math_questions";
import { Button } from "react-bootstrap";

const QuizTemplate = (props) => {
    const instructions = [
        "Read all instructions carefully.",
        "Submit your quiz when completed by clicking the submit button at the end of the quiz."
    ]

    const mathQuestions = MathQuestions;


    return (
        <div>
            <StyledSmallSpacer>
                <Instructions instructions={instructions} quiz={props.name}/>
            </StyledSmallSpacer>

            <StyledSmallSpacer>
                <Card>
                    <Card.Header>
                        <Card.Title>
                            {props.name}
                        </Card.Title>
                    </Card.Header>

                    <StylesCardBody>
                       
                        {
                        mathQuestions.map((question, questionIndex) => {
                            return (
                                <StyledSmallSpacer key={questionIndex}>
                                <Card>
                                    <Card.Body>
                                        <p>{question.question}</p>

                                        <div>

                                            {
                                                question.options.map((option, optionIndex) => {
                                                    return (
                                                        <Form.Check
                                                                key={optionIndex}
                                                                inline
                                                                label={option.label}
                                                                name={`${questionIndex}-group`}
                                                                type="radio"
                                                                id={`${question}-${option}-${optionIndex}`}
                                                            />
                                                    )
                                                })
                                            }

                                        </div>
                            
        
                                    </Card.Body>
                                </Card>
                                </StyledSmallSpacer>
                            )
                        })
                        
                        
                        }

                        {/* <Form>
                            What is the sum of 4 + 5 ?
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="1"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="2"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="3"
                                    type={type}
                                    id={`inline-${type}-3`}
                                />
                                </div>
                            ))}
                        </Form> */}

                        <Button>Submit</Button>
                    </StylesCardBody>
                </Card>
            </StyledSmallSpacer>
        </div>
    )
}

const StylesCardBody = styled(Card.Body)`
    text-align: left;
`

export default QuizTemplate;