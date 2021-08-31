import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { bookRocket, cancelBooking, fetchRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRockets);
    }
  }, []);

  const handleBooking = (id) => dispatch(bookRocket(id));
  const handleCancellation = (id) => dispatch(cancelBooking(id));

  return (
    <Container>
      {rockets.map(({
        id, name, description, images, reserved,
      }) => (
        <Row key={id} className="mb-4">
          <Col xs={4}>
            <Image src={images[0]} thumbnail />
          </Col>
          <Col>
            <h3>{name}</h3>
            <p>
              {reserved && <Badge bg="info">Reserved</Badge>}
              {description}
            </p>
            {reserved && (
              <Button variant="outline-secondary" onClick={() => handleCancellation(id)}>
                Cancel reservation
              </Button>
            )}
            {!reserved && (
              <Button variant="primary" onClick={() => handleBooking(id)}>
                Reserve rocket
              </Button>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Rockets;
