import { Switch, Route, Link } from "react-router-dom"
import Home from "./Home.js"
import About from "./About.js"
import Services from "./Services.js"

function App() {
  return (
    <div className="App">
      <nav>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Services</Link>
      </nav>
      <Switch>
        <Route>
          <Home />
        </Route>
        <Route>
          <About />
        </Route>
        <Route>
          <Services />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
