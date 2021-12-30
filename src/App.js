import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import CountryDetails from "./Components/CountryDetails/CountryDetails";
// import GoogleMaps from "./Components/GoogleMaps/GoogleMaps";
import GoogleMaps from "./Components/GoogleMaps/GoogleMaps";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/country/:countryName">
          <CountryDetails></CountryDetails>
        </Route>
        <Route path="/maps">
          <GoogleMaps></GoogleMaps>
        </Route>
        <Route path="*">
          <ErrorPage></ErrorPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
