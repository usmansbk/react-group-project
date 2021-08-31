import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {
  HashRouter as Router, NavLink, Switch, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Missions from './components/missions/Missions';
import Rockets from './components/rockets/Rockets';
import Dragons from './components/dragons/Dragons';
import Profile from './components/profile/Profile';
import store from './redux/configStore';
import logo from './logo.svg';
import './App.css';

const routes = [
  {
    path: '/',
    name: 'Rockets',
    component: Rockets,
  },
  {
    path: '/missions',
    name: 'Missions',
    component: Missions,
  },
  {
    path: '/dragons',
    name: 'Dragons',
    component: Dragons,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
];

const Header = () => (
  <Navbar sticky="top" bg="white">
    <Container className="py-2 border-bottom">
      <Navbar.Brand className="h1">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        {' '}
        Space Traveler&apos;s Hub
      </Navbar.Brand>
      <Nav>
        {(routes.map(({ path, name }) => (
          <Nav.Link key={path}>
            <NavLink
              className="App-link"
              activeClassName="App-active-link"
              exact
              to={path}
            >
              {name}
            </NavLink>
          </Nav.Link>
        )))}
      </Nav>
    </Container>
  </Navbar>
);

const App = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        {routes.map(({ path, component }) => (
          <Route key={path} exact path={path} component={component} />))}
      </Switch>
    </Router>
  </Provider>
);

export default App;
