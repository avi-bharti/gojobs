import { Col, Row } from 'react-bootstrap';
import jobs from '../data/jobs.js';
import Job from '../components/Job.jsx';

const HomeScreen = () => {
   return (  
      <>
         <h1>Latest Jobs</h1>

         <Row>
            {jobs.map((job) => (
               <Col sm={12} key={job._id}>
                  <Job job={job} />
               </Col>
            ))}
         </Row>
      </>
   );
}
 
export default HomeScreen;