import { Container } from "react-bootstrap";
import Jumbotron from "../components/molecules/Jumbotron";
import SpacerSmall from "../components/molecules/Spacer";
import Instructions from "../components/organisms/Instructions";
import AppNav from "../components/organisms/Nav";

const Dashboard = () => {

    const instructions = [
        "Select a quiz by clicking the available quizzes button (top left).",
        "Read all instructions from each quiz.",
        "Submit your quiz when completed by clicking the submit button at the end of each quiz."
    ]

    return (
        <div>
            <AppNav version="1.0"/> 
                <Jumbotron/>
            <Container>
                <SpacerSmall>
                    <Instructions instructions={instructions} quiz={"all quizzes"}/>
                </SpacerSmall>
            </Container>
        </div>
    )
}

export default Dashboard;