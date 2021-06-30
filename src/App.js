import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Search from "./components/Search";
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/search">
        <Search  />
      </Route>
    </Switch>
  );
}

export default App;
