import { Container } from "react-bootstrap";

import SpacerSmall from "../components/molecules/Spacer";
import AppNav from "../components/organisms/Nav";
import QuizTemplate from "../components/templates/QuizTemplate";

const Quiz = () => {

    return (
        <div>
            <AppNav version="1.0"/>
               
            <Container>
                <SpacerSmall>
                    <QuizTemplate name={"Math Quiz"}/>
                </SpacerSmall>
            </Container>
        </div>
    )
}

export default Quiz;