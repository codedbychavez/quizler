import styled from "styled-components";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav"
import SmallText from "../molecules/SmallText";
import { Button } from "react-bootstrap";

const AppNav = (props) => {

return ( 

<Navbar bg="light" expand={false}>
  <Container fluid>
    <AvailableQuizzesButton aria-controls="offcanvasNavbar">Available Quizzes <i className="bi bi-arrow-right-circle"></i></AvailableQuizzesButton>
    <CustomLink to="/">Dashboard <i class="bi bi-speedometer2"></i></CustomLink>
    <Navbar.Brand href="#">Quizler <SmallText>V{props.version}</SmallText></Navbar.Brand>

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
          
            <CustomLink to="/quiz/math">Math</CustomLink>
         
          <Nav.Link href="#action2" disabled>Link</Nav.Link>
          
        </Nav>
   
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

)

}


const AvailableQuizzesButton = styled(Navbar.Toggle)`
  color: #0dcaf0;
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

const CustomLink = styled(Link)`
  text-decoration: none;
`

export default AppNav;
