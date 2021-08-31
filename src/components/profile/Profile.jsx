import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

const Profile = () => {
  const sections = useSelector((state) => ([
    {
      title: 'My Missions',
      data: state.missions.filter((mission) => mission.reserved),
    },
    {
      title: 'My Rockets',
      data: state.rockets.filter((rocket) => rocket.reserved),
    },
    {
      title: 'My Dragons',
      data: state.dragons.filter((dragon) => dragon.reserved),
    },
  ]));

  return (
    <Container>
      <Row>
        {sections.map(({ title, data }) => (
          <Col key={title}>
            <h3>{title}</h3>
            <ListGroup>
              {data.map((item) => (
                <ListGroup.Item key={item.id}>{item.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Profile;
