import styled from "styled-components";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav"
import { StyledSmallText } from "../molecules/Text";

const AppNav = (props) => {

return ( 

<Navbar bg="dark" expand={false}>
  <Container fluid>
    <AvailableQuizzesButton aria-controls="offcanvasNavbar">Available Quizzes <i className="bi bi-arrow-right-circle"></i></AvailableQuizzesButton>
    <StyledRouterLink to="/">Dashboard <i class="bi bi-speedometer2"></i></StyledRouterLink>
    <StyledNavbarBrand href="#">Quizler <StyledSmallText>V{props.version}</StyledSmallText></StyledNavbarBrand>

    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Available Quizzes</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
            <StyledNavbarSectionTitle>Beginner</StyledNavbarSectionTitle>
            <hr/>
            <StyledRouterLinkSideNav to="/quiz/math">Simple Mathematics <i class="bi bi-box-arrow-up-right"></i></StyledRouterLinkSideNav>

        </Nav>
   
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

)

}


const AvailableQuizzesButton = styled(Navbar.Toggle)`
  color: whitesmoke !important;
  border-color: #0dcaf0 !important; 
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  :hover {
    background-color: #0dcaf0;
    color: whitesmoke;
  }
`

const StyledRouterLink = styled(Link)`
  text-decoration: none;
  color: whitesmoke;
  font-size: large;
  :hover {
    color: #0dcaf0;
  }
`

const StyledRouterLinkSideNav = styled(Link)`
  text-decoration: none;
  color: dodgerblue;
  text-decoration: underline;
  line-height: 8px;
  :hover {
    color: #0dcaf0;
  }
`

const StyledNavbarBrand = styled(Navbar.Brand)`
  color: whitesmoke !important;
`

const StyledNavbarSectionTitle = styled.h5`
  color: darkgray;
  font-size: 20px;
`

export default AppNav;
