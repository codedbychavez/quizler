import styled from "styled-components";
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
    {/* <Navbar.Toggle aria-controls="offcanvasNavbar" /> */}
    <CustomToggle aria-controls="offcanvasNavbar">
      <AvailableQuizzesButton variant="outline-info">Available Quizzes <i class="bi bi-arrow-right-circle"></i></AvailableQuizzesButton>
    </CustomToggle>
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
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          
        </Nav>
   
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

)

}

const CustomToggle = styled(Navbar.Toggle)`
  border: 0px;
`

const AvailableQuizzesButton = styled(Button)`
  :hover {
    color: whitesmoke;
  }
`

export default AppNav;
