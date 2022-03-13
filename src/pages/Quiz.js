import { Container } from "react-bootstrap";

import { StyledSmallSpacer } from "../components/molecules/Spacer";
import AppNav from "../components/organisms/Nav";
import QuizTemplate from "../components/templates/QuizTemplate";

const Quiz = () => {

    return (
        <div>
            <AppNav version="1.0"/>
               
            <Container>
                <StyledSmallSpacer>
                    <QuizTemplate name={"Math Quiz"}/>
                </StyledSmallSpacer>
            </Container>
        </div>
    )
}

export default Quiz;