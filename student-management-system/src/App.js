import './App.css';
import StudentList from './components/StudentList';
import StudentCreate from './components/StudentCreate';
import StudentUpdate from "./components/StudentUpdate";
import StudentSearch from './components/StudentSearch';
import {Navbar,Nav,Container} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand to="/">Students List</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="/" className="link">Home</Nav.Link>
            <Nav.Link as={Link} to="/create" className="link">Create</Nav.Link>
            <Nav.Link as={Link} to="/update" className="link">Upadte</Nav.Link>
            <Nav.Link as={Link} to="/search" className="link">Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        <Switch>
          <Route exact path="/">
            <StudentList />
          </Route>
          <Route path="/create">
            <StudentCreate />
          </Route>
          <Route path="/update">
            <StudentUpdate />
          </Route>
          <Route path="/search">
            <StudentSearch />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
