import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const Instructions = () => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>General Instructions</Card.Title>
            </Card.Header>
            <StyledCardBody>
                <ol>
                    <li>Select a quiz by clicking the available quizzes button (top left).</li>
                    <li>Read all instructions from each quiz.</li>
                    <li>Submit your quiz when completed by clicking the submit button at the end of each quiz.</li>
                </ol>
            </StyledCardBody>
        </Card>
    )
}

export default Instructions;


const StyledCardBody = styled(Card.Body)`
    text-align: left;
`;