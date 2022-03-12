import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const Instructions = (props) => {
    const instructions = props.instructions
    const listItems = instructions.map((instruction, index) =>
    <li key={index}>{instruction}</li>
    );

    return (
        <Card>
            <Card.Header>
                <Card.Title>Instructions for {props.quiz}</Card.Title>
            </Card.Header>
            <StyledCardBody>
                <ol>
                    {instructions ? listItems : "No Instructions."}
                </ol>
            </StyledCardBody>
        </Card>
    )
}

export default Instructions;


const StyledCardBody = styled(Card.Body)`
    text-align: left;
`;