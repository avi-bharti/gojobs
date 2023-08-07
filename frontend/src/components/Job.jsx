import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Job = ({job}) => {
   return ( 
      <Card className="my-3 p-3 rounded">
         <Card.Body>
            <Card.Title as='h3' className="job-title">
               <strong>{job.title}</strong>
            </Card.Title>
         <Card.Text as='div'> 
            {job.description}
         </Card.Text>
         <Card.Text as='div'>
         <Link to={`/job/${job._id}`}>
            <Button className="mt-2">Apply Now</Button>
         </Link>

            </Card.Text>
         </Card.Body>
      </Card>
    );
}
 
export default Job;