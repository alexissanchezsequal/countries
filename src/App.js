import Home from "./screens/Home"
import Header from "./components/Header"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Header />
      <div className="wrapper">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  )
}
export default App
