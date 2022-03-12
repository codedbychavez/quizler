import { Container } from "react-bootstrap";
import StyledJumbotron from "../components/molecules/Jumbotron";
import SpacerSmall from "../components/molecules/Spacer";
import Instructions from "../components/organisms/Instructions";
import AppNav from "../components/organisms/Nav";

const Dashboard = () => {

    return (
        <div>
            <AppNav version="1.0"/>
                <StyledJumbotron>
                    
                </StyledJumbotron>
            <Container>
                <SpacerSmall>
                    <Instructions/>
                </SpacerSmall>
            </Container>
        </div>
    )
}

export default Dashboard;