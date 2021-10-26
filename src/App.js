import Home from "./screens/Home"
import Header from "./components/Header"
import Details from "./screens/Details"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Header />
      <div className="wrapper">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:name" exact component={Details} />
          <Route path="/:name/borders/:border" exact component={Details} />
        </Switch>
      </div>
    </Router>
  )
}
export default App
