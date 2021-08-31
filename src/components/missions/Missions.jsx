import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, leaveMission, fetchMissions } from '../../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions);
    }
  }, []);

  const handleJoining = (id) => dispatch(joinMission(id));
  const handleLeaving = (id) => dispatch(leaveMission(id));

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{'  '}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map(({
            id, name, description, reserved,
          }) => (
            <tr key={id}>
              <td><p className="fw-bold">{name}</p></td>
              <td><p>{description}</p></td>
              <td className="align-middle">
                {reserved && <Badge bg="info">Active Member</Badge>}
                {!reserved && <Badge bg="secondary">NOT A MEMBER</Badge>}
              </td>
              <td className="col-2 align-middle text-center">
                {reserved
                  && (
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => handleLeaving(id)}
                  >
                    Leave Mission
                  </Button>
                  )}
                {!reserved
                  && (
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    onClick={() => handleJoining(id)}
                  >
                    Join Mission
                  </Button>
                  )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;
