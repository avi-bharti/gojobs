import Header from "./components/template/Header";
import { Container } from 'react-bootstrap';
import Footer from "./components/template/Footer";
import {Outlet} from 'react-router-dom';

const App = () => {
   return ( 
      <>
         <Header />
         <Container className="main">
            <Outlet />
         </Container>
         <Footer />
      </>
    );
}
 
export default App;