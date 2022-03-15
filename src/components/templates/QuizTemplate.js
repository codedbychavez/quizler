import styled from "styled-components";

import Card from "react-bootstrap/Card";
import { StyledSmallSpacer } from "../molecules/Spacer";
import Instructions from "../organisms/Instructions";
import Form from "react-bootstrap/Form";
import { MathQuestions } from "../../data/math_questions";
import { Button } from "react-bootstrap";
import { GradeQuiz } from "../../functions/grade_quiz";
import { useState } from "react";
import ScoreToast from "../organisms/ScoreToast";

const QuizTemplate = (props) => {

  // Controls showing score toast
  const [showScoreToast, setShowScoreToast] = useState(false)
  const toggleShowScoreToast = () => setShowScoreToast(!showScoreToast)
  const [score, setScore] = useState("")

  const answers = [];

  const instructions = [
    "Read all instructions carefully.",
    "Submit your quiz when completed by clicking the submit button at the end of the quiz.",
  ];

  const mathQuestions = MathQuestions;

  const handleAnswer = (questionId, option) => {
    let answer = {
      questionId: questionId,
      option: option,
    };
    if (!answers.some((answer) => answer.questionId === questionId)) {
        answers.push(answer);
    } else {
      let answerIndex = answers.indexOf(answer);
        answers.splice(answerIndex, 1, answer);
    }
  };

  const handleSubmit = (event) => {
    
    const score = GradeQuiz(mathQuestions.length, answers);
    setScore(score);
    setShowScoreToast(true)
    event.preventDefault();
    event.target.reset();
  };

  return (
    <div>
      <StyledSmallSpacer>
        <Instructions instructions={instructions} quiz={props.name} />
      </StyledSmallSpacer>

      <StyledSmallSpacer>
        <Card>
          <Card.Header>
            <Card.Title>{props.name}</Card.Title>
          </Card.Header>

          <StylesCardBody>
            <ScoreToast score={score} showScoreToast={showScoreToast} toggleShowScoreToast={toggleShowScoreToast} />
            <Form onSubmit={handleSubmit}>
              {mathQuestions.map((question) => {
                return (
                  <StyledSmallSpacer key={question.id}>
                    <Card>
                      <Card.Body>
                        <p>{question.question}</p>

                        <div>
                          {question.options.map((option, optionIndex) => {
                            return (
                              <Form.Check
                                key={optionIndex}
                                inline
                                label={option.label}
                                name={`${question.id}-group`}
                                type="radio"
                                id={`${question}-${option}-${optionIndex}`}
                                onClick={() =>
                                  handleAnswer(question.id, option)
                                }
                              />
                            );
                          })}
                        </div>
                      </Card.Body>
                    </Card>
                  </StyledSmallSpacer>
                );
              })}

              <Button type="submit">Submit</Button>
            </Form>
          </StylesCardBody>
        </Card>
      </StyledSmallSpacer>
    </div>
  );
};

const StylesCardBody = styled(Card.Body)`
  text-align: left;
`;

export default QuizTemplate;
