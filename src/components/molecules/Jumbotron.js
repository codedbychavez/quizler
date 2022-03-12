import styled from "styled-components";

const Jumbotron = () => {
    return (
        <>
            <Wrapper>
                <FlexWrapper>
                    <CustomList>
                        <li> <h1>Quiz on the Go?</h1> </li>
                        <li> <h3>Download the Quizler app <CustomA href="#">here</CustomA></h3> </li>
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

const FlexWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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