import { Container, Nav, Navbar } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {FaUser, FaSignInAlt} from 'react-icons/fa';
import { BRAND } from "../../constants";

const Header = () => {
   return (  
      <header>
         <Navbar bg="dark" variant="dark" expand='md' collapseOnSelect>
            <Container>
               <LinkContainer to='/'>
                  <Navbar.Brand>{BRAND}</Navbar.Brand>
               </LinkContainer>
               <Navbar.Toggle aria-controls="gojobs-nav" />
               <Navbar.Collapse id='gojobs-nav'>
                  <Nav className="ms-auto">
                     <LinkContainer to='/login'>
                        <Nav.Link><FaSignInAlt /> Login</Nav.Link>
                     </LinkContainer>
                     <LinkContainer to='/register'>
                        <Nav.Link><FaUser /> Register</Nav.Link>
                     </LinkContainer>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </header>
   );
}
 
export default Header;