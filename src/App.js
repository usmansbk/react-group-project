import {
  HashRouter as Router, NavLink, Switch, Route,
} from 'react-router-dom';
import Missions from './components/missions/Missions';
import Rockets from './components/rockets/Rockets';
import Profile from './components/profile/Profile';
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
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
];

const Header = () => (
  <header>
    <nav>
      <ul>
        {routes.map(({ name, path }) => (
          <li key={path}><NavLink activeClassName="App-active-link" exact to={path}>{name}</NavLink></li>))}
      </ul>
    </nav>
  </header>
);

const App = () => (
  <Router>
    <Header />
    <Switch>
      {routes.map(({ path, component }) => (
        <Route key={path} exact path={path} component={component} />))}
    </Switch>
  </Router>
);

export default App;
