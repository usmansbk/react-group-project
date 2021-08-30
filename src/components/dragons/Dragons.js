import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons, bookDragon, cancelBooking } from '../../redux/dragons/dragons';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);

  useEffect(() => {
    if (!dragons.length) {
      dispatch(fetchDragons);
    }
  }, []);
  const handleBooking = (id) => dispatch(bookDragon(id));
  const handleCancellation = (id) => dispatch(cancelBooking(id));
  return (
    <Container>
      {dragons.map(({
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
                Reserve dragon
              </Button>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Dragons;
