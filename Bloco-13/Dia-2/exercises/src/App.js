import { Home } from "./components/Home";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { About } from "./components/About";
import { Profile } from "./components/Profile";
import { Users } from "./components/Users";
import { StrictAccess } from "./components/StrictAccess";
function App() {
  return (
    < BrowserRouter>
      { /* <Home /> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users/10">Users</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
          <li>
            <Link to="/StrictAccess">StrictAccess</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Users/:id" render={(props) => <Users {...props} greeting="olá" />} />
        <Route path="/StrictAccess"
          render={() => <StrictAccess user={{ username: 'joão', password: '1234' }} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
