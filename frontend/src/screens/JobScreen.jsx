import { useParams,Link } from "react-router-dom";
import jobs from '../data/jobs.js';
import { Row, Col,Card,ListGroup,Button } from "react-bootstrap";

const JobScreen = () => {
   const {id} = useParams();
   const job = jobs.find(x =>  x._id === Number(id));
   console.log(job)
   return (  
      <>
<Link className="btn btn-light my-3" to='/'>
         Go Back
      </Link>

      <Row>
            <Col md={5}>
               <h2>{job.title}</h2>
               <p>{job.description}</p>
            </Col>
            <Col md={4}>
               <ListGroup variant="flush">
                  <ListGroup.Item>
                     <h4>Expected CTC: {job.ctc}</h4>
                  </ListGroup.Item>
                  <ListGroup.Item>
                     Category: {job.category}
                  </ListGroup.Item>
                  <ListGroup.Item>
                     Sub Category: {job.subCategory}
                  </ListGroup.Item>
               </ListGroup>
            </Col>
            <Col md={3}>
               <Card>
                  <ListGroup variant="flush">
                     <ListGroup.Item>
                        <Row>
                           <Col>Last Date:</Col>
                           <Col><strong>{job.closesAt}</strong></Col>
                        </Row>
                     </ListGroup.Item>
                     <ListGroup.Item>
                        <Row>
                           <Col>Location:</Col>
                           <Col><strong>{job.location}</strong></Col>
                        </Row>
                     </ListGroup.Item>
                     
                     <ListGroup.Item>
                        <Button 
                           className="btn-block"
                           type="button"
                           disabled={job.isActive === false}
                           
                        >Apply Now</Button>
                     </ListGroup.Item>
                     
                  </ListGroup>
               </Card>
            </Col>
         </Row>
      </>
   );
}
 
export default JobScreen;