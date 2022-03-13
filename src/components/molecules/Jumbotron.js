import styled from "styled-components";
import { StyledCenterWithFlexBox } from "./Center";

const Jumbotron = () => {
    return (
        <>
            <StyledJumbotronWrapper>
                <StyledCenterWithFlexBox>
                    <StyledUnorderedList>
                        <li> <h1>Quiz on the Go?</h1> </li>
                        <li> <h3>Download the Quizler app <StyledAnchor href="#"><i className="bi bi-box-arrow-up-right"></i></StyledAnchor></h3> </li>
                    </StyledUnorderedList>
                </StyledCenterWithFlexBox>
            </StyledJumbotronWrapper>
        </>
    )
}

const StyledJumbotronWrapper = styled.div`
    height: 350px;
    width: 100%;
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
    color: whitesmoke;
`;

const StyledUnorderedList = styled.ul`
    list-style-type: none;
`;

const StyledAnchor = styled.a`
    color: wheat;
    :hover {
        color: white;
    }
`

export default Jumbotron;