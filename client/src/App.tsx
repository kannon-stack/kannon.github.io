import { Route, Router, Switch } from "wouter";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Matches the Vite base, so routes still work if the site is served from /kannon.github.io/.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <Router base={base}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
