import styled from "styled-components";
import FlexWrapper from "./FlexWrapper";

const Jumbotron = () => {
    return (
        <>
            <Wrapper>
                <FlexWrapper>
                    <CustomList>
                        <li> <h1>Quiz on the Go?</h1> </li>
                        <li> <h3>Download the Quizler app <CustomA href="#"><i className="bi bi-box-arrow-up-right"></i></CustomA></h3> </li>
                    </CustomList>
                </FlexWrapper>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    height: 350px;
    width: 100%;
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
    color: whitesmoke;
`;

const CustomList = styled.ul`
    list-style-type: none;
`;

const CustomA = styled.a`
    color: wheat;
    :hover {
        color: white;
    }
`

export default Jumbotron;