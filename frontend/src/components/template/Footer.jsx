import { Col, Container, Row } from "react-bootstrap";
import { BRAND } from "../../constants";
import { Link } from "react-router-dom";

const Footer = () => {
   const currYear = new Date().getFullYear();

   return (
      <footer>
         <Row className="bg-light py-3 mx-0">
            <Container>
               <Col className="d-flex justify-content-around px-5 mx-5">
                  <Link to='/about' className="text-decoration-none text-dark">About</Link>
                  <Link to='/contact' className="text-decoration-none text-dark">Contact</Link>
                  <Link to='/privacy' className="text-decoration-none text-dark">Privacy</Link>
                  <Link to='/terms' className="text-decoration-none text-dark">T&C</Link>
               </Col>
            </Container>
         </Row>
         <Row className="bg-secondary py-3 mx-0">
            <Container>
               <Col className="text-center">
                  <p className="mb-0">{BRAND} &copy; {currYear} | All rights reserved</p> 
               </Col>
            </Container>
         </Row>
      </footer>
   )
}

export default Footer